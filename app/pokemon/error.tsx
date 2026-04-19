"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="max-w-5xl mx-auto px-4 py-14 space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Pokémon</h1>

      <Alert variant="destructive">
        <AlertDescription>
          Không tải được danh sách Pokémon. {error.message}
        </AlertDescription>
      </Alert>

      <Button type="button" variant="outline" onClick={reset}>
        Thử lại
      </Button>
    </main>
  );
}
