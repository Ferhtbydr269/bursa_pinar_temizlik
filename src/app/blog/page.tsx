"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["Tümü", "Leke Çıkarma", "Dış Cephe", "Ev Temizliği", "Endüstriyel", "İpuçları"];

const blogPosts = [
  {
    slug: "kahve-lekesi-nasil-cikar",
    title: "Kahve Lekesi Nasıl Çıkar? 5 Etkili Yöntem",
    excerpt: "Halıdan, koltuktan ve kumaştan kahve lekesi çıkarmanın profesyonel yöntemleri. Ev yapımı ve endüstriyel çözümler.",
    category: "Leke Çıkarma",
    image: "/images/ofis-ev/detay-3.jpg",
    date: "15 Mart 2025",
    readTime: "4 dk",
  },
  {
    slug: "kompozit-panel-oksitlenme",
    title: "Kompozit Paneldeki Oksitlenme Nasıl Giderilir?",
    excerpt: "ACP panellerin oksitlenme nedenleri, profesyonel temizlik yöntemleri ve koruyucu önlemler.",
    category: "Dış Cephe",
    image: "/images/dis-cephe/bina-temizlik.jpg",
    date: "8 Mart 2025",
    readTime: "6 dk",
  },
  {
    slug: "insaat-sonrasi-temizlik-rehberi",
    title: "İnşaat Sonrası Temizlik: A'dan Z'ye Rehber",
    excerpt: "Yeni binaların temizlik süreci, kullanılması gereken kimyasallar ve profesyonel ipuçları.",
    category: "İpuçları",
    image: "/images/insaat-sonrasi/detay-6.jpg",
    date: "1 Mart 2025",
    readTime: "8 dk",
  },
  {
    slug: "fabrika-zemin-temizligi",
    title: "Epoksi Zemin Temizliği: pH Nötr Ürünlerin Önemi",
    excerpt: "Epoksi kaplı fabrika zeminlerinin doğru temizlenmesi, yanlış ürünlerin verdiği zararlar.",
    category: "Endüstriyel",
    image: "/images/fabrika/fabrika-ic.jpg",
    date: "22 Şubat 2025",
    readTime: "5 dk",
  },
  {
    slug: "halidan-leke-cikarma",
    title: "Halıdan Zor Lekeler Nasıl Çıkar?",
    excerpt: "Kan, mürekkep, boya ve yağ lekeleri için halı temizleme teknikleri. Profesyonel vakum ve buhar yöntemleri.",
    category: "Leke Çıkarma",
    image: "/images/cami/cami-ic.jpg",
    date: "14 Şubat 2025",
    readTime: "5 dk",
  },
  {
    slug: "ev-temizlik-plani",
    title: "Haftalık Ev Temizlik Planı Nasıl Yapılır?",
    excerpt: "Oda oda sistematik temizlik planı. Profesyonellerin evde uyguladığı yöntemler.",
    category: "Ev Temizliği",
    image: "/images/ofis-ev/villa-temiz.jpg",
    date: "7 Şubat 2025",
    readTime: "4 dk",
  },
  {
    slug: "cam-temizligi-puf-noktalari",
    title: "Cam Temizliğinde Profesyonel Püf Noktaları",
    excerpt: "İz bırakmayan cam temizliğinin sırları. Saf su teknolojisi ve nano koruyucuların avantajları.",
    category: "Dış Cephe",
    image: "/images/dis-cephe/cam-cephe.jpg",
    date: "1 Şubat 2025",
    readTime: "3 dk",
  },
  {
    slug: "banyo-kirec-temizligi",
    title: "Banyo Kireç Lekesi Nasıl Çıkar?",
    excerpt: "Duşakabin, musluk ve fayans üzerindeki kireç lekelerinin etkili temizleme yöntemleri.",
    category: "Ev Temizliği",
    image: "/images/ofis-ev/detay-5.jpg",
    date: "25 Ocak 2025",
    readTime: "4 dk",
  },
  {
    slug: "endustriyel-temizlik-makineleri",
    title: "Endüstriyel Temizlik Makineleri: Hangisi Ne İşe Yarar?",
    excerpt: "Scrubber, sweeper, yüksek basınçlı yıkama ve buhar jeneratörlerinin kullanım alanları.",
    category: "Endüstriyel",
    image: "/images/fabrika/detay-1.jpg",
    date: "18 Ocak 2025",
    readTime: "7 dk",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchCategory = selectedCategory === "Tümü" || post.category === selectedCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <section className="pt-32 pb-8 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-200 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Leke Kütüphanesi & Blog
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Temizlik <span className="text-primary-300">Rehberi</span>
            </h1>
            <p className="text-lg text-primary-100/80 max-w-xl mx-auto">
              Profesyonel temizlik ipuçları, leke çıkarma rehberleri ve endüstriyel bilgiler.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Leke veya konu ara... (ör: kahve lekesi)"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0 outline-none text-lg transition-colors bg-white"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-primary-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 service-card-hover">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime} okuma</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                        Devamını Oku
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aradığınız konuda yazı bulunamadı.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
