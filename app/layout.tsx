import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnnouncementBar } from "@/components/announcement-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/schema";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "The Malawian Fish Room | Premium African Cichlids",
    template: "%s | The Malawian Fish Room",
  },
  description:
    "Premium African cichlids and Malawi fish available in Canada. Premium African cichlids raised in Ontario. Browse peacocks and haps from a trusted breeder.",
  openGraph: {
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    organizationSchema(),
    localBusinessSchema(),
    websiteSchema(),
  ];

  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only rounded-full bg-[#1577FF] px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200]"
        >
          Skip to content
        </a>

        <AnnouncementBar />

        <SiteHeader />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <SiteFooter />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
