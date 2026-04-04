import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Dış Cephe & Kompozit Temizliği",
  description:
    "Bursa'da profesyonel dış cephe ve kompozit panel temizliği. 20-45m sepetli vinç, nano-teknolojik cam koruyucu ve IRATA sertifikalı ekip. 0534 846 32 69",
};

const data: ServicePageData = {
  title: "Dış Cephe & Kompozit Temizliği",
  subtitle: "Zirve Hijyeni",
  description:
    "20-45m arası sepetli vinç parkuru, teleskopik karbon fiber fırçalar ve nano-teknolojik cam koruyucu solüsyonlarla binaların dış cephelerini pırıl pırıl yapıyoruz.",
  heroImage: "/images/dis-cephe/cam-cephe.jpg",
  features: [
    { icon: "Droplets", title: "Saf Su Teknolojisi", description: "Deiyonize su (DI Water) sistemiyle cam yüzeylerde iz bırakmadan temizlik. Mineral tortusu sıfır." },
    { icon: "Shield", title: "Nano Cam Koruyucu", description: "Yağmur kaydırma özellikli nano-teknolojik solüsyonlar ile temizlik sonrası uzun süreli koruma." },
    { icon: "Zap", title: "IRATA Sertifikalı Ekip", description: "Uluslararası standartlarda eğitimli dağcı temizlikçiler ve ISG uyumlu vinç operatörleri." },
    { icon: "Eye", title: "Kompozit Panel Bakımı", description: "ACP panellerin oksitlenme ve çevresel kirlilikten arındırılması, fabrika parlaklığına kavuşturulması." },
    { icon: "Thermometer", title: "Sıcak Su Basınçlı Yıkama", description: "80°C'ye kadar ısıtılmış su ile inatçı kir ve yağ lekelerinin yüzeyden derin temizliği." },
    { icon: "Calendar", title: "Periyodik Bakım Planı", description: "Şirketler için yıllık periyodik bakım planlayıcısı. 3, 6 ve 12 aylık paketler." },
  ],
  steps: [
    { step: "01", title: "Keşif & Analiz", description: "Bina yüksekliği, cephe malzemesi ve kirlilik seviyesi tespit edilir." },
    { step: "02", title: "Ekipman Seçimi", description: "Vinç kapasitesi ve kimyasal türü binaya özel belirlenir." },
    { step: "03", title: "Uygulama", description: "Yukarıdan aşağıya sistematik temizlik, ISG kurallarına tam uyum." },
    { step: "04", title: "Nano Koruma", description: "Cam ve kompozit yüzeylere nano-teknolojik koruyucu uygulanır." },
  ],
  gallery: [
    "/images/dis-cephe/cam-cephe.jpg",
    "/images/dis-cephe/hero-vinc.jpg",
    "/images/dis-cephe/bina-temizlik.jpg",
    "/images/dis-cephe/yuksek-bina.jpg",
    "/images/dis-cephe/detay-1.jpg",
    "/images/dis-cephe/detay-3.jpg",
  ],
  technicalDetails: [
    "20m - 45m arası sepetli vinç kullanımı",
    "Saf su (deiyonize su) teknolojisi ile iz bırakmayan temizlik",
    "Nano-teknolojik cam koruyucu solüsyon (yağmur kaydırma özelliği)",
    "IRATA sertifikalı dağcı temizlikçi kadrosu",
    "ISG standartlarına %100 uyumlu çalışma prosedürleri",
    "Kompozit (ACP) panel oksitlenme temizliği",
    "Yüksek basınçlı sıcak su yıkama sistemi",
  ],
  equipment: [
    "20m - 45m teleskopik sepetli vinçler",
    "Karbon fiber teleskopik fırçalar (18m erişim)",
    "DI Water (deiyonize su) üretim sistemleri",
    "Yüksek basınçlı yıkama makineleri (250 bar)",
    "Nano-teknolojik cam koruyucu aplikatörleri",
    "IRATA standartlı ip erişim ekipmanları",
    "Kişisel koruyucu donanım (KKD) setleri",
  ],
};

export default function DisCephePage() {
  return <ServicePageLayout data={data} />;
}
