import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/" className="text-orange-800 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/reviews" className="text-orange-800 hover:underline">
            reviews
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-orange-800 hover:underline">
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
}
