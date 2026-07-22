import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

import BackToTop from "@/components/ui/back-to-top";
import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aliabyar.ir"),

  title: "Ali Abyar | Data Analyst & Data Scientist",

  description:
    "Portfolio of Ali Abyar showcasing projects in Data Analytics, Machine Learning, Business Intelligence, and International Trade.",

  keywords: [
    "Ali Abyar",
    "Data Analyst",
    "Data Scientist",
    "Machine Learning",
    "Python",
    "Data Analytics",
    "Business Intelligence",
    "International Trade",
    "Data Science",
    "Portfolio",
  ],

  authors: [
    {
      name: "Ali Abyar",
      url: "https://aliabyar.ir",
    },
  ],

  creator: "Ali Abyar",

  publisher: "Ali Abyar",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://aliabyar.ir",
  },

  openGraph: {
    title: "Ali Abyar | Data Analyst & Data Scientist",

    description:
      "Portfolio showcasing Data Analytics, Machine Learning, Business Intelligence, and International Trade projects.",

    url: "https://aliabyar.ir",

    siteName: "Ali Abyar Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Abyar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ali Abyar | Data Analyst & Data Scientist",

    description:
      "Portfolio showcasing Data Analytics, Machine Learning, Business Intelligence, and International Trade projects.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className="
          min-h-screen
          bg-background
          text-foreground
          antialiased
          font-sans
        "
      >
        <ThemeProvider>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}