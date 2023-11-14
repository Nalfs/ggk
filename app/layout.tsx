import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { exo2, orbitron } from "./fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import CalendarComponent from "@/components/Calendar/Calendar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body
        className={
          (cn(
            "min-h-screen bg-background font-sans antialiased flex flex-col px-4 py-2"
          ),
          exo2.variable)
        }
      >
        <header>
          {" "}
          <NavBar />
        </header>
        <main className="flex flex-row justify-center  mx-auto py-3 shadow-lg">
          <div className="bg-white p-6 shadow-lg">{children}</div>
          <div className="bg-white shadow-lg">
            <CalendarComponent />
          </div>
        </main>
        <footer className="border-t py-3 text-center text-slate-500 text-xs mb-80">
          Game Data & Images courtesy of{" "}
          <a
            href="https://www.warcraftlogs.com/"
            target="blank"
            className="text-orange-800 hover:underline"
          >
            WCL
          </a>
          <p>Nadim Al-Sharif</p>
        </footer>
      </body>
    </html>
  );
}
