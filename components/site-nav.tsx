"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  match?: (pathname: string, searchParams: URLSearchParams) => boolean;
};

const primaryNav: NavLink[] = [
  { href: "/", label: "Home", match: (pathname) => pathname === "/" },
  {
    href: "/catalog",
    label: "Fish Catalog",
    match: (pathname) => pathname === "/catalog" || pathname.startsWith("/catalog/"),
  },
  { href: "/about", label: "About", match: (pathname) => pathname === "/about" },
  { href: "/contact", label: "Contact", match: (pathname) => pathname === "/contact" },
];

const secondaryNav: NavLink[] = [
  {
    href: "/catalog?availability=Available",
    label: "Available Now",
    match: (pathname, searchParams) =>
      pathname === "/catalog" && searchParams.get("availability") === "Available",
  },
  { href: "/faq", label: "FAQ", match: (pathname) => pathname === "/faq" },
];

function linkClassName(isActive: boolean, variant: "primary" | "secondary") {
  if (isActive) {
    return "text-[#1577FF]";
  }
  return variant === "primary"
    ? "text-white hover:text-[#4794FF]"
    : "text-white/85 hover:text-[#4794FF]";
}

function isLinkActive(link: NavLink, pathname: string, searchParams: URLSearchParams) {
  if (link.match) {
    return link.match(pathname, searchParams);
  }
  const [path] = link.href.split("?");
  return pathname === path;
}

export function SiteNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-3">
      <nav aria-label="Primary">
        <ul className="flex flex-wrap items-center gap-4 md:gap-6">
          {primaryNav.map((link) => {
            const active = isLinkActive(link, pathname, searchParams);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={linkClassName(active, "primary")}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex flex-wrap items-center gap-3 md:gap-5">
        <nav aria-label="Secondary">
          <ul className="flex flex-wrap items-center gap-4">
            {secondaryNav.map((link) => {
              const active = isLinkActive(link, pathname, searchParams);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={linkClassName(active, "secondary")}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link
          href="/contact"
          className={`inline-flex items-center gap-2 rounded-[28px] px-4 py-2 text-sm font-bold text-white transition ${
            pathname === "/contact"
              ? "bg-[#1577FF] hover:bg-[#4794FF]"
              : "bg-[#5A5A5A] hover:bg-[#6e6e6e]"
          }`}
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 6.5h16v11H4V6.5Z" stroke="currentColor" strokeWidth="1.8" />
            <path d="M4 7.5 12 13l8-5.5" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          Help
        </Link>
      </div>
    </div>
  );
}
