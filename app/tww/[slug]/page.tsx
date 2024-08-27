import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

type ContentData = {
  title: string;
  description: string;
  details: string[];
  link: string;
};

const contentData: Record<
  "early-access" | "war-within-global-launch",
  ContentData
> = {
  "early-access": {
    title: "The War Within Early Access begins",
    description: "Normal Dungeons open",
    details: [
      "Heroic Dungeons",
      "Honor Vendorlist (and currency conversion of Dragonflight Honor/Conquest)",
    ],
    link: "",
  },
  "war-within-global-launch": {
    title: "The War Within Goes Live Globally",
    description:
      "Heroic Dungeons and Dragonflight Season 4 PvE rewards are retired.",
    details: [
      "Heroic Dungeons",
      "Honor Vendorlist (and currency conversion of Dragonflight Honor/Conquest)",
      "Profession Sparks",
      "Weekly PvP Quest",
      "Profession Weekly Knowledge gains",
      "Zone Weekly wrapper quests, Delves Weekly wrapper quest, Worldsoul Memories Weekly wrapper quest",
      "Awakening the Machine scenario",
      "Worldsoul: Spreading the Light",
      "Notoriety with Severed Threads leaders",
    ],
    link: "https://www.wowhead.com/news/blizzard-announces-what-is-coming-with-first-weekly-reset-of-the-war-within-346172",
  },
  // Add more content data based on slugs if necessary
};

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const content = contentData[slug as keyof typeof contentData];
  console.log("slug", slug);

  // Fallback for unknown slug
  if (!content) {
    return <p>Content not found</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="border-b pb-4">
          <CardTitle className="text-2xl">{content.title}</CardTitle>
          <CardDescription>{content.description}</CardDescription>
        </CardHeader>
        <CardContent className="leading-relaxed">
          <ul className="mt-2 mb-4 list-disc list-inside space-y-2">
            {content.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>
            <strong>
              <Link href={content.link}>Click here for original post</Link>
            </strong>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
