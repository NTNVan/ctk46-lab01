import Link from "next/link";

export default function PostNotFound() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Bài viết không tồn tại
        </h2>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
          Bài viết bạn đang tìm kiếm không có trong hệ thống.
        </p>

        <div className="mt-6 inline-flex rounded-full bg-linear-to-r from-purple-400/70 to-blue-400/70 p-px shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:from-purple-300/70 dark:to-blue-300/70">
          <Link
            href="/blog"
            className="rounded-full bg-white/60 px-6 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm dark:bg-zinc-900/60 dark:text-zinc-100"
          >
            Quay lại Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
