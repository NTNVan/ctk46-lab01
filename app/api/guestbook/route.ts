import { NextResponse } from "next/server";

import { guestbookEntries, type GuestbookEntry } from "@/src/data/guestbook";

function json(data: unknown, init?: ResponseInit) {
  const headers = new Headers(init?.headers);
  headers.set("Content-Type", "application/json; charset=utf-8");
  return NextResponse.json(data, { ...init, headers });
}

function parseLimit(url: string): number | null {
  const { searchParams } = new URL(url);
  const raw = searchParams.get("limit");
  if (!raw) return null;

  const limit = Number(raw);
  if (!Number.isFinite(limit)) return NaN;

  const normalized = Math.floor(limit);
  if (normalized < 0) return NaN;

  return normalized;
}

function validateEntry(
  input: unknown,
):
  | { ok: true; data: { name: string; message: string } }
  | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Body không hợp lệ" };
  }

  const name = String((input as { name?: unknown }).name ?? "").trim();
  const message = String((input as { message?: unknown }).message ?? "").trim();

  if (name.length < 2 || name.length > 50) {
    return { ok: false, error: "Tên phải từ 2-50 ký tự" };
  }

  if (message.length < 1 || message.length > 500) {
    return { ok: false, error: "Lời nhắn phải từ 1-500 ký tự" };
  }

  return { ok: true, data: { name, message } };
}

function isDuplicateWithinOneMinute(name: string, message: string): boolean {
  const now = Date.now();
  return guestbookEntries.some((entry) => {
    if (entry.name.trim() !== name) return false;
    if (entry.message.trim() !== message) return false;

    const createdAt = Date.parse(entry.createdAt);
    if (!Number.isFinite(createdAt)) return false;

    return now - createdAt < 60_000;
  });
}

// GET /api/guestbook?limit=5
export async function GET(request: Request) {
  const url = new URL(request.url);
  const rawLimit = url.searchParams.get("limit");
  const limit = parseLimit(request.url);
  if (rawLimit !== null && Number.isNaN(limit)) {
    return json({ error: "limit phải là số nguyên không âm" }, { status: 400 });
  }

  const sorted = [...guestbookEntries].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );

  const result = typeof limit === "number" ? sorted.slice(0, limit) : sorted;
  return json(result);
}

// POST /api/guestbook
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Body không phải JSON hợp lệ" }, { status: 400 });
  }

  const validated = validateEntry(body);
  if (!validated.ok) {
    return json({ error: validated.error }, { status: 400 });
  }

  const { name, message } = validated.data;
  if (isDuplicateWithinOneMinute(name, message)) {
    return json(
      { error: "Không được gửi lời nhắn trùng lặp trong vòng 1 phút" },
      { status: 400 },
    );
  }

  const entry: GuestbookEntry = {
    id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
    name,
    message,
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(entry);
  return json(entry, { status: 201 });
}
