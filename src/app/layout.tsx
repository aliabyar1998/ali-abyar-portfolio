import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackToTop from "@/components/ui/back-to-top";
import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";



const geistSans = Geist({

  variable: "--font-geist-sans",

  subsets: ["latin"],

});



const geistMono = Geist_Mono({

  variable: "--font-geist-mono",

  subsets: ["latin"],

});





export const metadata: Metadata = {

  title: "Ali Abyar | Data Analyst & Data Scientist",


  description:
    "Ali Abyar is a Data Analyst, Data Scientist, and International Trade Specialist focused on data analytics, machine learning, business intelligence, and data-driven decisions.",


  keywords: [

    "Ali Abyar",

    "Data Analyst",

    "Data Scientist",

    "Machine Learning",

    "Python",

    "Data Analysis",

    "Big Data",

    "Import Export",

    "International Trade",

    "Business Intelligence",

  ],


  authors: [

    {

      name: "Ali Abyar",

    },

  ],


  creator: "Ali Abyar",


  openGraph: {

    title: "Ali Abyar | Data Analyst & Data Scientist",


    description:
      "Portfolio of Ali Abyar showcasing data science projects, analytics solutions, machine learning projects, and international trade expertise.",


    type: "website",

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

      className={`${geistSans.variable} ${geistMono.variable}`}

    >


      <body

        className="
          min-h-screen
          bg-background
          text-foreground
          antialiased
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