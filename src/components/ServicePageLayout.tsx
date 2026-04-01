"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import {
  Droplets, Shield, Zap, Eye, Thermometer, Calendar,
  Factory, Clock, Wrench, BarChart3,
  Layers, Sparkles,
  Heart, Wind, Users,
  Home, TreePine, Sun, Crown, Castle,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets, Shield, Zap, Eye, Thermometer, Calendar,
  Factory, Clock, Wrench, BarChart3,
  Layers, Sparkles, CheckCircle,
  Heart, Wind, Users,
  Home, TreePine, Sun, Crown, Castle,
};

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServicePageData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: ServiceFeature[];
  steps: ServiceStep[];
  gallery: string[];
  technicalDetails: string[];
  equipment: string[];
}

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/80 text-white text-sm font-medium mb-4 backdrop-blur-sm">
              {data.subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {data.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Teknik <span className="gradient-text">Avantajlarımız</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feature, i) => {
              const Icon = iconMap[feature.icon] || Shield;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-5 group-hover:bg-primary-600 transition-colors">
                    <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Çalışma <span className="gradient-text">Sürecimiz</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-black text-primary-100 mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                {i < data.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="h-0.5 w-3/4 bg-gradient-to-r from-primary-300 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical + Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Teknik Detaylar
              </h3>
              <ul className="space-y-4">
                {data.technicalDetails.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Kullandığımız Ekipmanlar
              </h3>
              <ul className="space-y-4">
                {data.equipment.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Proje <span className="gradient-text">Galerisi</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img}
                  alt={`${data.title} proje ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {data.title} İçin Teklif Alın
            </h2>
            <p className="text-lg text-primary-100/80 mb-8">
              Ücretsiz keşif ve fiyat teklifi için hemen bize ulaşın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/fiyat-hesapla"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-900 rounded-full font-bold text-lg hover:bg-primary-50 transition-all shadow-2xl"
              >
                Fiyat Hesapla
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+905348463469"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
