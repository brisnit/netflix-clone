import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix Homepage Clone (Prototype)",
  description: "Unofficial, frontend-only design prototype of the Netflix homepage. Not affiliated with Netflix.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://assets.nflxext.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://occ-0-470-3996.1.nflxso.net" />
      </head>
      <body>{children}</body>
    </html>
  );
}
