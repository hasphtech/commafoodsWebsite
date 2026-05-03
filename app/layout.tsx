import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comma Foods — Quality You Can Trust",
  description:
    "Comma Foods brings you farm-fresh basmati rice, pure spices, wholesome atta, natural jaggery, snacks, and beverages. Quality you can trust, straight to your kitchen.",
  keywords:
    "basmati rice, atta, spices, masala, jaggery, snacks, beverages, Indian food, comma foods",
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
