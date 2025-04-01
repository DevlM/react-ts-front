import type { Metadata } from "next";
import { Outfit, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"]
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
        <Footer />
      </body>
    </html>
  );
}
