import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Funky Fingerboards | Custom Handcrafted Fingerboards",
    template: "%s | Funky Fingerboards"
  },
  description: "Premium handcrafted fingerboards made in Canada. Custom 5-ply maple construction for the perfect feel.",
  metadataBase: new URL('https://funkyfingerboards.com'),
  openGraph: {
    title: 'Funky Fingerboards',
    description: 'Premium handcrafted fingerboards made in Canada',
    url: 'https://funkyfingerboards.com',
    siteName: 'Funky Fingerboards',
    locale: 'en_CA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
