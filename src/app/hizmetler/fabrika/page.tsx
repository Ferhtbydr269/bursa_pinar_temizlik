import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Fabrika & Endüstriyel Temizlik",
  description:
    "Bursa'da fabrika ve endüstriyel alan temizliği. Binicili scrubber makineler, shift-based planlama, epoksi zemin temizliği. 0534 846 32 69",
};

const data: ServicePageData = {
  title: "Fabrika & Endüstriyel Temizlik",
  subtitle: "Kesintisiz Üretim, Maksimum Hijyen",
  description:
    "Üretim hattı durdurulmadan yapılan shift-based temizlik planlaması, binicili zemin yıkama otomatları ve pH nötr endüstriyel temizleyicilerle fabrika hijyeni.",
  heroImage: "/images/fabrika/fabrika-dis.jpg",
  features: [
    { icon: "Factory", title: "Shift-Based Temizlik", description: "Üretim vardiyalarına uygun planlama. Üretim hattı durdurmadan gece veya mola saatlerinde temizlik." },
    { icon: "Droplets", title: "pH Nötr Temizleyiciler", description: "Epoksi zeminler için özel formüllü, yüzeye zarar vermeyen pH nötr endüstriyel temizleyiciler." },
    { icon: "Wrench", title: "Binicili Scrubber Makineler", description: "Geniş alanlarda hızlı ve verimli temizlik için binicili zemin yıkama otomatları." },
    { icon: "Shield", title: "HACCP Uyumlu", description: "Gıda üretim tesisleri için HACCP standartlarına uygun temizlik ve dezenfeksiyon protokolleri." },
    { icon: "BarChart3", title: "Periyodik Raporlama", description: "Dijital temizlik formları, öncesi/sonrası fotoğraflar ve aylık performans raporları." },
    { icon: "Clock", title: "7/24 Hizmet", description: "Gece vardiyası dahil kesintisiz hizmet. Acil temizlik talepleri için özel ekip." },
  ],
  steps: [
    { step: "01", title: "Tesis Analizi", description: "Zemin türü, üretim süreci ve kirlilik kaynakları analiz edilir." },
    { step: "02", title: "Plan Oluşturma", description: "Üretim takvimine uygun shift-based temizlik planı hazırlanır." },
    { step: "03", title: "Ekipman Konuşlandırma", description: "Scrubber makineler ve kimyasallar tesis boyutuna göre seçilir." },
    { step: "04", title: "Uygulama & Rapor", description: "Temizlik sonrası dijital form ve fotoğraflı rapor sunulur." },
  ],
  gallery: [
    "/images/fabrika/fabrika-dis.jpg",
    "/images/fabrika/fabrika-ic.jpg",
    "/images/fabrika/detay-1.jpg",
    "/images/fabrika/detay-2.jpg",
    "/images/fabrika/detay-3.jpg",
    "/images/fabrika/detay-4.jpg",
  ],
  technicalDetails: [
    "Epoksi ve polyester zeminler için pH nötr temizleyiciler",
    "Ağır yağ çözücü maddeler (solvent içermeyen formülasyon)",
    "Shift-based (vardiyalı) temizlik planlaması",
    "HACCP ve ISO 22000 uyumlu dezenfeksiyon protokolleri",
    "Antistatik zemin bakım solüsyonları",
    "Yüksek tavan ve çelik konstrüksiyon temizliği",
    "Atık su yönetimi ve çevresel uygunluk",
  ],
  equipment: [
    "Binicili zemin yıkama otomatları (Scrubber)",
    "Endüstriyel vakum sistemleri",
    "Yüksek basınçlı sıcak/soğuk su yıkama makineleri",
    "Teleskopik erişimli tavan temizleme ekipmanları",
    "Buhar jeneratörleri (170°C)",
    "HEPA filtreli toz toplama üniteleri",
    "Endüstriyel dezenfeksiyon sislemeleri (ULV cihazları)",
  ],
};

export default function FabrikaPage() {
  return <ServicePageLayout data={data} />;
}
