"use client";

import { useActionState, useEffect, useMemo } from "react";

import {
  createGuestbookEntry,
  type ActionState,
} from "@/app/guestbook/actions";
import SubmitButton from "@/components/SubmitButton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ActionState = { ok: false };

export default function GuestbookForm({
  onCreated,
}: {
  onCreated: () => void;
}) {
  const [state, formAction] = useActionState(
    createGuestbookEntry,
    initialState,
  );

  const showError = useMemo(() => !state.ok && Boolean(state.error), [state]);

  useEffect(() => {
    if (!state.ok) return;
    onCreated();
  }, [onCreated, state.ok, state.submissionId]);

  return (
    <form
      key={state.submissionId ?? "guestbook-form"}
      action={formAction}
      className="grid gap-4"
      aria-label="Guestbook form"
    >
      {showError ? (
        <Alert variant="destructive">
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      ) : null}

      <div className="grid gap-2">
        <Label htmlFor="guestbook-name">Tên</Label>
        <Input
          id="guestbook-name"
          name="name"
          placeholder="Nhập tên của bạn"
          autoComplete="name"
          required
          minLength={2}
          maxLength={50}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="guestbook-message">Lời nhắn</Label>
        <Textarea
          id="guestbook-message"
          name="message"
          placeholder="Nhập lời nhắn..."
          required
          minLength={1}
          maxLength={500}
          rows={4}
        />
      </div>

      <SubmitButton pendingText="Đang gửi..." className="w-fit">
        Gửi lời nhắn
      </SubmitButton>
    </form>
  );
}
