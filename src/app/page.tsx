import { HeroSection } from "@/components/sections/hero-section";
import { ProductRevealSection } from "@/components/sections/product-reveal-section";
import { TechnologyExperienceSection } from "@/components/sections/technology-experience-section";
import { InteractiveShowcaseSection } from "@/components/sections/interactive-showcase-section";
import { LifestyleGallerySection } from "@/components/sections/lifestyle-gallery-section";
import { TechSpecsSection } from "@/components/sections/tech-specs-section";
import { TrustSocialSection } from "@/components/sections/trust-social-section";
import { PreOrderSection } from "@/components/sections/pre-order-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductRevealSection />
      <TechnologyExperienceSection />
      <InteractiveShowcaseSection />
      <LifestyleGallerySection />
      <TechSpecsSection />
      <TrustSocialSection />
      <PreOrderSection />
      <FinalCtaSection />
      <Footer />
    </>
  );
}
