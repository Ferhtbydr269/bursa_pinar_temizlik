"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Leaf,
  Clock,
  Users,
  Wrench,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "ISG Sertifikalı Ekip",
    description:
      "IRATA sertifikalı dağcı temizlikçiler ve İSG standartlarına tam uyumlu vinç operatörleri.",
  },
  {
    icon: Leaf,
    title: "Çevre Dostu Kimyasallar",
    description:
      "Solvent içermeyen, pH nötr temizleyiciler ve nano-teknolojik koruyucu solüsyonlar.",
  },
  {
    icon: Clock,
    title: "7/24 Acil Servis",
    description:
      "Kurumsal müşteriler için gece vardiyası dahil shift-based temizlik planlaması.",
  },
  {
    icon: Users,
    title: "20+ Profesyonel Personel",
    description:
      "Her kategoride uzmanlaşmış, 20+ deneyimli ve sigortalı temizlik personeli.",
  },
  {
    icon: Wrench,
    title: "Endüstriyel Ekipman",
    description:
      "20-45m sepetli vinçler, binicili scrubber makineler ve 170°C buhar jeneratörleri.",
  },
  {
    icon: BadgeCheck,
    title: "Garanti & Memnuniyet",
    description:
      "Her işte kalite garantisi. Memnun kalmazsanız ücretsiz tekrar temizlik.",
  },
];

export default function WhyUsSection() {
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
            Neden Biz?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Farkımız <span className="gradient-text">Teknolojide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rakiplerden yıllar ileride ekipman ve metodoloji ile çalışıyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-5 group-hover:bg-primary-600 transition-colors">
                <feature.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
