import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#080808] text-white">
      <div className="page-container grid gap-10 py-16 md:grid-cols-3 md:gap-12">
        <div>
          <Image
            src="/photos/malawian-logo.webp"
            alt="The Malawian Fish Room"
            width={360}
            height={130}
            className="h-16 w-auto max-w-full rounded-md bg-white/95 p-0 sm:h-20 md:h-24"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            Premium German line bred African cichlids raised in Ontario. 
            Trusted wholesale breeding, now available directly to hobbyists.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <Link href="/catalog" className="hover:text-white">
                Fish catalog
              </Link>
            </li>
            <li>
              <Link href="/catalog?availability=Available" className="hover:text-white">
                Available now
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About the breeder
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact &amp; inquiries
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide">Get in touch</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            769 Little Simcoe St. 
            <br />
            London, Ontario, Canada
            <br />
            Open 11 am - 9 pm (est), 7 days a week!
          </p>
          <a
            href="mailto:themalawianfishroom@outlook.com"
            className="mt-3 inline-block text-sm font-bold text-[#4794FF] hover:text-[#1577FF]"
          >
            themalawianfishroom@outlook.com
          </a>
          <p className="mt-4 text-xs text-white/50">
            Contact us for current stock, pricing, and local arrangements.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        © {new Date().getFullYear()} The Malawian Fish Room. All rights reserved.
      </div>
    </footer>
  );
}
