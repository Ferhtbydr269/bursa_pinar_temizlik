import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, openGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda: 2015'ten Beri Bursa'da Temizlik",
  description:
    "2015'ten bu yana Bursa'da bireysel ve kurumsal temizlik hizmeti veren Bursa Pınar Temizlik'i tanıyın: 300+ proje, 20+ kişilik profesyonel ekip, endüstriyel ekipman.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: openGraph({ url: "/hakkimizda", title: "Hakkımızda: 2015'ten Beri Bursa'da Temizlik | Bursa Pınar Temizlik", description: "2015'ten bu yana Bursa'da bireysel ve kurumsal temizlik hizmeti veren Bursa Pınar Temizlik'i tanıyın: 300+ proje, 20+ kişilik profesyonel ekip, endüstriyel ekipman." }),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ])}
      />
      {children}
    </>
  );
}
