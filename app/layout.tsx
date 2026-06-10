import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Surya Adi | Full Stack Developer",
  description:
    "Portfolio of Surya Adi, Full Stack Developer focused on modern web applications, REST APIs, and scalable systems.",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="min-h-screen bg-neutral-50 font-sans text-neutral-950 antialiased">
        {children}
      </body>
    </html>
  );
}
