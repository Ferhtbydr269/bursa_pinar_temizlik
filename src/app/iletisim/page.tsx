"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "0534 846 32 69",
    href: "tel:+905348463269",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "0534 846 32 69",
    href: "https://wa.me/905348463269",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Mail,
    title: "E-posta",
    value: "info@bursapinartemizlik.com",
    href: "mailto:info@bursapinartemizlik.com",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: MapPin,
    title: "Adres",
    value: "Bursa, Türkiye",
    href: "#",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    value: "Pzt - Cmt: 08:00 - 19:00",
    href: "#",
    color: "bg-amber-100 text-amber-600",
  },
];

export default function IletisimPage() {
  const [state, handleSubmit] = useForm("xeeppqan");

  return (
    <>
      <section className="pt-32 pb-8 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Bize <span className="text-primary-300">Ulaşın</span>
            </h1>
            <p className="text-lg text-primary-100/80 max-w-xl mx-auto">
              Temizlik ihtiyacınız için hemen iletişime geçin. Size en kısa sürede dönüş yapalım.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center shrink-0`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.title}</p>
                    <p className="font-semibold text-gray-900">{info.value}</p>
                  </div>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 rounded-2xl overflow-hidden h-64"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194469.60924290!2d28.83!3d40.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca10fc80d0214d%3A0xdbb02c8c8b8bbb6!2sBursa!5e0!3m2!1str!2str!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bursa Harita"
                />
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
                {state.succeeded ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Mesajınız Alındı!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      En kısa sürede size dönüş yapacağız.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      İletişim Formu
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Ad Soyad
                          </label>
                          <input
                            type="text"
                            name="ad_soyad"
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0 outline-none transition-colors"
                            placeholder="Adınız Soyadınız"
                          />
                          <ValidationError field="ad_soyad" errors={state.errors} className="text-red-500 text-sm mt-1" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Telefon
                          </label>
                          <input
                            type="tel"
                            name="telefon"
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0 outline-none transition-colors"
                            placeholder="05XX XXX XX XX"
                          />
                          <ValidationError field="telefon" errors={state.errors} className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          E-posta
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0 outline-none transition-colors"
                          placeholder="ornek@email.com"
                        />
                        <ValidationError field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Hizmet Türü
                        </label>
                        <select name="hizmet_turu" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0 outline-none transition-colors bg-white">
                          <option value="">Seçiniz</option>
                          <option>Dış Cephe Temizliği</option>
                          <option>Fabrika Temizliği</option>
                          <option>İnşaat Sonrası Temizlik</option>
                          <option>Cami Temizliği</option>
                          <option>Ofis & Ev Temizliği</option>
                          <option>Villa Temizliği</option>
                          <option>Diğer</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Mesajınız
                        </label>
                        <textarea
                          name="mesaj"
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0 outline-none transition-colors resize-none"
                          placeholder="Temizlik ihtiyacınızı detaylı anlatın..."
                        />
                        <ValidationError field="mesaj" errors={state.errors} className="text-red-500 text-sm mt-1" />
                      </div>
                      <ValidationError errors={state.errors} className="text-red-600 text-sm font-medium" />
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <Send className="w-5 h-5" />
                        {state.submitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
