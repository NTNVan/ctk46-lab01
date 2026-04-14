"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart, Star } from "lucide-react";

export default function About() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="rounded-3xl bg-white/60 p-8 shadow-sm ring-1 ring-white/40 dark:bg-zinc-900/35 dark:ring-zinc-800">
          <h2 className="text-2xl font-bold tracking-tight">About</h2>

          <p className="mt-3 text-zinc-700 dark:text-zinc-200">
            Mình là sinh viên CTK46 – Đại học Đà Lạt. Hiện đang học và phát
            triển kỹ năng lập trình Web.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/60 p-6 ring-1 ring-white/40 dark:bg-zinc-950/20 dark:ring-zinc-800">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Star size={16} />
                Mục tiêu
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  Trở thành Fullstack Developer
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  Thành thạo Next.js + React
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  Làm được dự án thực tế freelance
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/60 p-6 ring-1 ring-white/40 dark:bg-zinc-950/20 dark:ring-zinc-800">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Heart size={16} />
                Sở thích
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>• Lập trình Web</li>
                <li>• UI/UX Design</li>
                <li>• AI cơ bản</li>
                <li>• Xem và phân tích sản phẩm công nghệ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
