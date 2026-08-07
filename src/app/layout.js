import { Radio_Canada, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Radio Canada font from Google Fonts
const radioCanada = Radio_Canada({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Load Geist Mono font for code sections
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jahid - Portfolio",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">

      <body className={`${radioCanada.className} ${geistMono.variable} bg-slate-950 text-white min-h-screen m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}