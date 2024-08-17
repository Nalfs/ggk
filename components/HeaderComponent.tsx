import Image from "next/image";
import Link from "next/link";

import React from "react";

const HeaderComponent = () => {
  return (
    <header>
      <nav className="container mx-auto flex items-center py-6 px-4">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/images/ggk_logo.png"
              alt="GGK Logo"
              width={150}
              height={150}
            />
          </Link>
          {/* <h1 className="text-2xl font-bold">- Home of the mongrels</h1> */}
        </div>
        <ul className="flex flex-1 justify-end gap-4 list-none">
          <li>
            <Link href="/" className="text-white no-underline hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white no-underline hover:underline"
            >
              Om
            </Link>
          </li>
          <li>
            <Link
              href="/logs"
              className="text-white no-underline hover:underline"
            >
              Logs
            </Link>
          </li>
          <li>
            <Link
              href="/tww"
              className="text-white no-underline hover:underline"
            >
              TWW
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
