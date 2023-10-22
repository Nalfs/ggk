import { readFile } from "node:fs/promises";
import Heading from "@/components/Heading";
import React from "react";

export default async function StardewvalleyPage() {
  const text = await readFile("content/reviews/stardew-valley.md", "utf-8");
  return (
    <>
      <Heading>Stardew Valley Page</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>{text}</p>
    </>
  );
}
