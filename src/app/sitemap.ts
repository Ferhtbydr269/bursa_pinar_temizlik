import type { MetadataRoute } from "next";
import { absoluteUrl, SERVICES } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

// Yeni bir sayfa eklediğinizde buraya da ekleyin; hizmetler ve blog yazıları
// kendi veri kaynaklarından otomatik gelir.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/fiyat-hesapla"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/iletisim"), lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/hakkimizda"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: absoluteUrl(`/hizmetler/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.isoDate),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...posts];
}
