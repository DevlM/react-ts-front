import type { Metadata } from "next";
import { Outfit, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import { SidebarLeft, SidebarRight } from "@/components/sidebar";
import { SidebarProvider } from "@/hooks/use-sidebar";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppProvider } from "@/hooks/use-app";

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
        <AppProvider>
        <SidebarProvider >
          <Navbar />
          <SidebarLeft />
          <SidebarRight />
          {children}
          <Footer />
        </SidebarProvider>
        <SpeedInsights />
        </AppProvider>
      </body>
    </html>
  );
}
