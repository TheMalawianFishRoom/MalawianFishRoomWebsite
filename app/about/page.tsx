import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CollectionCard } from "@/components/collection-card";
import { collections, countAvailable, fishData } from "@/lib/fish";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Malawian Fish Room, an Ontario breeder of premium African cichlids with deep wholesale experience.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-black text-white">
        <div className="page-container py-16 md:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#1577FF]">About us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Built on wholesale consistency, focused on you.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            The Malawian Fish Room has earned trust through healthy stock, strong bloodlines, and
            years of wholesale breeding. Our retail expansion means hobbyists across Canada can
            access that same curated quality directly.
          </p>
        </div>
      </section>

      <section className="page-container grid gap-8 py-16 md:grid-cols-2">
        <article className="rounded-2xl bg-[#F4F4F4] p-8">
          <h2 className="text-xl font-bold text-[#1577FF]">Our story</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#2A2B2A]/80">
            What began as a wholesale breeding operation evolved into a highly curated program
            focused on quality and consistency. Working directly with fish keepers lets us share
            the same premium African cichlids we have supplied to partners for years, with personal
            guidance every step of the way.
          </p>
        </article>
        <article className="rounded-2xl bg-[#F4F4F4] p-8">
          <h2 className="text-xl font-bold text-[#1577FF]">Our focus</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#2A2B2A]/80">
            We specialize in Aulonocara (Peacocks) and Haplochromines (Haps), with stock selected for
            strong color, healthy development, and responsible care. Every fish is raised and managed
            from our Ontario-based operation.
          </p>
        </article>
      </section>

      <section id="lake-malawi" className="section-dark scroll-mt-32">
        <div className="page-container grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-3xl font-bold text-[#1577FF]">From Lake Malawi to your tank</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              These fish come from one of the most famous freshwater ecosystems in the world: Lake
              Malawi in Africa. Known for crystal clear water and extraordinary color diversity,
              the lake is home to many of the cichlid lines hobbyists love most.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              If you are new to African cichlids, think of them as active and vibrant centerpiece fish
              who have unique personalities and striking patterns. Our goal is to make this world easy
              to explore, so you can find beautiful and healthy fish while feeling confident starting or
              upgrading your aquarium.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src="/photos/lake-malawi.jpg"
              alt="Scenic view of Lake Malawi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>
        </div>
      </section>

      <section className="page-container py-16">
        <h2 className="text-2xl font-bold">Browse our collections</h2>
        <p className="mt-2 text-sm text-[#2A2B2A]/70">
          {countAvailable()} fish currently available across {fishData.length} catalog lines.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} variant="light" />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
