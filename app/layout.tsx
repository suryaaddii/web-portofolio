import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Surya Adi | Fullstack Software Developer",
  description:
    "Portfolio of Surya Adi, Fullstack Software Developer focused on backend development, web applications, IoT, and system integration.",
  keywords: [
    "Surya Adi",
    "Fullstack Developer",
    "Software Developer",
    "Software Engineer",
    "Backend Developer",
    "Node.js",
    "Express.js",
    "Next.js",
    "PostgreSQL",
    "MQTT",
    "IoT",
  ],
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-neutral-50 font-sans text-neutral-950 antialiased">
        {children}
      </body>
    </html>
  );
}
