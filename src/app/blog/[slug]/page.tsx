import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";

const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}> = {
  "kahve-lekesi-nasil-cikar": {
    title: "Kahve Lekesi Nasıl Çıkar? 5 Etkili Yöntem",
    category: "Leke Çıkarma",
    date: "15 Mart 2025",
    readTime: "4 dk",
    image: "/images/ofis-ev/detay-3.jpg",
    content: [
      "Kahve lekesi, günlük hayatta en sık karşılaşılan leke türlerinden biridir. Özellikle halı, koltuk ve kıyafetlere dökülen kahve, hızlı müdahale edilmezse kalıcı izler bırakabilir.",
      "**1. Soğuk Su ile Hızlı Müdahale:** Leke taze iken soğuk su ile hemen müdahale edin. Sıcak su kullanmayın çünkü kahvedeki proteinleri pıhtılaştırarak lekeyi sabitler.",
      "**2. Karbonat + Sirke Yöntemi:** Bir çay kaşığı karbonatı lekenin üzerine serpin, ardından beyaz sirke ile ıslatın. 15 dakika bekletip temiz bir bezle silin.",
      "**3. Bulaşık Deterjanı Çözeltisi:** Ilık suya birkaç damla bulaşık deterjanı ekleyin. Temiz bir bezle lekeyi dıştan içe doğru silin.",
      "**4. Profesyonel Halı Şampuanı:** Halı ve koltuk lekeleri için enjeksiyon-ekstraksiyon yöntemiyle profesyonel halı yıkama makinesi kullanılmalıdır.",
      "**5. Buhar Temizleme (Profesyonel):** 170°C buhar jeneratörü ile yüzeye zarar vermeden derinlemesine leke çıkarma. Bu yöntem aynı zamanda dezenfeksiyon sağlar.",
      "Önemli: Eski ve kurumuş kahve lekelerinde profesyonel temizlik hizmeti almanızı öneririz. Bursa Pınar Temizlik olarak halı, koltuk ve kumaş temizliğinde uzman ekibimizle yanınızdayız.",
    ],
  },
  "kompozit-panel-oksitlenme": {
    title: "Kompozit Paneldeki Oksitlenme Nasıl Giderilir?",
    category: "Dış Cephe",
    date: "8 Mart 2025",
    readTime: "6 dk",
    image: "/images/dis-cephe/bina-temizlik.jpg",
    content: [
      "Kompozit (ACP) paneller, modern binaların dış cephelerinde yaygın olarak kullanılır. Ancak zaman içinde UV ışınları, hava kirliliği ve nem nedeniyle oksitlenme meydana gelir.",
      "**Oksitlenmenin Nedenleri:** UV radyasyonu, asit yağmurları, toz ve partikül birikimi, yanlış temizlik ürünleri kullanımı, bakım ihmal edilmesi.",
      "**Profesyonel Çözüm - 1. Aşama:** Yüzey analizi yapılır. Oksitlenme derinliği ve panel türü belirlenir. pH ölçümü yapılarak uygun kimyasal seçilir.",
      "**2. Aşama - Temizlik:** pH nötr özel ACP temizleyiciler ile yüzey temizlenir. Aşındırıcı ürünler KESİNLİKLE kullanılmaz. Yumuşak fırçalar ve mikro fiber bezlerle işlem yapılır.",
      "**3. Aşama - Restorasyon:** Oksitlenmiş katman özel polishing ürünleriyle giderilir. Panel fabrika parlaklığına kavuşturulur.",
      "**4. Aşama - Koruma:** Nano-teknolojik koruyucu solüsyon uygulanır. Bu solüsyon UV koruma, yağmur kaydırma ve kir tutmama özelliği sağlar. Koruma süresi 12-18 ay.",
      "Bursa Pınar Temizlik olarak 20-45m sepetli vinçlerle her yükseklikteki binanın kompozit panellerini profesyonelce temizliyor ve koruma altına alıyoruz.",
    ],
  },
  "insaat-sonrasi-temizlik-rehberi": {
    title: "İnşaat Sonrası Temizlik: A'dan Z'ye Rehber",
    category: "İpuçları",
    date: "1 Mart 2025",
    readTime: "8 dk",
    image: "/images/insaat-sonrasi/detay-6.jpg",
    content: [
      "İnşaat sonrası temizlik, yeni yapılan veya tadilat geçirmiş binaların yaşanılır hale getirilmesi için kritik bir süreçtir. Bu süreç 3 ana aşamadan oluşur.",
      "**AŞAMA 1 - Kaba Temizlik:** İnşaat artıkları, moloz parçaları, tahta ve ambalaj malzemeleri toplanır. Büyük toz ve kir yığınları vakumlanır. Zeminler süpürülür ve ilk kez silinir.",
      "**AŞAMA 2 - İnce Temizlik:** Camlar, pencere çerçeveleri ve kapı kasaları detaylı temizlenir. Zemin türüne göre uygun ürünlerle yıkama yapılır. Banyo ve mutfak armatürleri parlatılır. Priz, anahtar ve havalandırma kapakları temizlenir.",
      "**AŞAMA 3 - Dezenfeksiyon:** Tüm yüzeyler anti-bakteriyel solüsyonlarla dezenfekte edilir. ULV sisleme ile hava dezenfeksiyonu yapılır. Koku giderme uygulanır.",
      "**Zor Leke Çıkarma:** 170°C buhar jeneratörü ile harç, alçı, silikon ve boya lekeleri yüzeye zarar vermeden çıkarılır. PVC pencere ve kapılar için özel beyazlatıcı uygulanır.",
      "**Mermer ve Granit Zemin Bakımı:** pH nötr temizleyiciler kullanılır. Asidik veya alkali ürünler taşa zarar verir. Kristalizasyon uygulaması ile parlaklık kazandırılır.",
      "Profesyonel inşaat sonrası temizlik hizmeti için Bursa Pınar Temizlik'i arayabilirsiniz. Anahtar teslim, sıfır hata garantisiyle çalışıyoruz.",
    ],
  },
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Yazı Bulunamadı" };
  return {
    title: post.title,
    description: post.content[0],
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return <BlogPostClient post={post} />;
}
