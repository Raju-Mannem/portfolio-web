import type { Metadata } from "next";
import { Inter, Montserrat } from 'next/font/google';
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Raju Mannem",
  description: "Full Stack Developer for Digital Business",
  icons: {
      icon: '/icon.ico',
      apple: '/men-with-globe.png',
    },
    openGraph: {
      type: "website",
      siteName: "RajuMannem",
      images: [
        {
          url: '/men-with-globe.png',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/profile-avatar-child.gif"],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col px-4 sm:px-8">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
