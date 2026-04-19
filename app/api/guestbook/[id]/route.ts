import { NextResponse } from "next/server";

import { guestbookEntries } from "@/src/data/guestbook";

function json(data: unknown, init?: ResponseInit) {
  const headers = new Headers(init?.headers);
  headers.set("Content-Type", "application/json; charset=utf-8");
  return NextResponse.json(data, { ...init, headers });
}

interface RouteParams {
  params: Promise<{ id: string }>;
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

// PUT /api/guestbook/[id]
export async function PUT(request: Request, { params }: RouteParams) {
  const { id } = await params;

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
  const index = guestbookEntries.findIndex((e) => e.id === id);
  if (index === -1) {
    return json({ error: "Không tìm thấy entry" }, { status: 404 });
  }

  guestbookEntries[index] = {
    ...guestbookEntries[index],
    ...validated.data,
  };

  return json(guestbookEntries[index]);
}

// DELETE /api/guestbook/[id]
export async function DELETE(_: Request, { params }: RouteParams) {
  const { id } = await params;

  const index = guestbookEntries.findIndex((e) => e.id === id);
  if (index === -1) {
    return json({ error: "Không tìm thấy entry" }, { status: 404 });
  }

  const [deleted] = guestbookEntries.splice(index, 1);
  return json(deleted);
}
