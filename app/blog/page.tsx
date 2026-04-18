import Link from "next/link";

import DebugErrorTrigger from "./DebugErrorTrigger";

interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<ApiPost[]> {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function BlogPage() {
  if (process.env.NODE_ENV === "development") {
    await sleep(800);
  }

  const posts = await getPosts();

  return (
    <main className="space-y-6">
      <DebugErrorTrigger />
      <header>
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="relative inline-block bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-10 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:opacity-70 dark:after:bg-white">
            Blog
          </span>
        </h1>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
          Danh sách bài viết (mock data).
        </p>
      </header>

      <div className="grid gap-4">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group rounded-3xl bg-white/60 p-6 ring-1 ring-white/40 transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900/60 dark:ring-zinc-800"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-800 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:text-zinc-200 dark:ring-zinc-800">
                User {post.userId}
              </span>
              <span className="text-xs text-zinc-600 dark:text-zinc-300">
                ID: {post.id}
              </span>
            </div>

            <Link href={`/blog/${post.id}`} className="block">
              <h2 className="mt-3 text-lg font-bold text-zinc-900 transition-colors group-hover:text-blue-700 dark:text-zinc-100 dark:group-hover:text-blue-300">
                {post.title}
              </h2>
            </Link>

            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
              {post.body}
            </p>

            <Link
              href={`/blog/${post.id}`}
              className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
            >
              Đọc thêm →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
