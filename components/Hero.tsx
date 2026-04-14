"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Folder, Mail } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4 pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="mx-auto inline-flex rounded-full bg-white/60 px-4 py-2 text-sm text-zinc-700 shadow-sm ring-1 ring-white/40 dark:bg-zinc-900/40 dark:text-zinc-200 dark:ring-zinc-800"
        >
          Đại học Đà Lạt (DLU) • CTK46 • MSSV 2212490
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-white shadow-lg transition-transform duration-300 hover:scale-[1.04] dark:ring-zinc-800">
            <Image
              src="/avatar.jpg"
              alt="Avatar của Vân"
              fill
              sizes="144px"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          className="mt-6 text-4xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          Xin chào! Mình là Vân
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 max-w-2xl text-base text-zinc-700 dark:text-zinc-200"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Mình là Vân – sinh viên ngành Công nghệ Thông tin. Mình yêu thích lập
          trình Web, UI/UX và AI. Mục tiêu trở thành Fullstack Developer sử dụng
          React & Next.js.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:brightness-110 dark:bg-zinc-100 dark:text-zinc-900"
          >
            <Folder size={16} />
            View Projects
          </Link>

          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-white/40 transition hover:shadow-md dark:bg-zinc-900/40 dark:text-zinc-100 dark:ring-zinc-800"
          >
            <Download size={16} />
            Download CV
          </a>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/40 px-5 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-white/30 transition hover:bg-white/70 hover:shadow-sm dark:bg-zinc-900/20 dark:text-zinc-100 dark:ring-zinc-800"
          >
            <Mail size={16} />
            Contact Me
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
