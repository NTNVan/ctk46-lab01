"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  Atom,
  BookOpen,
  Brain,
  Code,
  GitBranch,
  Layout,
  Layers,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";

const hardSkills = [
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Layout },
  { name: "JavaScript", icon: Zap },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Layers },
  { name: "Git / GitHub", icon: GitBranch },
];

const softSkills = [
  { name: "Tư duy logic", icon: Brain },
  { name: "Tự học", icon: BookOpen },
  { name: "Làm việc nhóm", icon: Users },
  { name: "Giải quyết vấn đề", icon: Lightbulb },
];

function SkillCard({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <div className="group rounded-2xl bg-white/60 p-4 text-left ring-1 ring-white/40 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-white/75 hover:shadow-md dark:bg-zinc-900/60 dark:ring-zinc-800 dark:hover:bg-zinc-900/70">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 ring-1 ring-white/50 transition group-hover:shadow-sm dark:bg-zinc-900/60 dark:ring-zinc-800">
          <Icon size={18} className="text-zinc-900 dark:text-zinc-100" />
        </div>
        <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {name}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const filterOptions = useMemo(
    () => ["Tất cả", "Kỹ năng cứng", "Kỹ năng mềm"] as const,
    [],
  );

  const [selectedFilter, setSelectedFilter] = useState<
    (typeof filterOptions)[number]
  >(filterOptions[0]);

  const showHard =
    selectedFilter === "Tất cả" || selectedFilter === "Kỹ năng cứng";
  const showSoft =
    selectedFilter === "Tất cả" || selectedFilter === "Kỹ năng mềm";

  const selectedLabel = selectedFilter;
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const [selectWidth, setSelectWidth] = useState<number>(76);

  useLayoutEffect(() => {
    const width = measureRef.current?.offsetWidth;
    if (!width) return;
    setSelectWidth(Math.ceil(width) + 26);
  }, [selectedLabel]);

  return (
    <motion.section
      id="skills"
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="group">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                <span className="relative inline-block bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-10 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:opacity-70 dark:after:bg-white">
                  Kỹ năng
                </span>
              </h2>
            </div>

            <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
              <div className="relative inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-semibold text-zinc-700 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-200">
                <Layers size={14} />
                <span
                  className="pointer-events-none absolute -z-10 h-0 overflow-hidden whitespace-pre text-xs font-semibold"
                  ref={measureRef}
                >
                  {selectedLabel}
                </span>
                <select
                  aria-label="Lọc kỹ năng"
                  value={selectedFilter}
                  onChange={(e) =>
                    setSelectedFilter(
                      e.target.value as (typeof filterOptions)[number],
                    )
                  }
                  style={{ width: selectWidth }}
                  className="bg-transparent text-xs font-semibold text-zinc-700 outline-none dark:text-zinc-200"
                >
                  {filterOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-transparent p-8 ring-1 ring-white/40 transition duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-white/70 dark:ring-zinc-800 dark:group-hover:ring-zinc-600">
            <div
              className={`grid gap-6 ${selectedFilter === "Tất cả" ? "md:grid-cols-2" : ""}`}
            >
              {showHard ? (
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Kỹ năng cứng
                  </div>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {hardSkills.map((s) => (
                      <SkillCard key={s.name} name={s.name} Icon={s.icon} />
                    ))}
                  </div>
                </div>
              ) : null}

              {showSoft ? (
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Kỹ năng mềm
                  </div>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {softSkills.map((s) => (
                      <SkillCard key={s.name} name={s.name} Icon={s.icon} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
