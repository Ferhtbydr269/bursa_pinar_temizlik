"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calculator, ArrowRight } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

export default function CTASection() {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary-300 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary-400 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Temizlik İhtiyacınız İçin
            <br />
            <span className="text-primary-300">Hemen Teklif Alın</span>
          </h2>
          <p className="text-lg text-primary-100/80 mb-10 max-w-xl mx-auto">
            AI tabanlı fiyat tahmincimiz ile anında fiyat teklifi alın veya
            doğrudan bizi arayın.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/fiyat-hesapla"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-900 rounded-full font-bold text-lg hover:bg-primary-50 transition-all shadow-2xl"
            >
              <Calculator className="w-5 h-5" />
              AI Fiyat Hesapla
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+905348463269"
              onClick={() => trackConversion()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              0534 846 32 69
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
