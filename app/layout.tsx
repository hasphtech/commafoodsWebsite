import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comma Foods — Quality You Can Trust",
  description:
    "Comma Foods brings you farm-fresh basmati rice, pure spices, wholesome atta, natural jaggery, snacks, and beverages. Quality you can trust, straight to your kitchen.",
  keywords:
    "basmati rice, atta, spices, masala, jaggery, snacks, beverages, Indian food, comma foods",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Comma Foods — Quality You Can Trust",
    description: "Pure ingredients, trusted in every Indian kitchen.",
    siteName: "Comma Foods",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
