// Sitenin tek doğruluk kaynağı: NAP (isim-adres-telefon), URL ve hizmet listesi.
// Schema.org, sitemap, metadata ve llms.txt hep buradan beslenir; bir bilgi
// değişirse yalnızca burayı güncelleyin.

export const SITE_URL = "https://www.bursapinartemizlik.com";
export const SITE_NAME = "Bursa Pınar Temizlik";
export const PHONE_DISPLAY = "0534 846 32 69";
export const PHONE_E164 = "+905348463269";
export const EMAIL = "info@bursapinartemizlik.com";
export const FOUNDING_YEAR = "2015";
export const INSTAGRAM_URL = "https://www.instagram.com/bursa_pinartemizlik/";
// Resmi sosyal profiller: schema.org sameAs ile site ve hesaplar aynı işletme
// olarak eşleştirilir. Yeni bir resmi hesap açılınca buraya ekleyin.
export const SOCIAL_PROFILES = [INSTAGRAM_URL];
export const OG_IMAGE = {
  url: "/images/dis-cephe/hero-vinc.jpg",
  width: 4618,
  height: 3464,
  alt: "Bursa Pınar Temizlik sepetli vinç ile dış cephe temizliği",
};

// Hizmet verilen bölge. "Bursa geneli" sitede zaten beyan ediliyor; ilçe listesi
// yerel aramalarda eşleşme için kullanılıyor.
export const SERVICE_AREAS = [
  "Nilüfer",
  "Osmangazi",
  "Yıldırım",
  "Mudanya",
  "Gürsu",
  "Kestel",
  "İnegöl",
  "Gemlik",
];

export const SERVICES = [
  { slug: "dis-cephe", name: "Dış Cephe & Kompozit Temizliği" },
  { slug: "fabrika", name: "Fabrika & Endüstriyel Temizlik" },
  { slug: "insaat-sonrasi", name: "İnşaat Sonrası Temizlik" },
  { slug: "cami", name: "Cami Temizliği" },
  { slug: "ofis-ev", name: "Ofis & Ev Temizliği" },
  { slug: "villa", name: "Villa Temizliği" },
] as const;

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

export const BUSINESS_ID = `${SITE_URL}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo/logo.png"),
    image: absoluteUrl(OG_IMAGE.url),
    description:
      "Bursa'da dış cephe, fabrika, inşaat sonrası, cami, ofis, ev ve villa temizliği yapan profesyonel temizlik şirketi.",
    telephone: PHONE_E164,
    email: EMAIL,
    foundingDate: FOUNDING_YEAR,
    sameAs: SOCIAL_PROFILES,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bursa",
      addressRegion: "Bursa",
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "City", name: "Bursa" },
      ...SERVICE_AREAS.map((name) => ({
        "@type": "AdministrativeArea",
        name: `${name}, Bursa`,
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_E164,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Temizlik Hizmetleri",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: absoluteUrl(`/hizmetler/${s.slug}`),
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "tr-TR",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Next.js, sayfadaki `openGraph` alanını üst layout'unkiyle derin birleştirmez:
// alt sayfa openGraph verdiği anda kökteki görsel/siteName kaybolur. Her sayfa
// openGraph'ı bu yardımcıyla kurar.
export function openGraph(o: {
  url: string;
  title?: string;
  description?: string;
  type?: "website" | "article";
  images?: { url: string; width?: number; height?: number; alt?: string }[];
  publishedTime?: string;
  section?: string;
}) {
  return {
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: o.type ?? "website",
    ...o,
    images: o.images ?? [OG_IMAGE],
  };
}
