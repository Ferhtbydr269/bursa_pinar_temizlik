import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Villa Temizliği",
  description:
    "Bursa'da lüks villa temizliği. Geniş metrekarelere özel ekip, bahçe, havuz kenarı ve dış mekan dahil kapsamlı hizmet. 0534 846 32 69",
};

const data: ServicePageData = {
  title: "Villa Temizliği",
  subtitle: "Lüks Yaşamın Temizlik Partneri",
  description:
    "Geniş metrekarelere sahip villaların her köşesi için özel ekip. İç mekan, dış mekan, bahçe alanları ve havuz kenarı dahil premium temizlik.",
  heroImage: "/images/ofis-ev/salon-temiz.jpg",
  features: [
    { icon: "Castle", title: "Premium Villa Paketi", description: "300m²'den büyük villalar için özel organize edilmiş 4-6 kişilik profesyonel temizlik ekibi." },
    { icon: "Sparkles", title: "Detaylı İç Mekan", description: "Salon, yatak odaları, banyo, mutfak ve merdiven alanlarının eksiksiz derin temizliği." },
    { icon: "Droplets", title: "Havuz Kenarı Temizlik", description: "Havuz çevresi, teras ve veranda alanlarının basınçlı yıkama ile temizliği." },
    { icon: "TreePine", title: "Bahçe & Dış Mekan", description: "Garaj, bahçe duvarları, giriş alanları ve dış cephenin genel temizliği." },
    { icon: "Sun", title: "Cam & Balkon", description: "Tüm pencere, balkon, french balkon ve kış bahçesi camlarının pırıl pırıl temizliği." },
    { icon: "Crown", title: "VIP Hizmet", description: "Randevulu özel hizmet, gizlilik garantisi ve kişiye özel temizlik planı." },
  ],
  steps: [
    { step: "01", title: "Yerinde Keşif", description: "Villa metrekaresi, oda sayısı ve dış alanlar yerinde değerlendirilir." },
    { step: "02", title: "Özel Plan", description: "Villa boyutu ve özelliklerine göre ekip ve ekipman planlanır." },
    { step: "03", title: "Kapsamlı Temizlik", description: "İç ve dış mekan eş zamanlı olarak ayrı ekiplerle temizlenir." },
    { step: "04", title: "Premium Teslim", description: "Final kontrol, koku giderme ve müşteri onayı ile teslim." },
  ],
  gallery: [
    "/images/ofis-ev/salon-temiz.jpg",
    "/images/ofis-ev/villa-temiz.jpg",
    "/images/ofis-ev/detay-6.jpg",
    "/images/ofis-ev/detay-7.jpg",
    "/images/ofis-ev/detay-3.jpg",
    "/images/ofis-ev/detay-2.jpg",
  ],
  technicalDetails: [
    "300m²+ villalar için 4-6 kişilik özel ekip organizasyonu",
    "İç mekan ve dış mekan eş zamanlı temizlik koordinasyonu",
    "Mermer, granit ve parke zemin bakımı (pH nötr ürünler)",
    "Yüksek tavanlı alanlar için teleskopik erişim ekipmanları",
    "Havuz çevresi ve teras basınçlı yıkama",
    "Koku giderme ve hava ferahlatma uygulaması",
    "Periyodik bakım planları (haftalık/aylık VIP paketler)",
  ],
  equipment: [
    "Profesyonel HEPA filtreli vakum sistemleri",
    "Yüksek basınçlı dış mekan yıkama makineleri",
    "Halı ve koltuk derin yıkama makineleri",
    "Buhar jeneratörleri (banyo ve mutfak)",
    "Teleskopik cam temizleme ekipmanları",
    "Zemin cilalama ve bakım makineleri",
    "Ozon jeneratörü (koku giderme)",
  ],
};

export default function VillaPage() {
  return <ServicePageLayout data={data} />;
}
