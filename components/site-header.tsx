import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteSearch } from "@/components/site-search";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-black text-white">
      <div className="page-container border-b border-white/10 py-4">
        <div className="grid items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
          <Link href="/" className="flex shrink-0 items-center" aria-label="The Malawian Fish Room home">
            <Image
              src="/photos/malawian-logo.webp"
              alt="The Malawian Fish Room"
              width={360}
              height={130}
              priority
              className="h-12 w-auto rounded-md bg-white/95 p-0 sm:h-[4rem] md:h-[4rem]"
            />
          </Link>

          <div className="mx-auto w-full max-w-xl">
            <SiteSearch />
          </div>

          <div className="flex items-center justify-end gap-4 text-sm font-bold">
            <Link href="/contact" className="hidden hover:text-[#4794FF] sm:inline">
              Account / Inquiries
            </Link>
            <Link
              href="/catalog"
              className="flex items-center gap-1.5 hover:text-[#4794FF]"
              aria-label="View fish catalog"
            >
              <span className="hidden sm:inline">Catalog</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 7h16l-1.2 10.5a1 1 0 0 1-1 .8H6.2a1 1 0 0 1-1-.8L4 7Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path d="M9 11v0M15 11v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="page-container flex flex-wrap items-center justify-between gap-3 py-3 text-sm font-bold">
        <Suspense fallback={<div className="h-6 w-48 animate-pulse rounded bg-white/10" />}>
          <SiteNav />
        </Suspense>
      </div>
    </header>
  );
}
