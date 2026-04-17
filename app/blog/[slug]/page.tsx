import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPostBySlug, posts } from "@/src/data/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Bài viết không tồn tại",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="space-y-6">
      <Link
        href="/blog"
        className="inline-block text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
      >
        ← Quay lại danh sách
      </Link>

      <article className="rounded-3xl bg-white/60 p-6 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-800 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:text-zinc-200 dark:ring-zinc-800">
            {post.category}
          </span>
          <span className="text-xs text-zinc-600 dark:text-zinc-300">
            {post.date}
          </span>
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {post.title}
        </h1>

        <div className="prose prose-zinc mt-6 max-w-none whitespace-pre-line text-zinc-700 dark:prose-invert dark:text-zinc-200">
          {post.content}
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
