import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bursa Pınar Temizlik | Profesyonel Temizlik Hizmetleri",
    template: "%s | Bursa Pınar Temizlik",
  },
  description:
    "Bursa'da dış cephe, fabrika, inşaat sonrası, cami, ofis, ev ve villa temizliği. 10+ yıllık deneyim, endüstriyel ekipman ve profesyonel ekiple hizmetinizdeyiz. 0534 846 34 69",
  keywords: [
    "Bursa temizlik",
    "dış cephe temizliği",
    "fabrika temizliği",
    "inşaat sonrası temizlik",
    "cami temizliği",
    "ofis temizliği",
    "ev temizliği",
    "villa temizliği",
    "profesyonel temizlik",
    "Bursa Pınar Temizlik",
  ],
  openGraph: {
    title: "Bursa Pınar Temizlik | Profesyonel Temizlik Hizmetleri",
    description:
      "Bursa'da profesyonel bireysel ve kurumsal temizlik çözümleri. 0534 846 34 69",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
