import type { Metadata } from "next";
import { openGraph } from "@/lib/site";

// Not: Bu layout /blog/[slug] yazılarını da sarar. Breadcrumb şeması burada
// değil, her yazının kendi sayfasında basılır (çift BreadcrumbList olmasın).
export const metadata: Metadata = {
  // template: altındaki yazılar da "... | Bursa Pınar Temizlik" son ekini alsın
  title: {
    // Kökteki şablon bu default'a son eki zaten ekliyor.
    default: "Temizlik Rehberi ve Leke Çıkarma Blogu",
    template: "%s | Bursa Pınar Temizlik",
  },
  description:
    "Leke çıkarma yöntemleri, ev temizlik planı, cam ve kireç temizliği, epoksi zemin bakımı ve endüstriyel temizlik makineleri hakkında uzman rehberler.",
  alternates: { canonical: "/blog" },
  openGraph: openGraph({
    url: "/blog",
    title: "Temizlik Rehberi ve Leke Çıkarma Blogu | Bursa Pınar Temizlik",
    description:
      "Leke çıkarma, ev temizliği, cam ve kireç temizliği ve endüstriyel temizlik hakkında uzman rehberler.",
  }),
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
