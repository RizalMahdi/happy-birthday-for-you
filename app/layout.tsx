import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Happy Birthday 💌 — Ada kejutan untukmu",
  description:
    "Sebuah kejutan kecil yang dibuat khusus untuk hari spesialmu. Buka, dengarkan, dan baca pelan-pelan ya.",
  openGraph: {
    title: "Happy Birthday 💌 — Ada kejutan untukmu",
    description:
      "Sebuah kejutan kecil yang dibuat khusus untuk hari spesialmu.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
