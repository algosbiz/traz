"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Script from "next/script";

// The slice of Cloudflare Turnstile's explicit-render API that we use.
declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "auto" | "light" | "dark";
          size?: "normal" | "flexible" | "compact";
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export interface TurnstileHandle {
  /** Reset the widget so a fresh token is issued (tokens are single-use). */
  reset: () => void;
}

interface TurnstileProps {
  /** Called with a fresh token once the visitor passes the challenge. */
  onVerify: (token: string) => void;
  /** Called when the token expires — clear it in the parent. */
  onExpire?: () => void;
  /** Called on widget error — clear it in the parent. */
  onError?: () => void;
}

/**
 * Cloudflare Turnstile widget (explicit render). Hands a verification token to
 * the parent form via onVerify. That token MUST be POSTed and verified
 * server-side (see src/lib/turnstile.ts) before the submit is trusted.
 */
const Turnstile = forwardRef<TurnstileHandle, TurnstileProps>(function Turnstile(
  { onVerify, onExpire, onError },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Keep the latest callbacks in refs so the (once-rendered) widget always
  // calls the current versions, even if the parent passes inline closures.
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);
  onVerifyRef.current = onVerify;
  onExpireRef.current = onExpire;
  onErrorRef.current = onError;

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    },
  }));

  const renderWidget = () => {
    if (!window.turnstile || !containerRef.current || widgetIdRef.current) {
      return;
    }
    if (!SITE_KEY) {
      console.warn(
        "Turnstile: NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set — widget cannot render.",
      );
      return;
    }
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      theme: "auto",
      callback: (token: string) => onVerifyRef.current(token),
      "expired-callback": () => onExpireRef.current?.(),
      "error-callback": () => onErrorRef.current?.(),
    });
  };

  useEffect(() => {
    // On client-side navigation the script is already loaded, so the Script
    // onLoad below won't fire again — render here in that case.
    renderWidget();
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <div ref={containerRef} />
    </>
  );
});

export default Turnstile;
