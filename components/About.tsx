"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function initials(name: string) {
  const trimmed = name.trim();
  if (!trimmed) return "?";
  return trimmed[0]?.toUpperCase() ?? "?";
}

export default function About() {
  const displayName = "Nguyễn Trần Ngọc Vân";

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
        <div className="group">
          <h2 className="text-2xl font-bold tracking-tight">
            <span className="relative inline-block bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-10 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:opacity-70 dark:after:bg-white">
              Giới thiệu
            </span>
          </h2>

          <div className="mt-6 rounded-3xl bg-transparent p-8 ring-1 ring-white/40 transition duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-white/70 dark:ring-zinc-800 dark:group-hover:ring-zinc-600">
            <div className="space-y-6">
              <div className="rounded-2xl bg-white/60 p-6 ring-1 ring-white/40 transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900/60 dark:ring-zinc-800">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>{initials(displayName)}</AvatarFallback>
                  </Avatar>

                  <p className="text-zinc-700 dark:text-zinc-200">
                    Xin chào! Tôi là{" "}
                    <strong className="font-semibold">{displayName}</strong>
                    ,
                    <br />
                    Sinh viên năm 4 ngành Công nghệ Thông tin tại Đại học Đà
                    Lạt.
                    <br />
                    Đam mê phát triển web và các công nghệ mới
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white/60 p-6 ring-1 ring-white/40 transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900/60 dark:ring-zinc-800">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    Kỹ năng
                  </h3>
                  <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-zinc-700 dark:text-zinc-200">
                    <li className="wrap-break-word whitespace-normal">
                      Git & GitHub
                    </li>
                    <li className="wrap-break-word whitespace-normal">
                      React & Next.js
                    </li>
                    <li className="wrap-break-word whitespace-normal">
                      Tailwind CSS
                    </li>
                    <li className="wrap-break-word whitespace-normal">
                      SQL & PostgreSQL
                    </li>
                    <li className="whitespace-nowrap">
                      JavaScript / TypeScript
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/60 p-6 ring-1 ring-white/40 transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900/60 dark:ring-zinc-800">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    Học vấn
                  </h3>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-zinc-900 dark:text-zinc-100">
                    <li>Đại học Đà Lạt</li>
                    <li>Cử nhân Công nghệ Thông tin (2022 — 2026)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
