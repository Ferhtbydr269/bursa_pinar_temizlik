import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUsSection from "@/components/WhyUsSection";
import GalleryPreview from "@/components/GalleryPreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <WhyUsSection />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
