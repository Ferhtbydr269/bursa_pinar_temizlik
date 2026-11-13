// Blog yazılarının tek kaynağı. Liste sayfası, detay sayfası ve sitemap buradan
// beslenir; listede olup detayı olmayan (404 veren) yazı oluşamaz.
// İçerikte **kalın** ile başlayan paragraflar ara başlık gibi görüntülenir.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string; // görüntülenen tarih
  isoDate: string; // schema.org ve sitemap için
  readTime: string;
  content: string[];
}

export const BLOG_CATEGORIES = [
  "Tümü",
  "Leke Çıkarma",
  "Dış Cephe",
  "Ev Temizliği",
  "Endüstriyel",
  "İpuçları",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "kahve-lekesi-nasil-cikar",
    title: "Kahve Lekesi Nasıl Çıkar? 5 Etkili Yöntem",
    excerpt:
      "Halıdan, koltuktan ve kumaştan kahve lekesi çıkarmanın profesyonel yöntemleri. Ev yapımı ve endüstriyel çözümler.",
    category: "Leke Çıkarma",
    image: "/images/ofis-ev/detay-3.jpg",
    date: "15 Mart 2025",
    isoDate: "2025-03-15",
    readTime: "4 dk",
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
  {
    slug: "kompozit-panel-oksitlenme",
    title: "Kompozit Paneldeki Oksitlenme Nasıl Giderilir?",
    excerpt:
      "ACP panellerin oksitlenme nedenleri, profesyonel temizlik yöntemleri ve koruyucu önlemler.",
    category: "Dış Cephe",
    image: "/images/dis-cephe/bina-temizlik.jpg",
    date: "8 Mart 2025",
    isoDate: "2025-03-08",
    readTime: "6 dk",
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
  {
    slug: "insaat-sonrasi-temizlik-rehberi",
    title: "İnşaat Sonrası Temizlik: A'dan Z'ye Rehber",
    excerpt:
      "Kaba temizlik, ince temizlik ve dezenfeksiyon aşamalarıyla inşaat sonrası temizliğin tüm adımları.",
    category: "İpuçları",
    image: "/images/insaat-sonrasi/detay-6.jpg",
    date: "1 Mart 2025",
    isoDate: "2025-03-01",
    readTime: "8 dk",
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
  {
    slug: "fabrika-zemin-temizligi",
    title: "Epoksi Zemin Temizliği: pH Nötr Ürünlerin Önemi",
    excerpt:
      "Epoksi kaplı fabrika zeminlerinin doğru temizlenmesi, yanlış ürünlerin verdiği zararlar.",
    category: "Endüstriyel",
    image: "/images/fabrika/fabrika-ic.jpg",
    date: "22 Şubat 2025",
    isoDate: "2025-02-22",
    readTime: "5 dk",
    content: [
      "Epoksi zemin kaplamaları; dayanıklılığı, kolay temizlenmesi ve kimyasallara karşı direnci sayesinde fabrikalarda, depolarda ve otoparklarda en çok tercih edilen zemin türlerinden biridir. Ancak yanlış temizlik yöntemleri, kaplamanın parlaklığını ve ömrünü hızla azaltır.",
      "**Neden pH Nötr Ürün?** Güçlü asidik (tuz ruhu gibi) ya da güçlü alkali (kostik içeren) temizleyiciler epoksi yüzeyde matlaşma, sararma ve mikro çatlaklara yol açar. pH değeri 7 civarında olan nötr temizleyiciler kiri çözerken kaplamaya zarar vermez.",
      "**Günlük Temizlik:** Önce zemindeki toz, talaş ve partiküller süpürücü (sweeper) makinelerle alınır. Kum ve metal tozu gibi sert partiküller, üzerinden forklift geçtikçe zımpara etkisi yaparak epoksiyi çizer; bu yüzden kuru süpürme ilk adımdır.",
      "**Islak Yıkama:** Zemin, pH nötr deterjanla çalışan binicili veya yürüyüşlü zemin yıkama makineleriyle (scrubber) yıkanır. Bu makineler aynı anda fırçalar, kirli suyu vakumlar ve zemini kuru bırakır; kayma riskini de ortadan kaldırır.",
      "**Yağ ve Gres Lekeleri:** Üretim alanlarındaki yağ lekeleri için epoksiyle uyumlu özel yağ çözücüler kullanılır. Ürün lekeye uygulanır, kısa süre bekletilir ve yumuşak pedle fırçalanır. Sert tel fırça ve aşındırıcı pedler kesinlikle kullanılmamalıdır.",
      "**Yapılmaması Gerekenler:** Çamaşır suyu ve tuz ruhu gibi ürünler, deterjanı bol suyla durulamadan bırakmak ve zemini aşırı sıcak buharla uzun süre temizlemek epoksi kaplamaya zarar verir. Deterjan kalıntısı zamanla yüzeyde yapışkan bir film oluşturur ve kiri daha hızlı tutar.",
      "**Periyodik Bakım:** Yoğun trafikli alanlarda günlük, diğer alanlarda haftalık yıkama; yılda bir veya iki kez de derin temizlik önerilir. Bu düzen hem zeminin ömrünü uzatır hem de ISG açısından kaymaya bağlı iş kazalarını azaltır.",
      "Bursa Pınar Temizlik olarak fabrikalarda üretimi durdurmadan, vardiya planına uygun şekilde epoksi zemin temizliği yapıyoruz.",
    ],
  },
  {
    slug: "halidan-leke-cikarma",
    title: "Halıdan Zor Lekeler Nasıl Çıkar?",
    excerpt:
      "Kan, mürekkep, boya ve yağ lekeleri için halı temizleme teknikleri. Profesyonel vakum ve buhar yöntemleri.",
    category: "Leke Çıkarma",
    image: "/images/cami/cami-ic.jpg",
    date: "14 Şubat 2025",
    isoDate: "2025-02-14",
    readTime: "5 dk",
    content: [
      "Halıdaki lekelerde başarının sırrı hızdır: Leke ne kadar tazeyse o kadar kolay çıkar. Ancak her lekenin kimyası farklıdır; yanlış ürün lekeyi halı liflerine daha da işleyebilir. Önce halının etiketine ve elyaf türüne (yün, ipek, sentetik) bakmak gerekir.",
      "**Altın Kural - Ovalamayın, Bastırın:** Leke ovalandığında lifler arasında yayılır ve halının tüyü bozulur. Temiz, beyaz bir bezle lekenin dışından içine doğru bastırarak sıvıyı emdirin.",
      "**Kan Lekesi:** Mutlaka soğuk su kullanın; sıcak su kandaki proteini pıhtılaştırıp lekeyi kalıcı hale getirir. Soğuk suya bir miktar tuz ekleyerek lekeyi bastırarak temizleyin, ardından temiz suyla durulayın.",
      "**Mürekkep Lekesi:** Az miktarda alkollü bir çözeltiyi temiz bir beze emdirip lekeye hafifçe bastırın. Alkolü önce halının görünmeyen bir köşesinde deneyin; bazı boyalar alkolden etkilenebilir.",
      "**Yağ Lekesi:** Lekenin üzerine karbonat veya mısır nişastası serpin ve birkaç saat bekletin. Toz yağı emdikten sonra süpürün; kalan izi ılık su ve az bulaşık deterjanıyla temizleyin.",
      "**Boya Lekesi:** Su bazlı boyalar henüz kurumamışsa ılık su ve deterjanla çıkarılabilir. Yağlı boya ve kurumuş boya lekelerinde ev yöntemleri genellikle yetersiz kalır ve halıya zarar verebilir; profesyonel müdahale gerekir.",
      "**Profesyonel Yöntemler:** Derin lekelerde enjeksiyon-ekstraksiyon makineleri temizleme solüsyonunu liflerin dibine kadar püskürtüp kirle birlikte geri emer. Buhar uygulaması ise hem lekeyi çözer hem de dezenfeksiyon sağlar. Yün ve ipek halılarda sıcaklık kontrollü uygulama şarttır.",
      "Cami halıları gibi geniş alanlı ve hassas halılarda Bursa Pınar Temizlik ekibi derin vakumlama ve uygun yöntemlerle yerinde temizlik yapmaktadır.",
    ],
  },
  {
    slug: "ev-temizlik-plani",
    title: "Haftalık Ev Temizlik Planı Nasıl Yapılır?",
    excerpt:
      "Oda oda sistematik temizlik planı. Profesyonellerin evde uyguladığı yöntemler.",
    category: "Ev Temizliği",
    image: "/images/ofis-ev/villa-temiz.jpg",
    date: "7 Şubat 2025",
    isoDate: "2025-02-07",
    readTime: "4 dk",
    content: [
      "Evin tamamını tek günde temizlemeye çalışmak yorucu olur ve genellikle bazı alanlar ihmal edilir. Profesyonel temizlik ekiplerinin yaptığı gibi işleri güne ve odaya bölmek, evi her zaman düzenli tutmanın en kolay yoludur.",
      "**Temel Prensip - Yukarıdan Aşağıya:** Her odada önce yüksek yüzeylerin (raf üstleri, lambalar, dolap üstleri) tozu alınır, en son zemin temizlenir. Böylece düşen toz, temizlenmiş yüzeyleri yeniden kirletmez.",
      "**Her Gün (10-15 dakika):** Bulaşıkların yıkanması, mutfak tezgahının silinmesi, dağınıklığın toplanması ve çöpün çıkarılması. Bu küçük alışkanlıklar haftalık temizliği yarı yarıya hafifletir.",
      "**Pazartesi - Mutfak:** Ocak, fırın kapağı, buzdolabı kapakları ve dolap yüzeyleri silinir. Haftada bir buzdolabındaki eski yiyecekler kontrol edilir.",
      "**Salı - Banyo:** Klozet, lavabo, duşakabin ve aynalar temizlenir. Kireç oluşumunu önlemek için duş sonrası camların çekçekle sıyrılması alışkanlık haline getirilmelidir.",
      "**Çarşamba - Yatak Odaları:** Nevresimler değiştirilir, toz alınır, zemin süpürülür. Perşembe günü salon ve oturma alanları, cuma günü ise tüm evin zeminleri silinir.",
      "**Hafta Sonu - Ayrıntılar:** Cam silme, kapı kolları ve prizler gibi sık dokunulan yüzeylerin dezenfeksiyonu ve ayda bir yapılacak derin temizlik işleri (fırın içi, dolap içleri, perdeler).",
      "Yoğun tempoda çalışanlar için Bursa Pınar Temizlik periyodik ev temizliği hizmetiyle bu planı sizin yerinize düzenli olarak uygular.",
    ],
  },
  {
    slug: "cam-temizligi-puf-noktalari",
    title: "Cam Temizliğinde Profesyonel Püf Noktaları",
    excerpt:
      "İz bırakmayan cam temizliğinin sırları. Saf su teknolojisi ve nano koruyucuların avantajları.",
    category: "Dış Cephe",
    image: "/images/dis-cephe/cam-cephe.jpg",
    date: "1 Şubat 2025",
    isoDate: "2025-02-01",
    readTime: "3 dk",
    content: [
      "Camda kalan izlerin en büyük sebebi, kurumuş sudaki mineraller ve fazla kullanılan deterjandır. Profesyonel cam temizliğinde amaç kiri çözmek kadar, yüzeyde hiçbir kalıntı bırakmamaktır.",
      "**Güneşli Saatlerden Kaçının:** Doğrudan güneş alan camlarda su ve deterjan çok hızlı kurur ve yüzeyde lekeler kalır. Cam temizliği için sabah erken veya akşamüstü saatleri idealdir.",
      "**Az Deterjan, Doğru Araç:** Suya çok az miktarda deterjan eklemek yeterlidir. Islatıcı ile camı köpürttükten sonra kauçuk ağızlı bir çekçekle yukarıdan aşağıya doğru, her çekişten sonra ağzı silerek sıyırın. Kenarlarda kalan damlaları mikrofiber bezle alın.",
      "**Gazete Yerine Mikrofiber:** Gazete kağıdı mürekkep bırakabilir ve tüy döker. Kuru ve temiz mikrofiber bezler camda iz ve tüy bırakmaz.",
      "**Saf Su (DI Water) Teknolojisi:** Dış cephe camlarında kullanılan deiyonize su, minerallerinden arındırıldığı için kuruduğunda iz bırakmaz. Teleskopik fırçalarla birlikte kullanıldığında yüksek camlar deterjansız ve iz bırakmadan temizlenir.",
      "**Nano Koruyucu:** Temizlik sonrası uygulanan nano-teknolojik koruyucular camda su itici bir katman oluşturur. Yağmur suyu camda tutunmadan akar, kir daha geç birikir ve bir sonraki temizlik kolaylaşır.",
      "Yüksek binaların dış cephe camları için Bursa Pınar Temizlik, sepetli vinç ve saf su sistemleriyle güvenli ve iz bırakmayan temizlik yapmaktadır.",
    ],
  },
  {
    slug: "banyo-kirec-temizligi",
    title: "Banyo Kireç Lekesi Nasıl Çıkar?",
    excerpt:
      "Duşakabin, musluk ve fayans üzerindeki kireç lekelerinin etkili temizleme yöntemleri.",
    category: "Ev Temizliği",
    image: "/images/ofis-ev/detay-5.jpg",
    date: "25 Ocak 2025",
    isoDate: "2025-01-25",
    readTime: "4 dk",
    content: [
      "Kireç, sert sudaki kalsiyum ve magnezyum minerallerinin yüzeylerde birikmesiyle oluşur. Bursa gibi şebeke suyunun sertlik değeri bölgeden bölgeye değiştiği şehirlerde duşakabin, musluk ve fayanslarda beyaz lekeler sık görülür.",
      "**Sirke Yöntemi:** Kireç alkali yapıdadır ve hafif asitlerle çözülür. Beyaz sirkeyi ılık suyla yarı yarıya karıştırıp lekeli yüzeye püskürtün, 15-20 dakika bekletin ve yumuşak bir süngerle silin. Musluk başlarındaki kireç için sirkeye batırılmış bir bezi musluğa sarıp bir süre bekletebilirsiniz.",
      "**Limon Tuzu:** Daha inatçı lekelerde ılık suda eritilmiş limon tuzu etkilidir. Uygulamadan sonra yüzeyi mutlaka bol suyla durulayın.",
      "**Duşakabin Camları:** Sirkeli çözeltiyle temizlenen cam, durulandıktan sonra mikrofiber bezle kurulanmalıdır. Her duş sonrası camı çekçekle sıyırmak kireç oluşumunu büyük ölçüde önler.",
      "**DİKKAT - Doğal Taşta Asit Kullanmayın:** Mermer, traverten ve granit gibi doğal taşlar asitten zarar görür; sirke ve limon tuzu bu yüzeylerde matlaşma ve aşınmaya yol açar. Doğal taş için pH nötr özel temizleyiciler kullanılmalıdır.",
      "**DİKKAT - Ürünleri Asla Karıştırmayın:** Çamaşır suyu, tuz ruhu veya sirke gibi asidik ürünlerle karıştırıldığında sağlığa zararlı klor gazı açığa çıkar. Farklı temizlik ürünlerini aynı anda kullanmayın ve banyoyu temizlerken ortamı havalandırın.",
      "**Kalıcı Çözüm:** Duşakabin camlarına uygulanan nano koruyucular ve kireç tutmayı azaltan su yumuşatma filtreleri, temizlik sıklığını ciddi oranda azaltır.",
      "Yoğun kireç birikmesi olan banyolarda Bursa Pınar Temizlik, yüzeye uygun ürünlerle profesyonel derin temizlik hizmeti sunar.",
    ],
  },
  {
    slug: "endustriyel-temizlik-makineleri",
    title: "Endüstriyel Temizlik Makineleri: Hangisi Ne İşe Yarar?",
    excerpt:
      "Scrubber, sweeper, yüksek basınçlı yıkama ve buhar jeneratörlerinin kullanım alanları.",
    category: "Endüstriyel",
    image: "/images/fabrika/detay-1.jpg",
    date: "18 Ocak 2025",
    isoDate: "2025-01-18",
    readTime: "7 dk",
    content: [
      "Fabrika, depo ve geniş ticari alanlarda temizliğin kalitesini ve hızını belirleyen şey, doğru makinenin doğru işte kullanılmasıdır. Yanlış makine hem zaman kaybettirir hem de zemine ve yüzeylere zarar verebilir.",
      "**Zemin Süpürme Makinesi (Sweeper):** Geniş alanlardaki toz, talaş, kum ve ambalaj artıklarını kuru olarak toplar. Islak yıkama öncesi ilk adımdır ve özellikle depo, otopark ve üretim alanlarında kullanılır.",
      "**Zemin Yıkama Makinesi (Scrubber):** Zemini deterjanlı suyla fırçalar ve kirli suyu aynı anda vakumlayarak yüzeyi kuru bırakır. Küçük alanlarda yürüyüşlü, binlerce metrekarelik alanlarda binicili modeller tercih edilir. Kuru bırakması kaymaya bağlı iş kazası riskini azaltır.",
      "**Yüksek Basınçlı Yıkama Makinesi:** Dış cephe, beton saha, yükleme rampası ve makine dış yüzeyleri için kullanılır. Sıcak su özellikli modeller yağ ve gres gibi inatçı kirlerde çok daha etkilidir. Hassas yüzeylerde basınç ayarı mutlaka düşürülmelidir.",
      "**Buhar Jeneratörü:** Yüksek sıcaklıktaki buharla kimyasal kullanmadan yağ, harç, silikon ve kireç gibi kirleri çözer; aynı zamanda dezenfeksiyon sağlar. Gıda üretim alanları ve inşaat sonrası detay temizliğinde öne çıkar.",
      "**Endüstriyel Vakum Makinesi:** Islak ve kuru kullanılabilen yüksek kapasiteli vakumlar; ince toz, sıvı dökülmeleri ve köşe temizliği için kullanılır. Tehlikeli tozlar için HEPA filtreli modeller gerekir.",
      "**Doğru Seçim Nasıl Yapılır?** Alanın büyüklüğü, zemin tipi (epoksi, beton, seramik), kir türü ve üretimin durdurulup durdurulamayacağı birlikte değerlendirilir. Çoğu fabrikada en iyi sonuç, bu makinelerin vardiya planına göre birlikte kullanılmasıyla alınır.",
      "Bursa Pınar Temizlik, fabrika temizliğinde binicili scrubber, sweeper, sıcak su basınçlı yıkama ve buhar jeneratörlerinden oluşan ekipman parkuruyla hizmet vermektedir.",
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
