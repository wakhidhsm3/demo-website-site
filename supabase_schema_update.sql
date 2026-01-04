-- Add Live Stream URL to Weddings
ALTER TABLE weddings ADD COLUMN IF NOT EXISTS wedding_live_stream_url TEXT;

-- STORIES (Love Timeline)
CREATE TABLE IF NOT EXISTS stories (
  story_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  wedding_id UUID NOT NULL REFERENCES weddings(wedding_id) ON DELETE CASCADE,
  story_year TEXT NOT NULL,
  story_title TEXT NOT NULL,
  story_content TEXT NOT NULL,
  story_photo TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- GIFTS (Digital Envelope)
CREATE TABLE IF NOT EXISTS gifts (
  gift_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  wedding_id UUID NOT NULL REFERENCES weddings(wedding_id) ON DELETE CASCADE,
  gift_bank_name TEXT NOT NULL,
  gift_account_name TEXT NOT NULL,
  gift_account_number TEXT NOT NULL,
  gift_qr_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS POLICIES FOR NEW TABLES

-- Stories: Public Read, User Manage Own
ALTER TABLE stories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Stories viewable by everyone" ON stories FOR SELECT USING (true);

CREATE POLICY "Users manage own stories" ON stories FOR ALL USING (
  EXISTS (SELECT 1 FROM weddings w WHERE w.wedding_id = stories.wedding_id AND w.user_id = auth.uid())
);

-- Gifts: Public Read, User Manage Own
ALTER TABLE gifts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Gifts viewable by everyone" ON gifts FOR SELECT USING (true);

CREATE POLICY "Users manage own gifts" ON gifts FOR ALL USING (
  EXISTS (SELECT 1 FROM weddings w WHERE w.wedding_id = gifts.wedding_id AND w.user_id = auth.uid())
);
