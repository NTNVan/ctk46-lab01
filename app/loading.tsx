export default function AppLoading() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800">
        <div className="h-7 w-44 animate-pulse rounded-xl bg-white/70 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />
        <div className="mt-4 space-y-3">
          <div className="h-4 w-full animate-pulse rounded-xl bg-white/70 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />
          <div className="h-4 w-11/12 animate-pulse rounded-xl bg-white/70 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />
          <div className="h-4 w-10/12 animate-pulse rounded-xl bg-white/70 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800" />
        </div>
      </div>
    </main>
  );
}
