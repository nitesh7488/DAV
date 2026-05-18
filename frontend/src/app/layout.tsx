import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "D A V Moti Public School Mundro Bagoder (DAVMPS)",
  description: "A premier institution dedicated to academic excellence and holistic development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen font-sans bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
