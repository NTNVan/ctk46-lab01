import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import {
  formatPokemonName,
  getPokemonList,
  pokemonIdFromUrl,
  spriteUrlFromId,
} from "@/src/lib/pokeapi";

export const metadata = {
  title: "Pokémon",
};

export default async function PokemonListPage() {
  const list = await getPokemonList({ limit: 24, offset: 0 });

  const items = list.results
    .map((p) => ({ ...p, id: pokemonIdFromUrl(p.url) }))
    .filter((p): p is { name: string; url: string; id: number } =>
      Boolean(p.id),
    );

  return (
    <main className="max-w-5xl mx-auto px-4 py-14 space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Pokémon</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Danh sách Pokémon (data fetching từ PokéAPI).
          </p>
        </div>
        <Badge variant="secondary">{items.length} items</Badge>
      </header>

      <section
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Pokemon list"
      >
        {items.map((p) => (
          <Card key={p.id} size="sm">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <span className="truncate">{formatPokemonName(p.name)}</span>
              </CardTitle>
              <CardDescription>#{p.id}</CardDescription>
              <CardAction>
                <Badge variant="outline">PokéAPI</Badge>
              </CardAction>
            </CardHeader>

            <CardContent className="flex items-center justify-center">
              <img
                src={spriteUrlFromId(p.id)}
                alt={formatPokemonName(p.name)}
                loading="lazy"
                width={96}
                height={96}
                className="h-24 w-24"
              />
            </CardContent>

            <CardFooter className="justify-end">
              <Link
                href={`/pokemon/${p.id}`}
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Xem chi tiết
              </Link>
            </CardFooter>
          </Card>
        ))}
      </section>

      <p className="text-xs text-muted-foreground">
        Nguồn dữ liệu: https://pokeapi.co
      </p>
    </main>
  );
}
