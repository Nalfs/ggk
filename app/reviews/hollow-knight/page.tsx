import Heading from "@/components/Heading";
import React from "react";

export default function HollowKnightPage() {
  return (
    <>
      <Heading>Hollow Knights Page</Heading>

      <img
        src="/images/hollow-knight.jpg"
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>Reviews for Hollow Knight will be here</p>
    </>
  );
}
