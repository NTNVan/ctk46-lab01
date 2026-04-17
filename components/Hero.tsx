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
          <span className="relative inline-block text-zinc-900 dark:bg-linear-to-r dark:from-purple-400 dark:to-blue-400 dark:bg-clip-text dark:text-transparent after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-px after:w-10 after:bg-linear-to-r after:from-purple-500 after:to-blue-500 after:opacity-40 after:transition-all after:duration-300 hover:after:w-full hover:after:opacity-70">
            Nguyễn Trần Ngọc Vân
          </span>
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        >
          <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-100"
            >
              <Folder size={16} />
              Xem dự án
            </Link>
          </div>

          <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-100"
            >
              <Download size={16} />
              Tải CV
            </a>
          </div>

          <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-100"
            >
              <Mail size={16} />
              Liên hệ
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
