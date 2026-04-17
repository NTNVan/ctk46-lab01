"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log for debugging; in real apps you might report to monitoring.
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800">
        <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm">
          <div className="rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-100">
            Có lỗi xảy ra
          </div>
        </div>

        <h1 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Ứng dụng gặp sự cố
        </h1>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
          Bạn có thể thử tải lại phần này hoặc quay về trang chủ.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center gap-2 rounded-full bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-100"
            >
              Thử lại
            </button>
          </div>

          <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-100"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
