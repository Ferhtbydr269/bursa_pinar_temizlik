import type { Metadata } from "next";
import { openGraph } from "@/lib/site";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Bursa Cami Temizliği",
  description:
    "Bursa'da profesyonel cami temizliği. Halı derin vakumlama, gül suyu bazlı dezenfeksiyon, hassas yüzey bakımı. 0534 846 32 69",
  alternates: { canonical: "/hizmetler/cami" },
  openGraph: openGraph({ url: "/hizmetler/cami" }),
};

const data: ServicePageData = {
  slug: "cami",
  title: "Cami Temizliği",
  subtitle: "Hassas Dokular ve Dezenfeksiyon",
  description:
    "İbadethanelerin manevi atmosferini koruyarak, hassas halılar, ahşap detaylar ve yüksek kubbe alanlarında profesyonel temizlik hizmeti.",
  heroImage: "/images/cami/cami-mihrap.jpg",
  features: [
    { icon: "Heart", title: "Hassas Yaklaşım", description: "Tarihi ve manevi değere sahip yüzeylere zarar vermeden, özenli ve saygılı temizlik." },
    { icon: "Droplets", title: "Gül Suyu Bazlı Dezenfektan", description: "Hoş koku bırakan, doğal ve anti-alerjik gül suyu bazlı dezenfeksiyon uygulaması." },
    { icon: "Wind", title: "Derin Halı Vakumlama", description: "Yüksek vakum gücüyle halılardaki toz, akar ve alerjenlerin derinlemesine temizliği." },
    { icon: "Shield", title: "Anti-Bakteriyel Uygulama", description: "Yoğun kullanıma maruz yüzeylerde uzun süreli anti-bakteriyel koruma." },
    { icon: "Sparkles", title: "Kubbe & Avize Temizliği", description: "Yüksek kubbe alanları, avizeler ve pencere vitraylarının özel ekipmanla temizliği." },
    { icon: "Users", title: "Deneyimli Ekip", description: "Cami temizliğinde uzmanlaşmış, ibadet saatlerine saygılı profesyonel ekip." },
  ],
  steps: [
    { step: "01", title: "Ön Hazırlık", description: "İbadet saatleri dışında planlama, hassas eşyaların korunması." },
    { step: "02", title: "Halı Temizliği", description: "Derin vakumlama ve doğal dezenfektan ile halı bakımı." },
    { step: "03", title: "Genel Temizlik", description: "Duvar, pencere, avize ve kubbe alanlarının detaylı temizliği." },
    { step: "04", title: "Dezenfeksiyon", description: "Gül suyu bazlı dezenfektan ile hoş kokulu final uygulaması." },
  ],
  gallery: [
    "/images/cami/cami-ic.jpg",
    "/images/cami/cami-mihrap.jpg",
    "/images/cami/detay-1.jpg",
    "/images/cami/detay-2.jpg",
    "/images/cami/detay-3.jpg",
  ],
  technicalDetails: [
    "Gül suyu bazlı doğal dezenfektan kullanımı",
    "Yüksek vakum gücüyle halı derin temizliği",
    "Anti-alerjik ve anti-bakteriyel ürünler",
    "Hassas ahşap yüzeyler için pH nötr temizleyiciler",
    "Vitray cam temizliği için özel solüsyonlar",
    "İbadet saatlerine uygun esnek çalışma planı",
    "Kubbe ve yüksek tavanlı alanlar için güvenli erişim ekipmanları",
  ],
  equipment: [
    "Yüksek kapasiteli halı vakumlama makineleri",
    "Gül suyu bazlı organik dezenfektan sistemleri",
    "ULV sisleme cihazları (dezenfeksiyon)",
    "Teleskopik pencere ve avize temizleme ekipmanları",
    "İskele sistemleri (kubbe ve yüksek alan erişimi)",
    "Mikro fiber ve doğal bezler (hassas yüzeyler)",
    "Anti-statik toz alma ekipmanları",
  ],
  faqs: [
    { q: "Cami temizliği ibadet saatlerini etkiler mi?", a: "Hayır. Çalışmayı ibadet saatleri dışında planlıyor, hassas eşyaları koruma altına alarak ibadete engel olmadan temizlik yapıyoruz." },
    { q: "Cami halıları nasıl temizleniyor?", a: "Halılar yüksek vakum gücüyle derinlemesine vakumlanarak toz, akar ve alerjenlerden arındırılır; ardından doğal, gül suyu bazlı dezenfektan uygulanır." },
    { q: "Kubbe, avize ve vitraylar da temizleniyor mu?", a: "Evet. Yüksek kubbe alanları ve avizeler güvenli erişim ekipmanlarıyla, vitray camlar ise özel solüsyonlarla temizlenir." },
    { q: "Hangi temizlik ürünleri kullanılıyor?", a: "Anti-alerjik ve anti-bakteriyel ürünler, ahşap yüzeyler için pH nötr temizleyiciler ve hoş koku bırakan gül suyu bazlı doğal dezenfektan kullanılır." },
  ],
};

export default function CamiPage() {
  return <ServicePageLayout data={data} />;
}
