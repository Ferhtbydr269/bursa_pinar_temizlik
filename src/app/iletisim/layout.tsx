import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, openGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim: Bursa Temizlik Hizmeti Teklifi",
  description:
    "Bursa Pınar Temizlik iletişim bilgileri: 0534 846 32 69, WhatsApp ve iletişim formu. Pazartesi-Cumartesi 08:00-19:00 arası Bursa genelinde ücretsiz keşif.",
  alternates: { canonical: "/iletisim" },
  openGraph: openGraph({ url: "/iletisim", title: "İletişim: Bursa Temizlik Hizmeti Teklifi | Bursa Pınar Temizlik", description: "Bursa Pınar Temizlik iletişim bilgileri: 0534 846 32 69, WhatsApp ve iletişim formu. Pazartesi-Cumartesi 08:00-19:00 arası Bursa genelinde ücretsiz keşif." }),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ])}
      />
      {children}
    </>
  );
}
