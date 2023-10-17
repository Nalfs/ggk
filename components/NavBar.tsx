import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            href="/"
            className="font-orbitron bold text-orange-800 hover:underline font-bold"
          >
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            href="/reviews"
            className="text-orange-800 hover:underline font-bold"
          >
            Reviews
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            href="/about"
            className="text-orange-800 hover:underline font-bold"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
