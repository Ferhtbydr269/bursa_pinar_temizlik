import type { Metadata } from "next";
import { openGraph } from "@/lib/site";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUsSection from "@/components/WhyUsSection";
import GalleryPreview from "@/components/GalleryPreview";
import HomeFaq from "@/components/HomeFaq";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Bursa Temizlik Şirketi | Bursa Pınar Temizlik – Ücretsiz Keşif",
  },
  description:
    "Bursa'da dış cephe, inşaat sonrası, fabrika, cami, ofis, ev ve villa temizliği. 2015'ten beri 300+ proje, sepetli vinç ve endüstriyel ekipman. Ücretsiz keşif: 0534 846 32 69",
  alternates: { canonical: "/" },
  openGraph: openGraph({ url: "/" }),
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <WhyUsSection />
      <GalleryPreview />
      <HomeFaq />
      <CTASection />
    </>
  );
}
