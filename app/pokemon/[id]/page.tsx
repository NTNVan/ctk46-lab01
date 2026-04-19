import Link from "next/link";
import { notFound } from "next/navigation";

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
import { Separator } from "@/components/ui/separator";
import { formatPokemonName, getPokemonByIdOrName } from "@/src/lib/pokeapi";

export default async function PokemonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon = await getPokemonByIdOrName(id);

  if (!pokemon) notFound();

  const displayName = formatPokemonName(pokemon.name);
  const heightM = pokemon.height / 10;
  const weightKg = pokemon.weight / 10;

  const imageUrl =
    pokemon.sprites.other?.["official-artwork"]?.front_default ??
    pokemon.sprites.front_default;

  return (
    <main className="max-w-5xl mx-auto px-4 py-14 space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{displayName}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Chi tiết Pokémon từ PokéAPI.
          </p>
        </div>

        <Badge variant="secondary">#{pokemon.id}</Badge>
      </header>

      <Card>
        <CardHeader className="border-b">
          <CardTitle>Thông tin</CardTitle>
          <CardDescription>
            Chiều cao/khối lượng được quy đổi từ PokéAPI.
          </CardDescription>
          <CardAction>
            <Link
              href="/pokemon"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Quay lại danh sách
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent className="grid gap-6 md:grid-cols-[220px_1fr]">
          <div className="flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={displayName}
                width={220}
                height={220}
                className="h-55 w-55 object-contain"
              />
            ) : (
              <div className="h-55 w-55 rounded bg-muted" />
            )}
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {pokemon.types
                .slice()
                .sort((a, b) => a.slot - b.slot)
                .map((t) => (
                  <Badge key={t.type.name} variant="outline">
                    {formatPokemonName(t.type.name)}
                  </Badge>
                ))}
            </div>

            <Separator />

            <div className="grid gap-2 text-sm">
              <p>
                <span className="text-muted-foreground">Chiều cao:</span>{" "}
                {heightM}m
              </p>
              <p>
                <span className="text-muted-foreground">Khối lượng:</span>{" "}
                {weightKg}kg
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm font-medium">Abilities</p>
              <ul className="grid gap-1 text-sm text-muted-foreground">
                {pokemon.abilities
                  .slice()
                  .sort((a, b) => a.slot - b.slot)
                  .map((a) => (
                    <li key={a.ability.name}>
                      {formatPokemonName(a.ability.name)}
                      {a.is_hidden ? " (hidden)" : ""}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </CardContent>

        <CardFooter className="justify-end">
          <a
            href={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "link", size: "sm" })}
          >
            Mở JSON trên PokéAPI
          </a>
        </CardFooter>
      </Card>
    </main>
  );
}
