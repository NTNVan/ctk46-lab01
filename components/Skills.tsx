"use client";

import { motion } from "framer-motion";
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
    <div className="group rounded-2xl bg-white/60 p-4 text-left ring-1 ring-white/40 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-white/75 hover:shadow-md dark:bg-zinc-900/35 dark:ring-zinc-800 dark:hover:bg-zinc-900/45">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 ring-1 ring-white/50 transition group-hover:shadow-sm dark:bg-zinc-950/30 dark:ring-zinc-800">
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
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
              Hard skills & soft skills (card pastel, hover scale nhẹ).
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Hard Skills
            </div>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {hardSkills.map((s) => (
                <SkillCard key={s.name} name={s.name} Icon={s.icon} />
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Soft Skills
            </div>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {softSkills.map((s) => (
                <SkillCard key={s.name} name={s.name} Icon={s.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
