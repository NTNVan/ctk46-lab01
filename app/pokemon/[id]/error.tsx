"use client";

import Link from "next/link";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="max-w-5xl mx-auto px-4 py-14 space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Chi tiết Pokémon</h1>

      <Alert variant="destructive">
        <AlertDescription>
          Không tải được dữ liệu Pokémon. {error.message}
        </AlertDescription>
      </Alert>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={reset}
          className={buttonVariants({ variant: "outline" })}
        >
          Thử lại
        </button>
        <Link href="/pokemon" className={buttonVariants({ variant: "ghost" })}>
          Quay lại danh sách
        </Link>
      </div>
    </main>
  );
}
