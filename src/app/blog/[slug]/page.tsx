import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import JsonLd from "@/components/JsonLd";
import { blogPosts, getPost } from "@/lib/blog";
import { absoluteUrl, breadcrumbSchema, BUSINESS_ID, SITE_NAME, openGraph } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Yazı Bulunamadı" };
  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: openGraph({
      type: "article",
      url: path,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.isoDate,
      section: post.category,
      images: [{ url: post.image, alt: post.title }],
    }),
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    inLanguage: "tr-TR",
    articleSection: post.category,
    mainEntityOfPage: absoluteUrl(path),
    author: { "@type": "Organization", name: SITE_NAME, "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />
      <BlogPostClient post={post} />
    </>
  );
}
