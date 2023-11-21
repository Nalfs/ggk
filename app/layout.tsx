import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { exo2, orbitron } from "./fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import CalendarComponent from "@/components/Calendar/Calendar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
  openGraph: {
    title: "GGK",
    description: "GGK Web page & evcerything GGK.",
    url: "https://ggk-nu.vercel.app/",
    siteName: "GGK",
    images: [
      {
        url: "https://ibb.co/Fwy81Sv",
        width: 800,
        height: 600,
      },
      {
        url: "https://ibb.co/Fwy81Sv",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_SE",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      {/* <Head>
        <title>GGK</title>
        <meta name="GGK" content="Everything GGK" />
        <meta property="og:title" content="GGK Web page" />
        <meta property="og:description" content="GGK Web page" />
        <meta
          data-n-head="ssr"
          data-hid="og:image:type"
          property="og:image:type"
          content="image/png"
        />
        <meta
          property="og:image"
          content="https://gcdnb.pbrd.co/images/W5tUPtAtbxaO.png?o=1"
        />
        <meta property="og:image:alt" content="GGK Web page" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="<generated>" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body
        className={
          (cn(
            "min-h-screen bg-background font-sans antialiased flex flex-col px-4 py-2"
          ),
          exo2.variable)
        }
      >
        <header> {/* <NavBar /> */}</header>
        <main className="flex flex-row justify-center  mx-auto py-3 shadow-lg">
          {/* <div className="bg-white p-6 shadow-lg">{children}</div>
          <div className="bg-white shadow-lg"> */}
          <div className=" shadow-lg">{children}</div>
          <div className=" shadow-lg">
            <CalendarComponent />
          </div>
        </main>
        {/* <footer className="border-t py-3 text-center text-slate-500 text-xs mb-80">
          Game Data & Images courtesy of{" "}
          <a
            href="https://www.warcraftlogs.com/"
            target="blank"
            className="text-orange-800 hover:underline"
          >
            WCL
          </a>
          <p>Nadim Al-Sharif</p>
        </footer> */}
      </body>
    </html>
  );
}
