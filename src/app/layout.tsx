import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    "Bursa'da dış cephe, fabrika, inşaat sonrası, cami, ofis, ev ve villa temizliği. 10+ yıllık deneyim, endüstriyel ekipman ve profesyonel ekiple hizmetinizdeyiz. 0534 846 32 69",
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
      "Bursa'da profesyonel bireysel ve kurumsal temizlik çözümleri. 0534 846 32 69",
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
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TTGJWCMP');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-456872467"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-456872467');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TTGJWCMP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
