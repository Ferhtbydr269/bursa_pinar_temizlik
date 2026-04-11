"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Phone } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

function renderParagraph(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-gray-900 font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-primary-300 text-sm mb-4 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Blog&apos;a Dön
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-white/70 text-sm">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} okuma
              </span>
              <span className="flex items-center gap-1 text-white/70 text-sm">
                <Tag className="w-3.5 h-3.5" />
                {post.date}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-6">
                {renderParagraph(paragraph)}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-primary-50 border border-primary-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Profesyonel Temizlik Hizmeti Mi Arıyorsunuz?
            </h3>
            <p className="text-gray-600 mb-4">
              Bursa Pınar Temizlik olarak tüm temizlik ihtiyaçlarınız için yanınızdayız.
            </p>
            <a
              href="tel:+905348463269"
              onClick={() => trackConversion()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              0534 846 32 69
            </a>
          </motion.div>
        </div>
      </article>
    </>
  );
}
