import Image from "next/image";
import Link from "next/link";
import { CollectionCard } from "@/components/collection-card";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { OpeningSoonPopup } from "@/components/opening-soon-popup";
import { ProductCard } from "@/components/product-card";
import {
  availableFeaturedFish,
  collections,
  countAvailable,
  fishData,
} from "@/lib/fish";

export default function HomePage() {
  const totalAvailable = countAvailable();

  return (
    <>
      <OpeningSoonPopup />
      <HeroSlideshow />

      <section className="section-blue-gradient">
        <div className="page-container grid gap-8 py-12 md:grid-cols-3 md:py-14">
          {[
            {
              title: "Raised in Ontario",
              text: "Healthy and vibrant cichlids from our dedicated fish room, always bred with care for long-term success.",
            },
            {
              title: "Wholesale heritage",
              text: "Years of consistent wholesale breeding now offered directly to hobbyists across Canada.",
            },
            {
              title: "Inquiry-based sales",
              text: "Contact us for current stock, pricing, and local arrangements. Expert guidance with every order.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center md:text-left">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-dark">
        <div className="page-container space-y-10 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#1577FF]">
                Available now
              </p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                {totalAvailable} fish ready to inquire about
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                Stock updates regularly. These highlights are currently marked available in our
                catalog, contact us to confirm before you visit or order.
              </p>
            </div>
            <Link href="/catalog?availability=Available" className="btn-hero">
              View all available
            </Link>
          </div>

          <div className="product-grid">
            {availableFeaturedFish.slice(0, 4).map((fish) => (
              <ProductCard key={fish.name} fish={fish} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark border-t border-white/10">
        <div className="page-container space-y-8 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#1577FF]">
              Shop by collection
            </p>
            <h2 className="mt-2 text-3xl font-bold">The one stop shop for Malawian cichlids</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              From show-stopping peacocks to bold haplochromines; explore {fishData.length} lines in
              our retail catalog.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {collections.map((collection) => (
              <CollectionCard key={collection.slug} collection={collection} variant="dark" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="page-container grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#1577FF]">
              Why choose us
            </p>
            <h2 className="text-3xl font-bold text-[#2A2B2A] md:text-4xl">
              Customers trust our fish, and our experience.
            </h2>
            <p className="text-sm leading-relaxed text-[#2A2B2A]/75">
              The Malawian Fish Room makes it straightforward to find beautiful, healthy African
              cichlids. We specialize in Aulonocara peacocks and haplochromines, selected for color,
              temperament, and responsible care from our Ontario-based operation.
            </p>
            <ul className="space-y-3 text-sm font-bold text-[#2A2B2A]">
              <li className="flex gap-3">
                <span className="text-[#1577FF]">✓</span>
                Experienced breeder with deep knowledge of Malawian lines
              </li>
              <li className="flex gap-3">
                <span className="text-[#1577FF]">✓</span>
                Strong wholesale background focused on retail service
              </li>
              <li className="flex gap-3">
                <span className="text-[#1577FF]">✓</span>
                Studio and aquarium photos so you know what you are getting
              </li>
            </ul>
            <Link href="/about" className="btn-primary">
              About the breeder
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black">
            <Image
              src="/photos/lake-malawi.jpg"
              alt="Lake Malawi, natural habitat of African cichlids"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="page-container grid items-center gap-8 py-14 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-2xl font-bold text-[#1577FF] md:text-3xl">Our focus on education</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">
              We believe sharing information creates responsible practices, stunning aquariums, and
              thriving fish. Whether you are new to African cichlids or upgrading a show tank, we
              are here to help you choose the right stock with confidence.
            </p>
            <Link href="/faq" className="btn-outline mt-6 border-white text-white hover:bg-white hover:text-black">
              Learn more
            </Link>
          </div>
          <div className="relative h-40 w-56 shrink-0 bg-black md:h-48 md:w-64">
            <Image
              src="/photos/fish/Iceberg_Redfin_original.jpg"
              alt="Iceberg Redfin cichlid"
              fill
              className="object-contain p-2"
              sizes="256px"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4] py-16">
        <div className="page-container text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to level up your fish keeping?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[#2A2B2A]/70">
            Browse the full catalog or send an inquiry. We respond regarding selection, availability, orders,
            and local arrangements.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/catalog" className="btn-primary">
              Browse catalog
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
