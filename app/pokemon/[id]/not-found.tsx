import Link from "next/link";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-14 space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Không tìm thấy</h1>

      <Alert variant="destructive">
        <AlertDescription>
          Pokémon không tồn tại hoặc đã bị thay đổi trên PokéAPI.
        </AlertDescription>
      </Alert>

      <Link href="/pokemon" className={buttonVariants({ variant: "outline" })}>
        Quay lại danh sách Pokémon
      </Link>
    </main>
  );
}
