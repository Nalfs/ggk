import type { Metadata } from "next";
import Heading from "@/components/Heading";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  console.log("[About]");
  return <Heading>About</Heading>;
}
