import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// -----------------------------
// 🌐 Metadata
// -----------------------------
export const metadata: Metadata = {
  title: "100PlusJS — 100+ JavaScript Projects to Learn, Build & Master",
  description:
    "🚀 Master JavaScript by building 100+ real-world projects. From beginner to advanced, 100PlusJS helps you learn by doing — build, explore, and level up your JavaScript skills.",
  keywords:
    "100 JavaScript Projects, JavaScript practice, JS projects, front-end development, beginner JavaScript, HTML CSS JS projects, JavaScript tutorials, React projects, Next.js projects, Node.js projects",
  authors: [{ name: "Pradip Chaudhary", url: "https://pradipchaudhary.com.np" }],
  creator: "Pradip Chaudhary",
  publisher: "Pradip Chaudhary",
  metadataBase: new URL("https://100plusjs.vercel.app"),
  alternates: { canonical: "https://100plusjs.vercel.app" },
  openGraph: {
    type: "website",
    url: "https://100plusjs.vercel.app",
    title: "100PlusJS — 100+ JavaScript Projects to Learn, Build & Master",
    description:
      "Master JavaScript with 100+ hands-on projects. Practice DOM, APIs, ES6, and more through interactive real-world examples.",
    siteName: "100PlusJS",
    locale: "en_US",
    images: [
      {
        url: "https://100plusjs.vercel.app/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "100PlusJS - JavaScript Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pradipchaudhary",
    creator: "@pradipchaudhary",
    title: "100PlusJS — 100+ JavaScript Projects to Learn, Build & Master",
    description:
      "Enhance your JavaScript skills with 100+ fun projects. Hands-on, open source, and beginner-friendly.",
    images: ["https://100plusjs.vercel.app/assets/images/twitter-image.jpg"],
  },
};

// -----------------------------
// 🌍 Structured Data
// -----------------------------
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "100PlusJS",
  url: "https://100plusjs.vercel.app",
  description: "A collection of 100+ JavaScript projects for all levels.",
  creator: { "@type": "Person", name: "Pradip Chaudhary" },
  sameAs: ["https://github.com/pradipchaudhary/100plusjs"],
};

// -----------------------------
// 🖥 Root Layout
// -----------------------------
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          type="application/ld+json"
          id="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialias`}>
        {children}
      </body>
    </html>
  );
}
