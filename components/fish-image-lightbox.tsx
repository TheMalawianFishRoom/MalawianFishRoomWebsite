"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import type { FishSize } from "@/types/fish";
import { createPortal } from "react-dom";

type Props = {
  fishName: string;
  primarySrc: string;
  secondarySrc?: string;

  salePercent: number;
  sizes: FishSize[];

  triggerClassName?: string;
};

type ViewId = "primary" | "secondary";

export function FishImageLightbox({
  fishName,
  primarySrc,
  secondarySrc,

  salePercent,
  sizes,

  triggerClassName = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const [activeView, setActiveView] = useState<ViewId>("primary");
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  const views = [
    {
      id: "primary" as const,
      src: primarySrc,
      label: "Live photo",
      alt: `${fishName} — live photo`,
    },
    ...(secondarySrc
      ? [
          {
            id: "secondary" as const,
            src: secondarySrc,
            label: "Studio view",
            alt: `${fishName} — studio view`,
          },
        ]
      : []),
  ];

  const active = views.find((view) => view.id === activeView) ?? views[0];

  const close = useCallback(() => setOpen(false), []);

  const showNext = useCallback(() => {
    if (views.length < 2) return;
    setActiveView((current) => (current === "primary" ? "secondary" : "primary"));
  }, [views.length]);

  const showPrev = useCallback(() => {
    if (views.length < 2) return;
    setActiveView((current) => (current === "primary" ? "secondary" : "primary"));
  }, [views.length]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close, showNext, showPrev]);

  const modal =
    open && mounted ? (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        role="presentation"
        onClick={close}
      >
        <div className="absolute inset-0 bg-black/75" aria-hidden />

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="relative z-[1] flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-[28px] ring-2 ring-[#1577FF]/90 bg-white shadow-[0_0_25px_rgba(21,119,255,0.15)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-3 border-b border-[#2A2B2A]/10 px-5 py-4">
            <div>
              <h2 id={titleId} className="text-lg font-bold text-[#2A2B2A]">
                {fishName}
              </h2>
              <p className="text-sm text-[#2A2B2A]/60">{active.label}</p>
            </div>
            <button
              type="button"
              onClick={close}
              className="btn-primary shrink-0 px-4 py-2 text-xs"
            >
              Close
            </button>
          </div>

          <div className="custom-scrollbar overflow-y-auto p-5">
           <div className="relative aspect-[4/3] max-h-[400px] w-full overflow-hidden rounded-2xl bg-black ring-2 ring-[#1577FF]/50 shadow-[0_0_15px_rgba(21,119,255,0.12)]">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain p-2"
                sizes="(max-width: 512px) 100vw, 512px"
              />
            </div>


            <div className="mt-5">
    <h3 className="mb-3 text-lg font-bold text-[#1577FF]">
      Available Sizes
    </h3>

    <div className="space-y-3">
      {sizes.map((size) => {
        if (!size.available) return null;

        const salePrice =
          size.price * (1 - salePercent / 100);

        return (
          <div
            key={size.label}
            className="rounded-xl border border-[#1577FF]/20 bg-[#1577FF]/5 p-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#1577FF]">
                {size.label}
              </span>

              <div className="text-right">
                {salePercent > 0 ? (
                  <>
                    <p className="text-sm text-[#2A2B2A]/50 line-through">
                      ${size.price.toFixed(2)}
                    </p>

                    <p className="text-lg font-bold text-red-500">
                      ${salePrice.toFixed(2)}
                    </p>
                  </>
                ) : (
                  <p className="text-lg font-bold text-[#1577FF]">
                    ${size.price.toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>

            {views.length > 1 ? (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {views.map((view) => (
                  <button
                    key={view.id}
                    type="button"
                    onClick={() => setActiveView(view.id)}
                    className={`overflow-hidden rounded-xl border-2 transition ${
                      activeView === view.id
                        ? "border-[#1577FF]"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="relative h-16 w-24 bg-black">
                      <Image src={view.src} alt={view.label} fill className="object-contain" sizes="96px" />
                    </div>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setActiveView("primary");
          setOpen(true);
        }}
        className={`group relative block h-full w-full cursor-zoom-in ${triggerClassName}`}
        aria-label={`View photos of ${fishName}`}
        aria-haspopup="dialog"
      >
        <Image
          src={primarySrc}
          alt={fishName}
          fill
          className="object-contain p-2 transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
          sizes="(max-width: 768px) 50vw, 291px"
        />
      </button>
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
