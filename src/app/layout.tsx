import type { Metadata } from "next";
import { Bebas_Neue, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DougDesigns — Custom Web Development for Small Businesses",
  description:
    "Professional website development for barber shops, law firms, restaurants, construction companies, and more. Custom designs that convert visitors into clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
