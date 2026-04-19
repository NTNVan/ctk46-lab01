import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { Comment, Post, User } from "@/src/types/post";

async function getPost(postId: number): Promise<Post | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

async function getUser(userId: number): Promise<User | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

async function getComments(postId: number): Promise<Comment[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }

  return response.json();
}

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const postId = Number(id);

  if (!Number.isFinite(postId)) {
    return {
      title: "Bài viết không tồn tại",
    };
  }

  const post = await getPost(postId);

  if (!post) {
    return {
      title: "Bài viết không tồn tại",
    };
  }

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const postId = Number(id);

  if (!Number.isFinite(postId)) {
    notFound();
  }

  // BTH3 (Bài tập 3): chạy song song `getPost()` và `getUser()`.
  // JSONPlaceholder có pattern userId theo postId (1-10 -> user 1, 11-20 -> user 2, ...)
  // nên có thể đoán userId để fetch user song song. Nếu đoán sai, fallback theo post.userId.
  const guessedUserId = Math.min(10, Math.max(1, Math.ceil(postId / 10)));
  const [post, guessedUser, comments] = await Promise.all([
    getPost(postId),
    getUser(guessedUserId),
    getComments(postId),
  ]);

  if (!post) notFound();

  const user =
    guessedUser && guessedUser.id === post.userId
      ? guessedUser
      : await getUser(post.userId);

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
            User {post.userId}
          </span>
          <span className="text-xs text-zinc-600 dark:text-zinc-300">
            Post ID: {post.id}
          </span>
        </div>

        {user ? (
          <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
            Tác giả: <span className="font-semibold">{user.name}</span> (
            {user.email})
          </p>
        ) : null}

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {post.title}
        </h1>

        <div className="prose prose-zinc mt-6 max-w-none whitespace-pre-line text-zinc-700 dark:prose-invert dark:text-zinc-200">
          {post.body}
        </div>
      </article>

      <section className="rounded-3xl bg-white/60 p-6 ring-1 ring-white/40 dark:bg-zinc-900/60 dark:ring-zinc-800">
        <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Comments ({comments.length})
        </h2>

        <div className="mt-4 grid gap-4">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-2xl bg-white/70 p-4 ring-1 ring-white/40 dark:bg-zinc-900/50 dark:ring-zinc-800"
            >
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {comment.name}
              </p>
              <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-300">
                {comment.email}
              </p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                {comment.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
