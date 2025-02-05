import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import ReduxProvider from "./_providers/store/ui/ReduxProvider";
import { Header } from "@/widget/header";
import { Footer } from "@/widget/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="
          grid 
          grid-rows-[min_content_1fr_min_content] 
          items-center 
          justify-items-center
        ">
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
