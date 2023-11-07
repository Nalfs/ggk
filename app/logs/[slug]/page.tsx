import React from "react";
import type { Metadata } from "next";
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getGuildLog } from "@/lib/members";
import { formatTime } from "@/lib/utils";

interface LogPageParams {
  slug: string;
}

interface LogPageProps {
  params: LogPageParams;
}

export default async function LogPage({ params: { slug } }: LogPageProps) {
  //   console.log("[ReviewPage]", slug);
  const log = await getGuildLog(slug);
  //   const { title, date, image, body: html } = await getReview(slug);
  //   console.log("[LogPage]", slug);
  console.log("[LogPage]", log.end);
  return (
    <>
      <Heading>Log: {slug}</Heading>
      <div className="flex gap-3 items-baseline">
        {/* <p className="italic pb-2">{date}</p> */}
        <ShareLinkButton />
      </div>
      {/* <p>Start{new Date(log.start).toDateString()}</p>
      <p>End{new Date(log.end).toDateString()}</p> */}
      <p>
        <strong>Start:</strong> {formatTime(log.start)}
      </p>
      <p>
        <strong>End:</strong> {formatTime(log.end)}
      </p>
      <p>Members in raid</p>
      {(log.friendlies as Friend[]).map((friend: Friend) => {
        return <p key={friend.id}>{friend.name}</p>;
      })}
      {/* <img
        src={image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="max-w-screen-sm prose prose-slate"
      /> */}
    </>
  );
}
