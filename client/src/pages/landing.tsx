import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { Solutions } from "@/components/landing/Solutions";
import { Tools } from "@/components/landing/Tools";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Security } from "@/components/landing/Security";
import { Pricing } from "@/components/landing/Pricing";
import { DemoSection } from "@/components/landing/DemoSection";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { DemoFormModal } from "@/components/landing/DemoFormModal";

export default function Landing() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);

  return (
    <div className="min-h-screen bg-background" data-testid="landing-page">
      <Header onBookDemo={openDemoModal} />
      <main>
        <Hero onBookDemo={openDemoModal} />
        <Problems />
        <Solutions />
        <Tools />
        <HowItWorks />
        <Security />
        <Pricing onBookDemo={openDemoModal} />
        <DemoSection onBookDemo={openDemoModal} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <DemoFormModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </div>
  );
}
