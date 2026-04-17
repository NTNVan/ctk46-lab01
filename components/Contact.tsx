"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copy, ExternalLink, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const email = "2212490@dlu.edu.vn";
  const githubUrl = "https://github.com/NTNVan";
  const location = "Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt";

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1200);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-14 pb-20">
        <div className="group">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="relative inline-block bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-10 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:opacity-70 dark:after:bg-white">
                Liên hệ
              </span>
            </h2>
          </div>

          <div className="mt-6 rounded-3xl bg-transparent p-8 ring-1 ring-white/40 transition duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-white/70 dark:ring-zinc-800 dark:group-hover:ring-zinc-600">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-white/40 transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900/60 dark:ring-zinc-800">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  <Mail size={16} />
                  Email
                </div>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                  {email}
                </div>
              </div>

              <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-white/40 transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900/60 dark:ring-zinc-800">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  <ExternalLink size={16} />
                  GitHub
                </div>
                <div className="mt-2 break-all text-sm text-zinc-700 dark:text-zinc-200">
                  {githubUrl}
                </div>
              </div>

              <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-white/40 transition duration-200 hover:-translate-y-0.5 hover:shadow-md md:col-span-2 dark:bg-zinc-900/60 dark:ring-zinc-800">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  <MapPin size={16} />
                  Địa chỉ
                </div>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                  {location}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-100"
                >
                  <Copy size={16} />
                  {copied ? "Đã sao chép!" : "Email"}
                </button>
              </div>

              <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-100"
                >
                  <ExternalLink size={16} />
                  Mở GitHub
                </a>
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-300"></p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
