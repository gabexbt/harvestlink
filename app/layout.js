import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "HarvestLink — AI Farmer Assistant",
  description: "A mobile-first web app for farmers to check prices, find buyers, and get AI advice.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="bg-[#f0f0f0] min-h-screen">
        <div className="phone-container">
          {children}
        </div>
      </body>
    </html>
  );
}
