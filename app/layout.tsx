import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jost, Indie_Flower } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const indieFlower = Indie_Flower({
  // variable: "--font-indie-flower",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "KoroKoro",
  icons: {
    icon: "./stroke.png",
  },
  description:
    "KoroKoro is an automated pipeline for converting 2D videos into detailed 3D models using advanced techniques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>{children}</body>
    </html>
  );
}
