import type { Metadata } from "next";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  // const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we will list all the reviews</p>

      <nav>
        {/* <ul className="flex flex-row flex-wrap gap-3">
          {reviews.map((review) => (
            <>
              <li
                key={review.slug}
                className="bg-white border rounded shadow w-80 hover:shadow-xl"
              >
                <Link href={`/reviews/${review.slug}`}>
                  <img
                    src={review.image}
                    alt=""
                    width="320"
                    height="180"
                    className="rounded-t"
                  />
                  <h2 className="font-semibold font-orbitron py-1 text-center">
                    {review.title}
                  </h2>
                </Link>
              </li>
            </>
          ))}
        </ul> */}
      </nav>
    </>
  );
}
