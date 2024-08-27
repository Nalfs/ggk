import ImageCarousel from "@/components/CarouselComponent";
import Countdown from "@/components/Countdown";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default async function Home() {
  const events = [
    {
      date: "8/22",
      title: "The War Within Early Access begins",
      description: "Normal Dungeons open",
      slug: null, // No link needed
    },
    {
      date: "8/26",
      title: "The War Within Goes Live Globally at 3:00 pm PDT",
      description:
        "Heroic Dungeons and Dragonflight Season 4 PvE rewards are retired.",
      slug: "war-within-global-launch",
    },
    {
      date: "9/10",
      title: "The War Within Season 1 Begins",
      description:
        "Heroic Raids, Raid Finder Wing 1, Mythic 0 Dungeons, Heroic Seasonal dungeons, a new World Boss, and PvP Season 1",
      slug: "war-within-season-1",
    },
    {
      date: "9/17",
      title: "Mythic raids and Mythic+ dungeons open",
      description: "Raid Finder Wing 2 opens, raid Story Difficulty opens",
      slug: "mythic-raids-dungeons-open",
    },
    {
      date: "9/24",
      title: "Raid Finder Wing 3 Opens",
      description: null, // No description needed
      slug: "raid-finder-wing-3",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center justify-center mb-8">
        <Countdown targetDate={"2024-08-22T15:00:00-07:00"} />
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">Upcoming Events</h1>

      <ImageCarousel />

      <div className="space-y-4 my-8">
        {events.map((event) =>
          event.slug ? (
            <Link key={event.slug} href={`/tww/${event.slug}`}>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200 mb-4">
                <CardHeader>
                  <CardTitle>
                    <Badge className="mr-2 relative -top-1 text-white-400">
                      {event.date}
                    </Badge>
                    {event.title}
                  </CardTitle>
                  {event.description && (
                    <CardDescription>{event.description}</CardDescription>
                  )}
                </CardHeader>
              </Card>
            </Link>
          ) : (
            <Card key={event.date} className="mb-4">
              <CardHeader>
                <CardTitle>
                  <Badge className="mr-2 relative -top-1 text-white-400">
                    {event.date}
                  </Badge>
                  {event.title}
                </CardTitle>
                {event.description && (
                  <CardDescription>{event.description}</CardDescription>
                )}
              </CardHeader>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
