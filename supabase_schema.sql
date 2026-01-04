-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ROLES
CREATE TABLE roles (
  role_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  role_name TEXT NOT NULL UNIQUE CHECK (role_name IN ('Admin', 'User'))
);

-- Insert default roles
INSERT INTO roles (role_name) VALUES ('Admin'), ('User');

-- USERS
-- Note: User authentication (email/password) is handled by Supabase Auth (auth.users).
-- This table extends auth.users with application-specific data.
CREATE TABLE users (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role_id UUID REFERENCES roles(role_id) NOT NULL,
  user_email TEXT UNIQUE NOT NULL, -- Keep in sync with auth.users via triggers if needed
  user_is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- THEMES
CREATE TABLE themes (
  theme_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  theme_name TEXT NOT NULL,
  theme_slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- WEDDINGS
CREATE TABLE weddings (
  wedding_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  theme_id UUID REFERENCES themes(theme_id),
  wedding_slug TEXT UNIQUE NOT NULL,
  wedding_date TIMESTAMP WITH TIME ZONE,
  wedding_music_url TEXT,
  -- Groom Details
  groom_name TEXT,
  groom_nickname TEXT,
  groom_photo TEXT,
  -- Bride Details
  bride_name TEXT,
  bride_nickname TEXT,
  bride_photo TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- WEDDING EVENTS
CREATE TABLE wedding_events (
  event_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  wedding_id UUID NOT NULL REFERENCES weddings(wedding_id) ON DELETE CASCADE,
  event_name TEXT NOT NULL,
  event_date DATE,
  event_location_name TEXT,
  event_location_maps TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- WEDDING GUESTS
CREATE TABLE wedding_guests (
  guest_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  wedding_id UUID NOT NULL REFERENCES weddings(wedding_id) ON DELETE CASCADE,
  guest_name TEXT NOT NULL,
  guest_slug TEXT, -- Optional unique slug per guest
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(wedding_id, guest_slug)
);

-- WEDDING RSVPS
CREATE TABLE wedding_rsvps (
  rsvp_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  wedding_id UUID NOT NULL REFERENCES weddings(wedding_id) ON DELETE CASCADE,
  guest_id UUID REFERENCES wedding_guests(guest_id) ON DELETE SET NULL, -- Optional linking
  rsvp_name TEXT NOT NULL,
  rsvp_status BOOLEAN NOT NULL, -- True = Attending
  rsvp_comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS POLICIES
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE themes ENABLE ROW LEVEL SECURITY;
ALTER TABLE weddings ENABLE ROW LEVEL SECURITY;
ALTER TABLE wedding_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE wedding_guests ENABLE ROW LEVEL SECURITY;
ALTER TABLE wedding_rsvps ENABLE ROW LEVEL SECURITY;

-- Helper function to get current user role
CREATE OR REPLACE FUNCTION get_current_user_role_name()
RETURNS TEXT AS $$
DECLARE
  role_name_str TEXT;
BEGIN
  SELECT r.role_name INTO role_name_str
  FROM users u
  JOIN roles r ON u.role_id = r.role_id
  WHERE u.user_id = auth.uid();
  RETURN role_name_str;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Roles: Public read (for setup), Admin write
CREATE POLICY "Roles are viewable by everyone" ON roles FOR SELECT USING (true);

-- Themes: Public read, Admin write
CREATE POLICY "Themes are viewable by everyone" ON themes FOR SELECT USING (true);
CREATE POLICY "Admins can manage themes" ON themes FOR ALL USING (
  get_current_user_role_name() = 'Admin'
);

-- Users: Admin views all, User views own
CREATE POLICY "Admins view all users" ON users FOR SELECT USING (
  get_current_user_role_name() = 'Admin'
);
CREATE POLICY "Users view own profile" ON users FOR SELECT USING (
  auth.uid() = user_id
);

-- Weddings: Public Read (for guests), User Update Own
CREATE POLICY "Weddings are viewable by everyone" ON weddings FOR SELECT USING (true);
CREATE POLICY "Users can insert own wedding" ON weddings FOR INSERT WITH CHECK (
  auth.uid() = user_id
);
CREATE POLICY "Users can update own wedding" ON weddings FOR UPDATE USING (
  auth.uid() = user_id
);
CREATE POLICY "Admins can manage all weddings" ON weddings FOR ALL USING (
  get_current_user_role_name() = 'Admin'
);

-- Wedding Guests: User (Owner) has full access
CREATE POLICY "Users manage own guests" ON wedding_guests FOR ALL USING (
  EXISTS (SELECT 1 FROM weddings w WHERE w.wedding_id = wedding_guests.wedding_id AND w.user_id = auth.uid())
);
-- Guests can view themselves via slug (handled by public query usually, but strict RLS:)
-- Allow public read for invitation rendering (checking if guest exists)
CREATE POLICY "Public read guests" ON wedding_guests FOR SELECT USING (true);

-- Wedding RSVPs: Public Insert (Guests context), User View
CREATE POLICY "Public can insert rsvp" ON wedding_rsvps FOR INSERT WITH CHECK (true);
CREATE POLICY "Users view own wedding rsvps" ON wedding_rsvps FOR SELECT USING (
  EXISTS (SELECT 1 FROM weddings w WHERE w.wedding_id = wedding_rsvps.wedding_id AND w.user_id = auth.uid())
);
