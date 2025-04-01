import type { Metadata } from "next";
import { Outfit, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const outfit = Outfit({
  variable: "--font-outfit"
});

const quicksand = Quicksand({
  variable: "--font-quicksand"
});

export const metadata: Metadata = {
  title: "Nom site",
  description: "Description site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${outfit.variable} ${quicksand.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
