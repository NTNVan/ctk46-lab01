"use server";

import { z } from "zod";

import { guestbookEntries, type GuestbookEntry } from "@/src/data/guestbook";

const guestbookSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Tên phải từ 2-50 ký tự")
    .max(50, "Tên phải từ 2-50 ký tự"),
  message: z
    .string()
    .trim()
    .min(1, "Lời nhắn phải từ 1-500 ký tự")
    .max(500, "Lời nhắn phải từ 1-500 ký tự"),
});

export interface ActionState {
  ok: boolean;
  error?: string;
  submissionId?: string;
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

export async function createGuestbookEntry(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = guestbookSchema.safeParse(raw);
  if (!parsed.success) {
    const firstError =
      parsed.error.issues[0]?.message ?? "Dữ liệu không hợp lệ";
    return { ok: false, error: firstError };
  }

  const { name, message } = parsed.data;
  if (isDuplicateWithinOneMinute(name, message)) {
    return {
      ok: false,
      error:
        "Không cho phép gửi lời nhắn trùng lặp (cùng name + message) trong vòng 1 phút",
    };
  }

  const entry: GuestbookEntry = {
    id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
    name,
    message,
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(entry);
  return {
    ok: true,
    submissionId: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
  };
}
