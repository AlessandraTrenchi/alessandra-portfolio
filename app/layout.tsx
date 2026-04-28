import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Switched to Inter for a more premium, readable feel
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alessandra Trenchi | UX Strategy & AI",
  description: "UX Designer & AI Model Specialist managing digital inclusivity and conversational intent refinement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Stylized AT Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22 font-family=%22serif%22 font-style=%22italic%22 fill=%22%233b82f6%22>AT</text></svg>" />
      </head>
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}