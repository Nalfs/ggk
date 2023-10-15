import Link from "next/link";
import React from "react";

export default function ReviewsPage() {
  console.log("[reviews]");
  return (
    <>
      <h1>Reviews</h1>
      <p>Here we will list all the reviews</p>

      <nav>
        <ul>
          <li>
            <Link href="/reviews/stardew-valley">Stardew Valley Page</Link>
          </li>
          <li>
            <Link href="/reviews/hollow-knights">Hollow Knight Page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
