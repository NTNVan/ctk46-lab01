import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Loading() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-14 space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Pokémon</h1>
          <p className="mt-1 text-sm text-muted-foreground">Đang tải…</p>
        </div>
        <Badge variant="secondary">Loading</Badge>
      </header>

      <Card className="animate-pulse">
        <CardHeader className="border-b">
          <CardTitle className="h-4 w-40 rounded bg-muted" />
          <div className="h-3 w-64 rounded bg-muted" />
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-[220px_1fr]">
          <div className="flex items-center justify-center">
            <div className="h-55 w-55 rounded bg-muted" />
          </div>
          <div className="space-y-3">
            <div className="h-8 w-2/3 rounded bg-muted" />
            <div className="h-3 w-full rounded bg-muted" />
            <div className="h-3 w-5/6 rounded bg-muted" />
            <div className="h-3 w-2/3 rounded bg-muted" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
