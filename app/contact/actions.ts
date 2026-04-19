"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được quá 50 ký tự"),
  email: z
    .string()
    .trim()
    .email("Email không hợp lệ")
    .max(100, "Email không được quá 100 ký tự"),
  message: z
    .string()
    .trim()
    .min(1, "Nội dung không được để trống")
    .max(500, "Nội dung không được quá 500 ký tự"),
});

export interface ContactActionState {
  ok: boolean;
  error?: string;
}

export async function submitContactMessage(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const firstError =
      parsed.error.issues[0]?.message ?? "Dữ liệu không hợp lệ";
    return { ok: false, error: firstError };
  }

  // Demo action: không gửi email thực. (Lab sau có thể thay bằng service.)
  return { ok: true };
}
