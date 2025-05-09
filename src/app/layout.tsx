import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./component/Header";
import Footer from "./component/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shivmada | Construction Company",
  description: "Shivmada",
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <a
          href="https://wa.me/919873173297"
          target="_blank"
          rel="noopener noreferrer"
          className="size-12 rounded-full fixed bottom-5 right-5 bg-slate-200 cursor-pointer shadow-2xl flex items-center justify-center hover:bg-slate-100 transition-colors"
        >
          <FaWhatsapp size={28} color="green" />
        </a>
        <Footer />
      </body>
    </html>
  );
}
