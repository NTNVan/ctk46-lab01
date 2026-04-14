"use client";

import { motion } from "framer-motion";
import { Folder, Layout, Layers, Code } from "lucide-react";

const projects = [
  {
    name: "CTK46 Lab 01",
    desc: "Bài thực hành HTML/CSS cơ bản",
    tech: ["HTML", "CSS"],
    icon: Code,
  },
  {
    name: "Next.js Portfolio Website",
    desc: "Website giới thiệu bản thân bằng Next.js",
    tech: ["Next.js", "Tailwind CSS"],
    icon: Layers,
  },
  {
    name: "Personal CV UI",
    desc: "Giao diện CV online hiện đại",
    tech: ["React", "UI Design"],
    icon: Layout,
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
              Các dự án nổi bật (hover card nâng lên).
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs font-semibold text-zinc-700 ring-1 ring-white/40 dark:bg-zinc-900/35 dark:text-zinc-200 dark:ring-zinc-800 sm:flex">
            <Folder size={14} />
            Portfolio
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="group rounded-3xl bg-white/60 p-6 ring-1 ring-white/40 transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900/35 dark:ring-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-white/50 dark:bg-zinc-950/25 dark:ring-zinc-800">
                    <Icon
                      size={18}
                      className="text-zinc-900 dark:text-zinc-100"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-200">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-800 ring-1 ring-white/40 dark:bg-zinc-950/25 dark:text-zinc-200 dark:ring-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
