import type { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialSection } from "@/components/landing/testimonial-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FAQSection } from "@/components/landing/faq-section";
import { LatestArticlesSection } from "@/components/landing/latest-articles-section";

export const metadata: Metadata = {
  title: "Wedify - Platform Undangan Pernikahan Digital Premium",
  description: "Buat undangan pernikahan digital impianmu dengan mudah. Tersedia berbagai tema premium, fitur RSVP real-time, dan manajemen tamu yang praktis.",
};

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <LatestArticlesSection />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
