#!/usr/bin/env node
// IndexNow: değişen sayfaları Bing'e (ve IndexNow kullanan Yandex, Naver, Seznam
// gibi motorlara) anında bildirir. ChatGPT araması Bing indeksini kullandığı için
// içerik değişikliklerinin yapay zekâ cevaplarına yansıması da hızlanır.
//
// Kullanım:
//   node scripts/indexnow.mjs --all            # sitemap'teki tüm URL'leri bildir
//   node scripts/indexnow.mjs --sha <commit>   # o commit'te değişen dosyalara göre
//   node scripts/indexnow.mjs ... --dry-run    # göndermeden listele
//
// GitHub Actions bunu Vercel production deploy'u "success" olduğunda çalıştırır
// (.github/workflows/indexnow.yml); yani bildirim, sayfa gerçekten canlıyken gider.

import { execFileSync } from "node:child_process";

const SITE = "https://www.bursapinartemizlik.com";
const HOST = new URL(SITE).host;
// Anahtar herkese açık olacak şekilde tasarlanmıştır: public/<KEY>.txt olarak
// sitede yayınlanır ve IndexNow sahipliği bu dosyayla doğrular.
const KEY = "e1370387bf6a61e675412d5ec1430292";
const ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const all = args.includes("--all");
const shaIdx = args.indexOf("--sha");
const sha = shaIdx >= 0 ? args[shaIdx + 1] : null;

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml alınamadı: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function changedFiles(commit) {
  // İlk commit'te ebeveyn olmayabilir; o durumda tüm dosyalar "değişmiş" sayılır.
  try {
    // Kabuk kullanılmaz (execFile + argüman dizisi); commit değeri ayrıca doğrulanır.
    return execFileSync("git", ["diff", "--name-only", `${commit}~1`, commit], { encoding: "utf8" })
      .split("\n")
      .filter(Boolean);
  } catch {
    return ["*"];
  }
}

const HOME_COMPONENTS = [
  "HeroSection",
  "ServicesGrid",
  "WhyUsSection",
  "GalleryPreview",
  "HomeFaq",
  "CTASection",
];
// Her sayfada görünen veya her sayfanın metadata/schema'sını etkileyen dosyalar.
const SITEWIDE = [
  "src/app/layout.tsx",
  "src/app/globals.css",
  "src/lib/site.ts",
  "src/components/Header.tsx",
  "src/components/Footer.tsx",
  "src/components/WhatsAppButton.tsx",
  "src/components/JsonLd.tsx",
];

// Değişen dosyayı etkilediği URL yollarına çevirir. "*" = tüm site.
function pathsFor(file) {
  if (file === "*" || SITEWIDE.includes(file)) return ["*"];
  if (HOME_COMPONENTS.some((c) => file === `src/components/${c}.tsx`)) return ["/"];
  if (file === "src/components/ServicePageLayout.tsx") return ["/hizmetler/*"];
  if (file === "src/lib/blog.ts" || file.startsWith("src/app/blog/")) {
    return file.startsWith("src/app/blog/[slug]/") ? ["/blog/*"] : ["/blog", "/blog/*"];
  }
  if (file === "src/app/page.tsx") return ["/"];
  const m = file.match(/^src\/app\/(.+)\/(page|layout)\.tsx$/);
  if (m) return [`/${m[1]}`];
  return []; // README, betikler, görseller vb. sayfa içeriğini değiştirmez
}

function matches(url, pattern) {
  const path = new URL(url).pathname.replace(/\/$/, "") || "/";
  if (pattern === "*") return true;
  if (pattern.endsWith("/*")) return path.startsWith(pattern.slice(0, -1));
  return path === pattern;
}

async function main() {
  if (!all && !sha) {
    console.error("Kullanım: --all veya --sha <commit> verin.");
    process.exit(2);
  }
  if (sha && !/^[0-9a-f]{7,40}$/i.test(sha)) {
    console.error(`Geçersiz commit SHA: ${sha}`);
    process.exit(2);
  }
  const universe = await sitemapUrls();
  let urls = universe;
  if (!all) {
    const files = changedFiles(sha);
    const patterns = [...new Set(files.flatMap(pathsFor))];
    console.log(`Değişen dosya: ${files.length}, etkilenen yol kalıbı: ${patterns.join(", ") || "-"}`);
    urls = universe.filter((u) => patterns.some((p) => matches(u, p)));
  }
  if (urls.length === 0) {
    console.log("Sayfa içeriğini etkileyen değişiklik yok; bildirim gönderilmedi.");
    return;
  }
  console.log(`${urls.length} URL bildirilecek:\n  ${urls.join("\n  ")}`);
  if (dryRun) return;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList: urls,
    }),
  });
  // 200 = alındı, 202 = alındı ve anahtar doğrulaması sürüyor
  if (res.status === 200 || res.status === 202) {
    console.log(`IndexNow kabul etti (HTTP ${res.status}).`);
  } else {
    console.error(`IndexNow hatası: HTTP ${res.status} ${await res.text()}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
