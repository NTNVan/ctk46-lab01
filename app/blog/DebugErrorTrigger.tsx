"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DebugErrorTrigger() {
  const searchParams = useSearchParams();
  const [checked, setChecked] = useState(false);
  const [shouldThrow, setShouldThrow] = useState(false);

  const debugError = searchParams.get("debugError");
  const nonce = searchParams.get("nonce") ?? "";

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    if (debugError !== "1") {
      setChecked(true);
      setShouldThrow(false);
      return;
    }

    const key = `blog_debug_error_shown_${debugError}_${nonce}`;

    try {
      const alreadyShown = window.sessionStorage.getItem(key) === "1";
      if (!alreadyShown) {
        window.sessionStorage.setItem(key, "1");
        setShouldThrow(true);
      }
    } finally {
      setChecked(true);
    }
  }, [debugError, nonce]);

  if (process.env.NODE_ENV === "development" && debugError === "1") {
    if (!checked) return null;

    if (shouldThrow) {
      const value: any = undefined;
      value.toString();
    }
  }

  return null;
}
