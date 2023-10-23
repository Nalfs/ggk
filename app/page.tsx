import type { Metadata } from "next";
import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Indie Gamer",
};

export default async function Home() {
  console.log("[HomePage]");
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
function getLatestReviews() {
  throw new Error("Function not implemented.");
}
