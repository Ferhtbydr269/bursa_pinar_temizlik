import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, openGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Temizlik Fiyatı İçin Ücretsiz Teklif Alın",
  description:
    "Bursa'da dış cephe, inşaat sonrası, fabrika, ofis, ev ve villa temizliği fiyatı için ücretsiz keşif ve net teklif alın. Hemen arayın: 0534 846 32 69 veya WhatsApp'tan yazın.",
  alternates: { canonical: "/fiyat-hesapla" },
  openGraph: openGraph({ url: "/fiyat-hesapla", title: "Temizlik Fiyatı İçin Ücretsiz Teklif Alın | Bursa Pınar Temizlik", description: "Bursa'da dış cephe, inşaat sonrası, fabrika, ofis, ev ve villa temizliği fiyatı için ücretsiz keşif ve net teklif alın. Hemen arayın: 0534 846 32 69 veya WhatsApp'tan yazın." }),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Ücretsiz Teklif Al", path: "/fiyat-hesapla" },
        ])}
      />
      {children}
    </>
  );
}
