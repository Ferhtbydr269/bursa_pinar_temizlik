"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Globe, ExternalLink } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

const services = [
  { name: "Dış Cephe Temizliği", href: "/hizmetler/dis-cephe" },
  { name: "Fabrika Temizliği", href: "/hizmetler/fabrika" },
  { name: "İnşaat Sonrası Temizlik", href: "/hizmetler/insaat-sonrasi" },
  { name: "Cami Temizliği", href: "/hizmetler/cami" },
  { name: "Ofis & Ev Temizliği", href: "/hizmetler/ofis-ev" },
  { name: "Villa Temizliği", href: "/hizmetler/villa" },
];

const quickLinks = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Teklif Al", href: "/fiyat-hesapla" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Image
              src="/images/logo/logo.png"
              alt="Bursa Pınar Temizlik"
              width={260}
              height={72}
              className="h-16 w-auto mb-6"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-primary-200/80 text-sm leading-relaxed mb-6">
              2015&apos;ten bu yana Bursa&apos;da bireysel ve kurumsal temizlik
              çözümleri sunuyoruz. Profesyonel ekip, endüstriyel ekipman ve
              çevre dostu kimyasallarla hizmetinizdeyiz.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-primary-200/80 hover:text-white text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Hızlı Linkler</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-primary-200/80 hover:text-white text-sm transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+905348463269" onClick={() => trackConversion()} className="text-sm text-primary-200/80 hover:text-white transition-colors">
                    0534 846 32 69
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <a href="mailto:info@bursapinartemizlik.com" className="text-sm text-primary-200/80 hover:text-white transition-colors">
                  info@bursapinartemizlik.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-sm text-primary-200/80">
                  Bursa, Türkiye
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-sm text-primary-200/80">
                  Pzt - Cmt: 08:00 - 19:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-300/60">
              &copy; {new Date().getFullYear()} Bursa Pınar Temizlik. Tüm hakları saklıdır.
            </p>
            <p className="text-sm text-primary-300/60">
              Bireysel ve Kurumsal Temizlik Çözümleri
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
