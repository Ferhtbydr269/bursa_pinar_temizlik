import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Arama motorları ve yapay zekâ arama botları (ChatGPT, Perplexity, Gemini, Claude)
// açıkça davet ediliyor: görünürlük hedefi olan bir yerel işletme için
// bu botları engellemek, AI cevaplarında referans gösterilme şansını sıfırlar.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // /_next/ engellenmez: Googlebot sayfayı render etmek için JS/CSS'e ihtiyaç duyar.
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "Google-Extended",
          "Bingbot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
