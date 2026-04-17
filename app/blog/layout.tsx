export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="min-w-0 flex-1">{children}</div>

        <aside className="w-full shrink-0 lg:w-64">
          <div className="group rounded-2xl bg-white/60 p-6 ring-1 ring-white/40 transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900/60 dark:ring-zinc-800">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Danh mục
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
              <li>
                <button
                  type="button"
                  className="cursor-pointer transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Công nghệ
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="cursor-pointer transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Học tập
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="cursor-pointer transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Dự án cá nhân
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="cursor-pointer transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Cuộc sống
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
