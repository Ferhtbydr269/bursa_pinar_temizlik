"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Users,
  Building2,
  Calendar,
  Target,
  Heart,
  TrendingUp,
  Shield,
} from "lucide-react";

const stats = [
  { icon: Calendar, value: "10+", label: "Yıllık Deneyim" },
  { icon: Building2, value: "300+", label: "Tamamlanan Proje" },
  { icon: Users, value: "1.000+", label: "Memnun Müşteri" },
  { icon: Award, value: "20+", label: "Profesyonel Personel" },
];

const milestones = [
  { year: "2015", title: "Kuruluş", description: "Bursa Pınar Temizlik, bireysel ev temizliği ile hizmete başladı." },
  { year: "2017", title: "Kurumsal Hizmetler", description: "Fabrika ve ofis temizliği ile kurumsal segmente giriş." },
  { year: "2019", title: "Ekipman Yatırımı", description: "Sepetli vinç ve endüstriyel scrubber makineleri bünyeye katıldı." },
  { year: "2021", title: "Dış Cephe Uzmanlığı", description: "IRATA eğitimli ekip ve nano-teknolojik solüsyonlarla dış cephe liderliği." },
  { year: "2023", title: "Dijital Dönüşüm", description: "Dijital temizlik formları, müşteri paneli ve online randevu sistemi." },
  { year: "2025", title: "Bölgesel Liderlik", description: "Bursa ve çevresinde 300+ tamamlanan projeyle bölgesel liderlik." },
];

const values = [
  { icon: Target, title: "Kalite Odaklılık", description: "Her projede aynı yüksek standartları garanti ediyoruz." },
  { icon: Heart, title: "Müşteri Memnuniyeti", description: "Memnun kalmazsanız ücretsiz tekrar temizlik garantisi." },
  { icon: TrendingUp, title: "Sürekli Gelişim", description: "En yeni teknolojileri ve yöntemleri takip ediyoruz." },
  { icon: Shield, title: "Güvenilirlik", description: "Sigortalı personel, referans kontrolü ve gizlilik garantisi." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="pt-32 pb-8 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Hakkımızda
            </h1>
            <p className="text-lg text-primary-100/80 max-w-xl mx-auto">
              2015&apos;ten bu yana Bursa&apos;da profesyonel temizlik hizmeti sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                Hikayemiz
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Bursa&apos;nın Güvenilir <span className="gradient-text">Temizlik Partneri</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Bursa Pınar Temizlik, 2015 yılında kurulmuş olup bireysel ve
                  kurumsal temizlik sektöründe Bursa&apos;nın öncü firmalarından biridir.
                </p>
                <p>
                  20-45m arası sepetli vinçler, binicili scrubber makineler,
                  170°C buhar jeneratörleri ve nano-teknolojik solüsyonlar gibi
                  son teknoloji ekipmanlarla hizmet veriyoruz.
                </p>
                <p>
                  IRATA sertifikalı dağcı temizlikçilerimiz, ISG standartlarına
                  tam uyumlu operatörlerimiz ve 20+ kişilik profesyonel ekibimizle
                  her projede en yüksek kaliteyi sunmayı taahhüt ediyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <Image
                  src="/images/dis-cephe/hero-vinc.jpg"
                  alt="Bursa Pınar Temizlik ekibi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-4xl font-black text-primary-600">10+</div>
                <div className="text-sm text-gray-600 font-medium">Yıllık Deneyim</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100"
              >
                <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Değerlerimiz
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Yolculuğumuz
          </motion.h2>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-primary-600 flex items-center justify-center">
                  <span className="text-2xl font-black text-white">{m.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-gray-600">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
