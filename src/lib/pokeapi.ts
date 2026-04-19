export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}

export interface PokemonTypeSlot {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonAbilitySlot {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface PokemonSprites {
  front_default: string | null;
  other?: {
    "official-artwork"?: {
      front_default: string | null;
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number; // decimeters
  weight: number; // hectograms
  types: PokemonTypeSlot[];
  abilities: PokemonAbilitySlot[];
  sprites: PokemonSprites;
}

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as T;
}

export function pokemonIdFromUrl(url: string): number | null {
  const match = url.match(/\/pokemon\/(\d+)\/?$/);
  if (!match) return null;
  const id = Number(match[1]);
  return Number.isFinite(id) ? id : null;
}

export function spriteUrlFromId(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export function formatPokemonName(name: string): string {
  return name
    .trim()
    .split(/[-\s]+/g)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(" ");
}

export async function getPokemonList(options?: {
  limit?: number;
  offset?: number;
}): Promise<PokemonListResponse> {
  const limit = options?.limit ?? 24;
  const offset = options?.offset ?? 0;
  const url = new URL("https://pokeapi.co/api/v2/pokemon");
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("offset", String(offset));

  // Keep defaults simple; App Router will cache server fetches by default.
  return fetchJson<PokemonListResponse>(url.toString());
}

export async function getPokemonByIdOrName(
  idOrName: string,
): Promise<Pokemon | null> {
  const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(idOrName)}`;
  const res = await fetch(url);

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as Pokemon;
}
