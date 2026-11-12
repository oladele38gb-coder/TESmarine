import type { Metadata } from "next";
import "@fontsource/saira/300.css";
import "@fontsource/saira/400.css";
import "@fontsource/saira/500.css";
import "@fontsource/questrial/400.css";
import "@fontsource/aleo/700.css";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { company } from "@/content/site";

const description =
  "Vessel charter, diving and subsea inspection, offshore installation and rope access for Nigeria's offshore energy sector. ISO 9001:2015 certified, NUPRC and NMDPRA permitted, IRATA member.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Offshore marine services in Nigeria`,
    template: `%s | ${company.name}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: company.name,
    url: "/",
    description,
    // Swap for a 1200×630 branded image once one is designed.
    images: [{ url: "/images/hero-tes-crystal.jpg", alt: "TES Crystal at sea" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-50 bg-ink px-4 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
