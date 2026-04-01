"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Factory,
  HardHat,
  Landmark,
  Home,
  Castle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Dış Cephe & Kompozit Temizliği",
    subtitle: "Zirve Hijyeni",
    description:
      "20-45m sepetli vinç parkuru, teleskopik karbon fiber fırçalar ve nano-teknolojik cam koruyucu solüsyonlarla dış cephe temizliği.",
    image: "/images/dis-cephe/cam-cephe.jpg",
    icon: Building2,
    href: "/hizmetler/dis-cephe",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Fabrika & Endüstriyel Alan",
    subtitle: "Kesintisiz Üretim, Maksimum Hijyen",
    description:
      "Binicili zemin yıkama otomatları, pH nötr epoksi temizleyiciler ve shift-based temizlik planlaması.",
    image: "/images/fabrika/fabrika-ic.jpg",
    icon: Factory,
    href: "/hizmetler/fabrika",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "İnşaat Sonrası Temizlik",
    subtitle: "Sıfır Hata, Oturuma Hazır",
    description:
      "3 aşamalı süreç: Kaba Temizlik, İnce Temizlik, Dezenfeksiyon. 170°C buhar jeneratörlü uçlarla leke çıkarma.",
    image: "/images/insaat-sonrasi/detay-6.jpg",
    icon: HardHat,
    href: "/hizmetler/insaat-sonrasi",
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Cami Temizliği",
    subtitle: "Hassas Dokular ve Dezenfeksiyon",
    description:
      "Halıların vakum gücüyle derin temizliği, gül suyu bazlı dezenfektan kullanımı ve hassas yüzey bakımı.",
    image: "/images/cami/cami-ic.jpg",
    icon: Landmark,
    href: "/hizmetler/cami",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Ofis & Ev Temizliği",
    subtitle: "Yaşam Alanlarınızda Nefes Alın",
    description:
      "Minimalist yaklaşım, anti-alerjik ürünler ve ferah yaşam alanları için profesyonel ev temizliği.",
    image: "/images/ofis-ev/villa-temiz.jpg",
    icon: Home,
    href: "/hizmetler/ofis-ev",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Villa Temizliği",
    subtitle: "Lüks Yaşamın Temizlik Partneri",
    description:
      "Geniş metrekareler için özel ekip, detaylı pencere temizliği, bahçe alanları ve havuz kenarı dahil.",
    image: "/images/ofis-ev/salon-temiz.jpg",
    icon: Castle,
    href: "/hizmetler/villa",
    color: "from-teal-500 to-emerald-500",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Profesyonel Temizlik <span className="gradient-text">Çözümleri</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Her alan için uzmanlaşmış ekipler ve endüstriyel ekipmanlarla
            Bursa&apos;nın en kapsamlı temizlik hizmeti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={service.href} className="group block">
                <div className="service-card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs text-white/80 font-medium uppercase tracking-wider">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      Detaylı Bilgi
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
