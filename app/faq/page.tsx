import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { faqSections } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about African cichlid care, ordering, and The Malawian Fish Room in Ontario.",
};

export default function FaqPage() {
  return (
    <div className="bg-white">
      <section className="bg-black text-white">
        <div className="page-container py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-white/50">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-[#4794FF]">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-bold text-white">FAQs</li>
            </ol>
          </nav>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Help &amp; FAQs</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Fish, care, ordering, and local pickup. We&apos;ve got you covered.
          </p>
        </div>
      </section>

      <section className="page-container py-12 md:py-16">
        <div className="mb-10 flex flex-wrap gap-2">
          {faqSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border border-[#2A2B2A]/15 px-4 py-2 text-xs font-bold text-[#2A2B2A] transition hover:border-[#1577FF] hover:text-[#1577FF]"
            >
              {section.title}
            </a>
          ))}
        </div>

        <FaqAccordion sections={faqSections} />
      </section>

      <section className="section-dark">
        <div className="page-container py-14 text-center md:py-16">
          <h2 className="text-2xl font-bold md:text-3xl">Still looking for answers?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/75">
            Reach out with your tank details, species questions, or availability requests. We are
            happy to help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-hero">
              Contact us
            </Link>
            <Link
              href="/catalog"
              className="btn-outline border-white text-white hover:bg-white hover:text-black"
            >
              Browse catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
