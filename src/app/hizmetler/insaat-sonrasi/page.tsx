import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "İnşaat Sonrası Temizlik",
  description:
    "Bursa'da inşaat sonrası temizlik hizmeti. 3 aşamalı metodoloji, buhar jeneratörlü leke çıkarma, sıfır hata garantisi. 0534 846 34 69",
};

const data: ServicePageData = {
  title: "İnşaat Sonrası Temizlik",
  subtitle: "Sıfır Hata, Oturuma Hazır",
  description:
    "Kaba temizlikten ince temizliğe, dezenfeksiyona kadar 3 aşamalı profesyonel sürecimizle yeni binaları yaşama hazırlıyoruz.",
  heroImage: "/images/insaat-sonrasi/detay-6.jpg",
  features: [
    { icon: "Layers", title: "3 Aşamalı Metodoloji", description: "Kaba Temizlik → İnce Temizlik → Dezenfeksiyon. Sistematik ve eksiksiz bir süreç." },
    { icon: "Thermometer", title: "170°C Buhar Jeneratörü", description: "Harç ve silikon lekeleri buhar gücüyle yüzeye zarar vermeden çıkarılır. Kimyasal kullanımı minimumda." },
    { icon: "Sparkles", title: "Detay Temizliği", description: "Pencere rayları, kapı kasaları, priz delikleri dahil her noktada kusursuz detay temizliği." },
    { icon: "Shield", title: "Yüzey Koruma", description: "Parke, granit, mermer gibi hassas yüzeyler özel ürünlerle korunarak temizlenir." },
    { icon: "Eye", title: "Kalite Kontrol", description: "Her kat ve her oda ayrı ayrı kontrol edilir. Müşteri teslim öncesi final kontrol." },
    { icon: "CheckCircle", title: "Teslim Garantisi", description: "Anahtar teslim temizlik. Taşınmaya hazır durumda teslim garantisi." },
  ],
  steps: [
    { step: "01", title: "Kaba Temizlik", description: "İnşaat artıkları, moloz, toz ve büyük parçacıkların uzaklaştırılması." },
    { step: "02", title: "İnce Temizlik", description: "Cam, zemin, duvar ve tüm yüzeylerin detaylı temizliği." },
    { step: "03", title: "Leke Çıkarma", description: "Harç, boya, silikon ve yapıştırıcı lekeleri buhar ile temizleme." },
    { step: "04", title: "Dezenfeksiyon & Teslim", description: "Tüm alanın dezenfeksiyonu ve kalite kontrol sonrası teslim." },
  ],
  gallery: [
    "/images/insaat-sonrasi/before-1.jpg",
    "/images/insaat-sonrasi/before-2.jpg",
    "/images/insaat-sonrasi/detay-1.jpg",
    "/images/insaat-sonrasi/detay-3.jpg",
    "/images/insaat-sonrasi/detay-4.jpg",
    "/images/insaat-sonrasi/detay-5.jpg",
  ],
  technicalDetails: [
    "3 aşamalı sistematik temizlik metodolojisi (Kaba → İnce → Dezenfeksiyon)",
    "170°C buhar jeneratörlü uçlarla harç ve silikon çıkarma",
    "Yüzeye zarar vermeyen özel solüsyonlar",
    "PVC pencere ve kapılar için özel temizleyiciler",
    "Mermer ve granit zeminler için pH nötr bakım ürünleri",
    "Parke ve laminat yüzeyler için koruyucu temizlik",
    "Boya ve yapıştırıcı kalıntıları için çözücüsüz formüller",
  ],
  equipment: [
    "170°C buhar jeneratörleri (hassas leke çıkarma)",
    "Endüstriyel su çekme makineleri",
    "Profesyonel cam temizleme ekipmanları",
    "Yüksek güçlü vakum aspiratörleri",
    "Teleskopik erişimli temizlik ekipmanları",
    "Mikro fiber detay temizlik setleri",
    "ULV dezenfeksiyon cihazları",
  ],
};

export default function InsaatSonrasiPage() {
  return <ServicePageLayout data={data} />;
}
