import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";
import Anima from "../components/Anima";
import { Space_Grotesk } from "next/font/google";
import Head from "next/head";



const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: "100"
});
const inte = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BK Portfolio",
  description: "best portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* You can add other meta tags or links here */}
        </Head>
      <body className={inte.className}>
  <Anima>{children}</Anima>
      </body>
    </html>
  );
}
