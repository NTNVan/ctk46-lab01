"use client";

import { useEffect, useState } from "react";

export default function CopyToClipboardButton({
  value,
  children,
  copiedText = "Đã sao chép!",
  idleText,
  timeoutMs = 1200,
  onCopiedChange,
  className,
}: {
  value: string;
  children?: React.ReactNode;
  copiedText?: string;
  idleText?: string;
  timeoutMs?: number;
  onCopiedChange?: (copied: boolean) => void;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    onCopiedChange?.(copied);
  }, [copied, onCopiedChange]);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), timeoutMs);
    return () => window.clearTimeout(t);
  }, [copied, timeoutMs]);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" onClick={onClick} className={className}>
      {children ?? (copied ? copiedText : (idleText ?? "Copy"))}
    </button>
  );
}
