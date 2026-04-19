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

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} size="sm" className="animate-pulse">
            <CardHeader className="border-b">
              <CardTitle className="h-4 w-2/3 rounded bg-muted" />
              <div className="h-3 w-16 rounded bg-muted" />
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div className="h-24 w-24 rounded bg-muted" />
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
