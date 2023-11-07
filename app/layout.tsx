import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { exo2, orbitron } from "./fonts";
import "./globals.css";
import { cn } from "@/lib/utils";

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
        <main className="grow py-3">
          <div className="w-4/5 mx-auto bg-white rounded">{children}</div>
        </main>
        <footer className="border-t py-3 text-center text-slate-500 text-xs mb-80">
          Game Data & Images courtesy of{" "}
          <a
            href="https://rawg.io/"
            target="blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
          <p>Nadim Al-Sharif</p>
        </footer>
      </body>
    </html>
  );
}
