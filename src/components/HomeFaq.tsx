import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { faqSchema, SERVICE_AREAS, SERVICES, PHONE_DISPLAY, ADDRESS, HOURS_TEXT } from "@/lib/site";

// Sunucu bileşeni: metin ham HTML'de hazır gelir. JS çalıştırmayan yapay zekâ
// botları (GPTBot, PerplexityBot, ClaudeBot) ve Google bu içeriği doğrudan okur.
const faqs = [
  {
    q: "Bursa Pınar Temizlik hangi temizlik hizmetlerini veriyor?",
    a: "Dış cephe ve kompozit panel temizliği, fabrika ve endüstriyel temizlik, inşaat sonrası temizlik, cami temizliği, ofis ve ev temizliği ile villa temizliği hizmetleri veriyoruz.",
  },
  {
    q: "Bursa'nın hangi ilçelerinde hizmet veriyorsunuz?",
    a: `Bursa genelinde hizmet veriyoruz. ${SERVICE_AREAS.join(", ")} başta olmak üzere tüm Bursa ilçelerine ekip yönlendiriyoruz.`,
  },
  {
    q: "Keşif ve fiyat teklifi ücretli mi?",
    a: "Hayır. Bursa genelinde ücretsiz keşif yapıyor, alanınızı yerinde inceledikten sonra size özel net fiyat teklifi veriyoruz.",
  },
  {
    q: "Temizlik fiyatı nasıl belirleniyor?",
    a: "Fiyat; alanın metrekaresi, temizlik türü, kirlilik seviyesi, gereken ekipman (örneğin sepetli vinç) ve temizlik sıklığına göre belirlenir. Periyodik anlaşmalarda daha uygun fiyat sunulur.",
  },
  {
    q: "Ne kadar süredir hizmet veriyorsunuz?",
    a: "2015'ten bu yana Bursa'da bireysel ve kurumsal temizlik hizmeti veriyoruz. 300'ü aşkın projeyi 20'den fazla kişilik profesyonel ekibimizle tamamladık.",
  },
  {
    q: "Nasıl teklif alabilirim?",
    a: `${PHONE_DISPLAY} numarasından bizi arayabilir, WhatsApp'tan fotoğraf göndererek yazabilir veya iletişim formunu doldurabilirsiniz. Ofisimiz ${ADDRESS.display} adresindedir; ${HOURS_TEXT} arası hizmetinizdeyiz.`,
  },
];

export default function HomeFaq() {
  return (
    <section className="py-20 bg-white" aria-labelledby="sss-baslik">
      <JsonLd data={faqSchema(faqs)} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="sss-baslik" className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Bursa Temizlik Hizmetleri Hakkında <span className="gradient-text">Sık Sorulan Sorular</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Bursa Pınar Temizlik, 2015&apos;ten bu yana Bursa genelinde ev, ofis, villa, fabrika,
          cami, inşaat sonrası ve dış cephe temizliği yapan profesyonel bir temizlik şirketidir.
        </p>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 open:bg-white open:shadow-md transition-all"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                <h3 className="text-lg">{faq.q}</h3>
                <span className="text-primary-600 text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="rounded-3xl bg-primary-50 border border-primary-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Hizmet Bölgelerimiz</h2>
          <p className="text-gray-600 mb-5">
            Bursa merkez ve ilçelerinde ücretsiz keşif yapıyoruz:{" "}
            {SERVICE_AREAS.join(", ")} ve diğer tüm Bursa ilçeleri.
          </p>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="px-4 py-2 rounded-full bg-white border border-primary-200 text-primary-700 text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors"
              >
                Bursa {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
