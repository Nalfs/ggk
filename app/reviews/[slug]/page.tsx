import React from "react";
import type { Metadata } from "next";
import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";
interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: ReviewPageParams;
}
export async function generateStaticParams(): Promise<ReviewPageParams[]> {
  const slugs = await getSlugs();
  console.log("[ReviewPage] generateStaticParams:", slugs);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params: { slug },
}: ReviewPageProps): Promise<Metadata> {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  console.log("[ReviewPage]", slug);
  const { title, date, image, body: html } = await getReview(slug);
  return (
    <>
      <Heading>{title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{date}</p>
        <ShareLinkButton />
      </div>
      <img
        src={image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
