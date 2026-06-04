"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/fish";

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = heroSlides[index];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="page-container relative grid min-h-[min(78vh,640px)] items-center gap-8 py-16 md:grid-cols-2 md:py-20">
        <div className="relative z-10 space-y-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1577FF]">
            Welcome to The Malawian Fish Room
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {slide.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/catalog" className="btn-hero">
              Start browsing
            </Link>
            <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-black">
              Learn more
            </Link>
          </div>
          <p className="text-xs text-white/50">Featuring {slide.fishName}</p>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-md">
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.fishName}
              fill
              priority
              className="object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)] transition duration-700"
              sizes="(max-width: 768px) 90vw, 420px"
            />
            <Image
              key={slide.accentImage}
              src={slide.accentImage}
              alt=""
              aria-hidden
              width={140}
              height={100}
              className="pointer-events-none absolute -bottom-4 -left-6 hidden rounded-xl opacity-40 blur-[1px] md:block"
            />
          </div>
        </div>
      </div>

      <div className="page-container flex items-center justify-between gap-4 pb-8">
        <div className="flex items-center gap-2">
          {heroSlides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => goTo(dotIndex)}
              className={`h-2.5 rounded-full transition-all ${
                dotIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          className="rounded-full border border-white/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white/70 hover:border-white/50 hover:text-white"
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </section>
  );
}
