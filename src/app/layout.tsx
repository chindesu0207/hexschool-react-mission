import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["500", "100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "2024 React Mission",
  description: "2024 React Mission",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-tw">
      <body
        className={`${notoSansTC.variable} ${notoSansTC.className} min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
