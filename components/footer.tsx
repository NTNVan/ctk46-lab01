export default function Footer() {
  const year = new Date().getFullYear();
  const email = "2212490@dlu.edu.vn";
  const githubUrl = "https://github.com/NTNVan";

  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-white/40 bg-white/60 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-5xl px-4 py-5 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          © {year} — Nguyễn Trần Ngọc Vân | CTK46 — Các công nghệ mới trong PTPM
          <span className="mx-2 opacity-60">•</span>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-200"
          >
            GitHub
          </a>
          <span className="mx-2 opacity-60">•</span>
          <a
            href={`mailto:${email}`}
            className="font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-200"
          >
            {email}
          </a>
        </p>
      </div>
    </footer>
  );
}
