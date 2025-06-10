// filepath: app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeScript from "@/components/ThemeScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "HostelMate - Find Your Perfect Roommate",
  description: "A roommate-matching platform for college hostel students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col bg-base-100 text-base-content transition-colors">
        <ThemeScript />
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-2">
          {children}
        </main>
      </body>
    </html>
  );
}
