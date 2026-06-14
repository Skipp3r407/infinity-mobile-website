import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { SectionDivider } from "@/components/effects";
import { Hero } from "@/components/Hero";
import { QuoteForm } from "@/components/QuoteForm";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustBar } from "@/components/TrustBar";
import { WhyChooseSection } from "@/components/WhyChooseSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <EmergencyBanner />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <WhyChooseSection />
      <SectionDivider />
      <QuoteForm />
      <SectionDivider />
      <CTASection />
    </>
  );
}