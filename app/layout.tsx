import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spikes Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className}`}>
        <div className="hidden xl:block">
          <div className="my-[30px] flex flex-row w-full">{children}</div>
          <Footer />
        </div>
        <div className=" xl:hidden min-h-screen flex flex-col justify-center text-center ">
          <span className="text-foreground md:text-md mb-24 font-semibold px-6  w-[500px] mx-auto">
            Pour une expérience optimale, veuillez ouvrir cette session sur votre ordinateur.
          </span>
        </div>
      </body>

    </html>
  );
}
