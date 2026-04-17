import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3">
              <span className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                404
              </span>
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                Không tìm thấy trang
              </span>
            </div>

            <p className="max-w-prose text-sm text-zinc-700 dark:text-zinc-200">
              Có thể bạn đã nhập sai đường dẫn hoặc trang này đã được di chuyển.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-100"
                >
                  Về trang chủ
                </Link>
              </div>

              <div className="inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-100"
                >
                  Mở Blog
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-400/30 to-blue-400/30 blur-2xl dark:from-purple-300/20 dark:to-blue-300/20" />
            <div className="relative rounded-3xl bg-white/60 p-8 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800">
              <div className="mx-auto h-24 w-24 animate-pulse rounded-full bg-linear-to-br from-purple-400/50 to-blue-400/50 ring-2 ring-white/50 dark:from-purple-300/40 dark:to-blue-300/40 dark:ring-zinc-700" />
              <svg
                viewBox="0 0 200 120"
                className="mx-auto mt-6 h-20 w-full text-zinc-700 dark:text-zinc-200"
                role="img"
                aria-label="Minh họa trang không tồn tại"
              >
                <g fill="none" stroke="currentColor" strokeWidth="6">
                  <path
                    d="M22 90c20-30 45-45 78-45s58 15 78 45"
                    opacity="0.7"
                  />
                  <circle cx="82" cy="62" r="18" opacity="0.8" />
                  <path d="M97 77l28 24" strokeLinecap="round" />
                </g>
              </svg>
              <p className="mt-4 text-center text-xs text-zinc-600 dark:text-zinc-300">
                Minh hoạ + animation (pulse)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
