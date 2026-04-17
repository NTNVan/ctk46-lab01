"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-3xl bg-white/60 p-6 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Counter
          </div>
          <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-200">
            Giá trị: <span className="font-bold">{count}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setCount((c) => c - 1)}
            className="rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-zinc-900 ring-1 ring-white/40 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900/60 dark:text-zinc-100 dark:ring-zinc-800"
          >
            -1
          </button>
          <button
            type="button"
            onClick={() => setCount((c) => c + 1)}
            className="rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-zinc-900 ring-1 ring-white/40 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900/60 dark:text-zinc-100 dark:ring-zinc-800"
          >
            +1
          </button>
          <button
            type="button"
            onClick={() => setCount(0)}
            className="rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-zinc-900 ring-1 ring-white/40 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900/60 dark:text-zinc-100 dark:ring-zinc-800"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
