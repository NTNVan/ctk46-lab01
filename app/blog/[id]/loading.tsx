export default function BlogPostLoading() {
  return (
    <main className="space-y-6">
      <div className="inline-block h-5 w-44 animate-pulse rounded-full bg-white/60 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />

      <article className="rounded-3xl bg-white/60 p-6 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800">
        <div className="flex flex-wrap items-center gap-2">
          <div className="h-6 w-24 animate-pulse rounded-full bg-white/70 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />
          <div className="h-4 w-28 animate-pulse rounded-full bg-white/70 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />
        </div>

        <div className="mt-4 space-y-3">
          <div className="h-8 w-4/5 animate-pulse rounded-xl bg-white/70 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />
          <div className="h-4 w-full animate-pulse rounded-xl bg-white/70 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />
          <div className="h-4 w-11/12 animate-pulse rounded-xl bg-white/70 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />
          <div className="h-4 w-10/12 animate-pulse rounded-xl bg-white/70 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />
          <div className="h-4 w-8/12 animate-pulse rounded-xl bg-white/70 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />
        </div>
      </article>
    </main>
  );
}
