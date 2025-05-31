import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DLF Privana - Premium Residential Development | Sectors 76 & 77, Gurgaon",
  description: "DLF Privana offers luxury living in Gurgaon with 3 & 4 BHK apartments across 126 acres. Premium residential development in Sectors 76 & 77 with 88% green spaces, world-class amenities, and RERA approved project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
