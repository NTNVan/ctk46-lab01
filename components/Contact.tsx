"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copy, ExternalLink, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const email = "2212490@dlu.edu.vn";
  const githubUrl = "https://github.com/your-account";
  const location = "Đà Lạt, Việt Nam";

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
        <div className="rounded-3xl bg-white/60 p-8 shadow-sm ring-1 ring-white/40 dark:bg-zinc-900/35 dark:ring-zinc-800">
          <h2 className="text-2xl font-bold tracking-tight">Contact</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-white/40 dark:bg-zinc-950/20 dark:ring-zinc-800">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Mail size={16} />
                Email
              </div>
              <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                {email}
              </div>
            </div>

            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-white/40 dark:bg-zinc-950/20 dark:ring-zinc-800">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <ExternalLink size={16} />
                GitHub
              </div>
              <div className="mt-2 break-all text-sm text-zinc-700 dark:text-zinc-200">
                {githubUrl}
              </div>
            </div>

            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-white/40 dark:bg-zinc-950/20 dark:ring-zinc-800">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <MapPin size={16} />
                Location
              </div>
              <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                {location}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:brightness-110 dark:bg-zinc-100 dark:text-zinc-900"
            >
              <Copy size={16} />
              {copied ? "Copied!" : "Copy Email"}
            </button>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-white/40 transition hover:shadow-md dark:bg-zinc-900/40 dark:text-zinc-100 dark:ring-zinc-800"
            >
              <ExternalLink size={16} />
              Open GitHub
            </a>
          </div>

          <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-300">
            Lưu ý: hãy thay link GitHub thật trong code.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
