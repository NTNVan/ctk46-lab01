"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  BookOpen,
  Folder,
  Home,
  Mail,
  Moon,
  Sun,
  User,
  Zap,
} from "lucide-react";

export default function Navbar() {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  const items = useMemo(
    () => [
      { id: "home", href: "/#home", label: "Trang chủ", icon: Home },
      { id: "about", href: "/#about", label: "Giới thiệu", icon: User },
      { id: "skills", href: "/#skills", label: "Kỹ năng", icon: Zap },
      { id: "projects", href: "/#projects", label: "Dự án", icon: Folder },
      { id: "contact", href: "/#contact", label: "Liên hệ", icon: Mail },
      {
        id: "blog",
        href: "/blog",
        label: "Blog",
        icon: BookOpen,
        prefetch: false,
      },
    ],
    [],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (path !== "/") return;

    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "").trim();
      if (hash) setActiveSection(hash);
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, [path]);

  useEffect(() => {
    if (path !== "/") return;

    const observedIds = items.map((i) => i.id);
    const elements = observedIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        const top = visible[0];
        if (top?.target?.id) setActiveSection(top.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.4, 0.6],
        rootMargin: "-20% 0px -70% 0px",
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [items, path]);

  const onNavClick = (sectionId: string) => (event: React.MouseEvent) => {
    if (path !== "/") return;

    const element = document.getElementById(sectionId);
    if (!element) return;

    event.preventDefault();
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  const isDark = theme === "dark";

  return (
    <nav
      className={
        "sticky top-0 z-50 border-b transition " +
        (scrolled
          ? "backdrop-blur-xl bg-white/60 shadow-sm dark:bg-zinc-950/60 border-white/20 dark:border-zinc-800"
          : "backdrop-blur-md bg-white/40 dark:bg-zinc-950/30 border-white/10 dark:border-zinc-900")
      }
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-bold text-base tracking-tight">
          ngocjvaan
        </Link>

        <div className="hidden sm:flex items-center gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            const active =
              path === "/"
                ? activeSection === item.id
                : item.id === "blog" && path.startsWith("/blog");

            return (
              <Link
                key={item.id}
                href={item.href}
                prefetch={item.prefetch}
                onClick={onNavClick(item.id)}
                className={
                  "flex items-center gap-2 rounded-full px-3 py-2 text-sm transition " +
                  (active
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-700 hover:bg-white/60 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-900/50")
                }
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-white/30 bg-white/50 p-1 dark:border-zinc-800 dark:bg-zinc-900/40">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={
                "flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition " +
                (!isDark
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100")
              }
              aria-pressed={!isDark}
            >
              <Sun size={14} />
              Sáng
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={
                "flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition " +
                (isDark
                  ? "bg-zinc-900 text-zinc-100 shadow-sm dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100")
              }
              aria-pressed={isDark}
            >
              <Moon size={14} />
              Tối
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
