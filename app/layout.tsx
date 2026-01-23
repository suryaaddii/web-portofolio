import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surya Adi | Portfolio",
  description: "Fullstack Developer Portfolio - Surya Adi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-neutral-50 text-neutral-950 antialiased">
        {children}
      </body>
    </html>
  );
}
