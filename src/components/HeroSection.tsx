"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Clock, Award } from "lucide-react";
import Link from "next/link";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        hue: 170 + Math.random() * 20,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${p.opacity})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(175, 70%, 55%, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

const stats = [
  { icon: Award, label: "Yıllık Deneyim", value: "10+" },
  { icon: Shield, label: "Tamamlanan Proje", value: "300+" },
  { icon: Clock, label: "Memnun Müşteri", value: "1.000+" },
  { icon: Sparkles, label: "Profesyonel Ekip", value: "20+" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {mounted && <ParticleCanvas />}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-200 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Bursa&apos;nın 1 Numaralı Temizlik Şirketi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Profesyonel Temizlikte{" "}
            <span className="text-primary-300">Yeni Nesil</span>{" "}
            Çözümler
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-primary-100/80 max-w-2xl mb-10 leading-relaxed"
          >
            Sepetli vinçler, endüstriyel makineler ve çevre dostu nano-teknolojik
            solüsyonlarla Bursa genelinde bireysel ve kurumsal temizlik hizmetleri.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href="/fiyat-hesapla"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-primary-900 rounded-full font-bold text-lg hover:bg-primary-50 transition-all shadow-2xl"
            >
              Ücretsiz Fiyat Al
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/iletisim"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              Bize Ulaşın
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-4 text-center"
              >
                <stat.icon className="w-6 h-6 text-primary-300 mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-200/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
