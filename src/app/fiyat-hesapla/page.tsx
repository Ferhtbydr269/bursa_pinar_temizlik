"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackConversion } from "@/lib/gtag";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Hemen Arayın",
    subtitle: "0534 846 32 69",
    description: "Uzman ekibimiz sorularınızı yanıtlasın.",
    href: "tel:+905348463269",
    color: "from-blue-500 to-blue-600",
    external: false,
  },
  {
    icon: MessageSquare,
    title: "WhatsApp'tan Yazın",
    subtitle: "0534 846 32 69",
    description: "Fotoğraf gönderin, anında dönüş alın.",
    href: "https://wa.me/905348463269",
    color: "from-green-500 to-green-600",
    external: true,
  },
  {
    icon: Mail,
    title: "E-posta Gönderin",
    subtitle: "info@bursapinartemizlik.com",
    description: "Detaylı talebinizi bize iletin.",
    href: "mailto:info@bursapinartemizlik.com",
    color: "from-purple-500 to-purple-600",
    external: false,
  },
];

const steps = [
  {
    number: "1",
    title: "Bize Ulaşın",
    description: "Telefon, WhatsApp veya iletişim formu ile talebinizi iletin.",
  },
  {
    number: "2",
    title: "Ücretsiz Keşif",
    description: "Ekibimiz alanınızı inceler ve ihtiyaçlarınızı belirler.",
  },
  {
    number: "3",
    title: "Net Teklif",
    description: "Size özel, şeffaf ve net fiyat teklifimizi sunarız.",
  },
];

const guarantees = [
  "Ücretsiz keşif ve fiyat teklifi",
  "Şeffaf ve sürpriz maliyetsiz fiyatlandırma",
  "Bursa geneli hızlı hizmet",
  "Sigortalı ve uzman personel",
];

export default function FiyatHesaplaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-200 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Ücretsiz Keşif & Teklif
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Hemen <span className="text-primary-300">Bize Ulaşın</span>
            </h1>
            <p className="text-lg text-primary-100/80 max-w-xl mx-auto">
              Temizlik ihtiyacınız için size özel ücretsiz teklif alın. Bir telefon
              kadar yakınınızdayız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                onClick={() => {
                  if (method.href.startsWith("tel:") || method.href.startsWith("https://wa.me")) {
                    trackConversion();
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-xl hover:border-primary-200 transition-all"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-primary-600 font-semibold mb-3">{method.subtitle}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Teklif Almak Çok Kolay
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Üç basit adımda size özel fiyat teklifinizi alın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-600 text-white flex items-center justify-center mx-auto mb-5 text-2xl font-black shadow-lg shadow-primary-600/25">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees + CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Neden Bizimle Çalışmalısınız?
                </h3>
                <ul className="space-y-4">
                  {guarantees.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 sm:p-10 bg-gradient-to-br from-primary-50 to-white border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-center">
                <div className="space-y-3 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 shrink-0" />
                    Bursa, Türkiye
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary-600 shrink-0" />
                    Pzt - Cmt: 08:00 - 19:00
                  </div>
                </div>

                <a
                  href="tel:+905348463269"
                  onClick={() => trackConversion()}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25 mb-3"
                >
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </a>
                <Link
                  href="/iletisim"
                  className="group flex items-center justify-center gap-2 px-6 py-4 border-2 border-primary-200 text-primary-700 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors"
                >
                  İletişim Formunu Doldur
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
