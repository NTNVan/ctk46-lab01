"use client";

import { useActionState, useMemo, useState } from "react";

import {
  submitContactMessage,
  type ContactActionState,
} from "@/app/contact/actions";
import SubmitButton from "@/components/SubmitButton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactActionState = { ok: false };

export default function ContactForm() {
  const [instanceKey, setInstanceKey] = useState(0);

  return (
    <ContactFormInner
      key={instanceKey}
      onReset={() => setInstanceKey((k) => k + 1)}
    />
  );
}

function ContactFormInner({ onReset }: { onReset: () => void }) {

  const [state, formAction] = useActionState(
    submitContactMessage,
    initialState,
  );

  const showError = useMemo(() => !state.ok && Boolean(state.error), [state]);

  if (state.ok) {
    return (
      <div className="grid gap-3">
        <Alert>
          <AlertDescription>
            Gửi tin nhắn thành công. Cảm ơn bạn!
          </AlertDescription>
        </Alert>

        <Button
          type="button"
          variant="outline"
          className="w-fit"
          onClick={onReset}
        >
          Gửi tin nhắn khác
        </Button>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-4">
      {showError ? (
        <Alert variant="destructive">
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      ) : null}

      <div className="grid gap-2">
        <Label htmlFor="contact-name">Họ và tên</Label>
        <Input
          id="contact-name"
          name="name"
          placeholder="Nhập tên của bạn"
          autoComplete="name"
          required
          minLength={2}
          maxLength={50}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          type="email"
          name="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          maxLength={100}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-message">Nội dung</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Nhập nội dung..."
          required
          minLength={1}
          maxLength={500}
          rows={5}
        />
      </div>

      <SubmitButton pendingText="Đang gửi..." className="w-fit">
        Gửi tin nhắn
      </SubmitButton>
    </form>
  );
}
