import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-white p-0 md:p-4">
      <ul className="flex justify-between items-center h-20 px-40">
        <li className="px-2 md:px-0">
          <Link
            href="/"
            className="font-orbitron text-orange-800 hover:underline font-bold"
          >
            GGK Gamer
          </Link>
        </li>
        <li>
          <Link
            href="/logs"
            className="text-orange-800 hover:underline font-bold"
          >
            Logs
          </Link>
        </li>
        <li>
          <Link
            href="/members"
            className="text-orange-800 hover:underline font-bold"
          >
            Members
          </Link>
        </li>
        <li>
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
