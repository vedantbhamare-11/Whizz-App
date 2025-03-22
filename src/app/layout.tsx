import { Metadata } from "next";
import { Geist } from "next/font/google";
import ProviderWrapper from "../components/ProviderWrapper"; // Import ProviderWrapper
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whizz",
  description: "Hyper Local AI Delivery Service",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <ProviderWrapper>
          {children}
        </ProviderWrapper>
      </body>
    </html>
  );
}
