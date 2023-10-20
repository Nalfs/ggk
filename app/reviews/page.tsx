import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";

export default function ReviewsPage() {
  console.log("[reviews]");

  console.log();
  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we will list all the reviews</p>

      <nav>
        <ul className="flex flex-col gap-3">
          <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
            <Link href="/reviews/stardew-valley">
              <img
                src="/images/stardew-valley.jpg"
                alt=""
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-semibold font-orbitron py-1 text-center">
                Stardew Valley Page
              </h2>
            </Link>
          </li>
          <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
            <Link href="/reviews/hollow-knight">
              <img
                src="/images/hollow-knight.jpg"
                alt=""
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-semibold font-orbitron py-1 text-center">
                Hollow Knight Page
              </h2>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
