"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Folder, Layout, Layers, Code } from "lucide-react";

const projects = [
  {
    name: "Website Portfolio",
    desc: "Website cá nhân xây dựng bằng Next.JS và Tailwind CSS",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
    icon: Layers,
  },
  {
    name: "CTK46 Lab 01",
    desc: "Bài thực hành HTML/CSS cơ bản",
    tech: ["HTML", "CSS"],
    icon: Layout,
  },
  {
    name: "Trang Blog (Layout + Sidebar)",
    desc: "Trang /blog sử dụng Next.js App Router với layout lồng nhau và sidebar",
    tech: ["Next.js", "Tailwind CSS", "App Router"],
    icon: Layers,
  },
  {
    name: "Ứng dụng Quản lý Công việc",
    desc: "Ứng dụng Todo App với React và Local Storage",
    tech: ["React", "CSS Modules", "JavaScript"],
    icon: Layout,
  },
  {
    name: "API RESTful",
    desc: "API quản lý sản phẩm với Node.js và Express",
    tech: ["Node.js", "Express", "MongoDB"],
    icon: Code,
  },
];

export default function Projects() {
  const projectOptions = useMemo(
    () => projects.map((p) => ({ value: p.name, label: p.name })),
    [],
  );

  const [selectedProject, setSelectedProject] = useState<string>("Tất cả");

  const selectedLabel = useMemo(() => {
    if (selectedProject === "Tất cả") return "Tất cả";
    return (
      projectOptions.find((opt) => opt.value === selectedProject)?.label ??
      selectedProject
    );
  }, [projectOptions, selectedProject]);

  const measureRef = useRef<HTMLSpanElement | null>(null);
  const [selectWidth, setSelectWidth] = useState<number>(72);

  useLayoutEffect(() => {
    const width = measureRef.current?.offsetWidth;
    if (!width) return;
    setSelectWidth(Math.ceil(width) + 34);
  }, [selectedLabel]);

  const filteredProjects = useMemo(() => {
    if (selectedProject === "Tất cả") return projects;
    return projects.filter((p) => p.name === selectedProject);
  }, [selectedProject]);

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
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="relative inline-block bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-10 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:opacity-70 dark:after:bg-white">
                Dự án
              </span>
            </h2>
          </div>
          <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-semibold text-zinc-700 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-200">
              <Folder size={14} />
              <span
                className="pointer-events-none absolute -z-10 h-0 overflow-hidden whitespace-pre text-xs font-semibold"
                ref={measureRef}
              >
                {selectedLabel}
              </span>
              <select
                aria-label="Lọc dự án theo danh mục"
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                style={{ width: selectWidth }}
                className="bg-transparent text-xs font-semibold text-zinc-700 outline-none dark:text-zinc-200"
              >
                <option value="Tất cả">Tất cả</option>
                {projectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="group rounded-3xl bg-white/60 p-6 ring-1 ring-white/40 transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900/60 dark:ring-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-white/50 dark:bg-zinc-900/60 dark:ring-zinc-800">
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
                      className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-800 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:text-zinc-200 dark:ring-zinc-800"
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
