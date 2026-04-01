import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Ofis & Ev Temizliği",
  description:
    "Bursa'da profesyonel ofis ve ev temizliği. Anti-alerjik ürünler, derin temizlik, periyodik bakım. 0534 846 34 69",
};

const data: ServicePageData = {
  title: "Ofis & Ev Temizliği",
  subtitle: "Yaşam Alanlarınızda Nefes Alın",
  description:
    "Minimalist yaklaşım, anti-alerjik ürünler ve profesyonel ekipmanlarla yaşam ve çalışma alanlarınızda ferah bir ortam.",
  heroImage: "/images/ofis-ev/villa-temiz.jpg",
  features: [
    { icon: "Home", title: "Kapsamlı Ev Temizliği", description: "Salon, yatak odası, mutfak, banyo — her oda için özel temizlik protokolü." },
    { icon: "Sparkles", title: "Derin Temizlik", description: "Halı yıkama, koltuk temizliği, perde ve stor yıkama dahil kapsamlı derin temizlik." },
    { icon: "Wind", title: "Anti-Alerjik Temizlik", description: "Alerji ve astım hastalarına uygun, HEPA filtreli temizlik ve doğal ürünler." },
    { icon: "Shield", title: "Ofis Dezenfeksiyonu", description: "Çalışma ortamında hijyen için masa, telefon, klavye ve ortak alanların dezenfeksiyonu." },
    { icon: "Heart", title: "Güvenilir Personel", description: "Referans kontrolü yapılmış, sigortalı ve profesyonel temizlik personeli." },
    { icon: "Clock", title: "Esnek Zamanlama", description: "Haftalık, iki haftada bir veya aylık periyodik temizlik planları." },
  ],
  steps: [
    { step: "01", title: "İhtiyaç Analizi", description: "Alanın büyüklüğü, oda sayısı ve özel ihtiyaçlar belirlenir." },
    { step: "02", title: "Ekip Atama", description: "Alana uygun kişi sayısı ve ekipman belirlenir." },
    { step: "03", title: "Temizlik Uygulaması", description: "Sistematik oda oda temizlik, yukarıdan aşağıya yöntem." },
    { step: "04", title: "Kontrol & Teslim", description: "Final kontrol ve müşteri memnuniyet onayı." },
  ],
  gallery: [
    "/images/ofis-ev/villa-temiz.jpg",
    "/images/ofis-ev/salon-temiz.jpg",
    "/images/ofis-ev/detay-1.jpg",
    "/images/ofis-ev/detay-2.jpg",
    "/images/ofis-ev/detay-4.jpg",
    "/images/ofis-ev/detay-5.jpg",
  ],
  technicalDetails: [
    "Anti-alerjik ve doğal bazlı temizlik ürünleri",
    "HEPA filtreli vakum sistemleri (alerjen filtreleme)",
    "Halı ve koltuk derin yıkama (enjeksiyon-ekstraksiyon)",
    "Mutfak yağ ve kireç çözücü özel formüller",
    "Banyo küf ve kireç önleyici koruyucu ürünler",
    "Cam ve ayna streak-free (iz bırakmaz) temizlik",
    "Periyodik bakım planları (haftalık/aylık seçenekler)",
  ],
  equipment: [
    "HEPA filtreli profesyonel vakum makineleri",
    "Halı & koltuk yıkama makinesi (enjeksiyon-ekstraksiyon)",
    "Buhar temizleme makinesi (banyo ve mutfak)",
    "Profesyonel cam temizleme ekipmanları",
    "Mikro fiber temizlik setleri",
    "ULV dezenfeksiyon cihazı",
    "Teleskopik tavan ve duvar temizleme araçları",
  ],
};

export default function OfisEvPage() {
  return <ServicePageLayout data={data} />;
}
