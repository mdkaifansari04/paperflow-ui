import type { Metadata } from "next";
import {
  Splash,
  Inter,
  Italiana,
  Comic_Neue,
  Istok_Web,
  Major_Mono_Display,
  Saira_Extra_Condensed,
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paperflow UI",
  description:
    "A copy-paste component library built on the Paper design system — warm, editorial, and made with intention.",
  keywords: [
    "component library",
    "paper design",
    "Next.js",
    "React",
    "UI kit",
    "Tailwind",
  ],
  authors: [{ name: "Kaif Ansari" }],
  openGraph: {
    title: "Paperflow UI",
    description: "Copy-paste components that feel made, not generated.",
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FONT DECLARATIONS
// Each font has a CSS variable so you can reference it anywhere:
//   font-family: var(--font-splash)
//   className="font-italiana"  ← via tailwind.config.ts
// ─────────────────────────────────────────────────────────────────────────────

/** Hero display — used ONCE per page. The loud one. */
const splash = Splash({
  variable: "--font-splash",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/** Small UI text, labels, metadata, nav. The quiet professional. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

/** Section headings — H2s, always underlined. Editorial authority. */
const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/** Humor, annotations, sticky notes, arrow messages. One per section max. */
const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/** Body copy workhorse — paragraphs, descriptions, card content. */
const istokWeb = Istok_Web({
  variable: "--font-istok-web",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/** Category labels, badges, stamps — UPPERCASE only. */
const majorMonoDisplay = Major_Mono_Display({
  variable: "--font-major-mono-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/** Condensed callouts, footer CTAs, wide banners. Never at body size. */
const sairaExtraCondensed = Saira_Extra_Condensed({
  variable: "--font-saira-extra-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/** Modern contrast heading — contemporary counterpart to Italiana. */
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// ─────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          splash.variable,
          inter.variable,
          italiana.variable,
          comicNeue.variable,
          istokWeb.variable,
          majorMonoDisplay.variable,
          sairaExtraCondensed.variable,
          bricolageGrotesque.variable,
          "antialiased",
          "font-istok-web", // default body font
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
