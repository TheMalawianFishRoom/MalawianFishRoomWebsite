import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Malawian Fish Room for pricing and availability of premium African cichlids in Ontario.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[#2A2B2A]/10 bg-[#F4F4F4]">
        <div className="page-container py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="text-xs text-[#2A2B2A]/60">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-[#1577FF]">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-bold text-[#2A2B2A]">Contact</li>
            </ol>
          </nav>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Contact us</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#2A2B2A]/75">
            Inquiry-based sales. Currently no online checkout. Reach out for pricing and availability.
          </p>
        </div>
      </section>

      <section className="page-container grid gap-12 py-12 md:grid-cols-2 md:py-16">
        <div className="rounded-2xl border border-[#2A2B2A]/10 bg-white p-6 md:p-8">
          <h2 className="text-lg font-bold">Send an inquiry</h2>
          <div className="mt-6">
            <Suspense fallback={<p className="text-sm text-[#2A2B2A]/60">Loading form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-[#2A2B2A] p-8 text-white">
            <h2 className="text-lg font-bold text-[#1577FF]">Contact information</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              The Malawian Fish Room
              <br />
              769 Little Simcoe Street,
              <br />
              London, Ontario, Canada
              <br /> 
              Opem 11am - 9pm (est)
              <br />
              7 Days a Week!* 
            </p>
            <a
              href="mailto:malawianfishroom@outlook.com"
              className="mt-4 inline-block text-sm font-bold text-[#4794FF] hover:text-[#1577FF]"
            >
              themalawianfishroom@outlook.com
            </a>
            <p className="mt-4 text-sm text-white/65">
              We respond to inquiries regarding fish selection, availability, and local pickup or
              delivery arrangements.
            </p>
            <p className="mt-4 text-sm text-white/30">
              * - Hours of operation mary vary.
            </p>
          </div>

          <div className="rounded-2xl border border-[#2A2B2A]/10 p-6">
            <h3 className="font-bold">Before you write</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#2A2B2A]/75">
              <li>Include species names from our catalog when possible</li>
              <li>Mention your experience level if you would like stocking advice</li>
              <li>Ask about current availability, stock changes frequently</li>
            </ul>
            <Link href="/catalog" className="btn-outline mt-5 inline-flex">
              Browse catalog
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
