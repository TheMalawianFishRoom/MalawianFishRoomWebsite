import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CatalogClient } from "@/components/catalog-client";
import { fishData } from "@/lib/fish";

export const metadata: Metadata = {
  title: "Fish Catalog",
  description:
    "Browse African cichlids including Aulonocara peacocks and haplochromines from The Malawian Fish Room.",
};

export default function CatalogPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[#2A2B2A]/10">
        <div className="page-container grid gap-8 py-12 md:grid-cols-2 md:py-16">
          <div className="flex flex-col justify-center">
            <nav aria-label="Breadcrumb" className="text-xs text-[#2A2B2A]/60">
              <ol className="flex flex-wrap items-center gap-1">
                <li>
                  <Link href="/" className="hover:text-[#1577FF]">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-bold text-[#2A2B2A]">Fish catalog</li>
              </ol>
            </nav>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#2A2B2A] md:text-5xl">
              Fish catalog
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#2A2B2A]/75">
              Explore our current retail list of peacocks and haps. Availability updates regularly.
            </p>

          </div>
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-black md:min-h-[320px]">
            <Image
              src="/photos/fish/Aulonocara_Rubescens_original.webp"
              alt="Super Red Ruby peacock cichlid"
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </section>

      <section className="page-container py-12 md:py-16">
        <Suspense
          fallback={
            <p className="text-sm text-[#2A2B2A]/60">Loading catalog…</p>
          }
        >
          <CatalogClient fishData={fishData} />
        </Suspense>
      </section>
    </div>
  );
}
