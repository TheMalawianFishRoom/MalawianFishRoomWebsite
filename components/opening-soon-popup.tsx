"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

const STORAGE_KEY = "mfr-opening-soon-dismissed";

export function OpeningSoonPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore storage errors */
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* show popup if storage is unavailable */
    }

    const timer = window.setTimeout(() => setOpen(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, dismiss]);

  const modal =
    open && mounted ? (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
        role="presentation"
        onClick={dismiss}
      >
        <div className="fixed inset-0 bg-[#0D2C54]/80 backdrop-blur-sm" aria-hidden />

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="relative z-[1] my-auto flex w-full max-w-md max-h-[min(calc(100dvh-2rem),720px)] flex-col overflow-hidden rounded-[28px] border border-white/15 bg-white shadow-[0_32px_80px_rgba(0,0,0,0.45)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#1577FF] via-[#0031FF] to-[#0D2C54] px-5 py-5 text-center text-white sm:px-6 sm:py-6">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/10"
              aria-hidden
            />
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-lg leading-none text-white transition hover:bg-black/35 sm:right-4 sm:top-4"
              aria-label="Close announcement"
            >
              ×
            </button>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              The Malawian Fish Room
            </p>
            <h2 id={titleId} className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Retail Location Opening August 1st in London!
            </h2>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-[#F4F4F4] px-5 py-4">
            <div className="overflow-hidden rounded-2xl border border-[#2A2B2A]/10 bg-white shadow-sm">
              <Image
                src="/photos/up_needsphone_flier_blue.webp"
                alt="The Malawian Fish Room opening soon flier"
                width={800}
                height={1100}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    ) : null;

  return mounted && modal ? createPortal(modal, document.body) : null;
}
