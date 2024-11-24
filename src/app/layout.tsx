import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./components/ui/header";

const FontInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  icons: {
    icon: "logo.svg",
  },
  title: {
    template: "%s DSW Wheel",
    default: "DSW Wheel",
  },
  description:
    "O DSW tem como objetivo desenvolver simuladores de direção de alta qualidade, acessíveis e de baixo custo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${FontInter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
