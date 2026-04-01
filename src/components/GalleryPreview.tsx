"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/dis-cephe/cam-cephe.jpg", alt: "Dış cephe cam temizliği", category: "Dış Cephe" },
  { src: "/images/fabrika/fabrika-ic.jpg", alt: "Fabrika iç mekan temizliği", category: "Fabrika" },
  { src: "/images/cami/cami-mihrap.jpg", alt: "Cami mihrap temizliği", category: "Cami" },
  { src: "/images/insaat-sonrasi/detay-5.jpg", alt: "İnşaat sonrası temizlik", category: "İnşaat Sonrası" },
  { src: "/images/ofis-ev/villa-temiz.jpg", alt: "Villa temizliği", category: "Ofis & Ev" },
  { src: "/images/dis-cephe/hero-vinc.jpg", alt: "Vinçli dış cephe temizliği", category: "Dış Cephe" },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Projelerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            İşlerimizden <span className="gradient-text">Kareler</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Binlerce başarılı projemizden bazıları.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 || i === 3 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-primary-300 font-semibold uppercase tracking-wider">
                  {img.category}
                </span>
                <p className="text-white font-medium text-sm mt-1">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
