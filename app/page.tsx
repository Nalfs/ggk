import ImageCarousel from "@/components/CarouselComponent";
import Countdown from "@/components/Countdown";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export default async function Home() {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-center">
          <Countdown targetDate={"2024-08-22T15:00:00-07:00"} />
        </div>
        <h1>Åh nej, du måste kommit fel!</h1>
        <ImageCarousel />

        <div className="container space-y-4 my-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Badge className="mr-2 text-white-400">8/22</Badge>
                The War Within Early Access begins
              </CardTitle>
              <CardDescription>Normal Dungeons open</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Badge className="mr-2 text-white-400">8/26</Badge>
                The War Within Goes Live Globally at 3:00 pm PDT
              </CardTitle>
              <CardDescription>
                Heroic Dungeons and Dragonflight Season 4 PvE rewards are
                retired.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Badge className="mr-2 text-white-400">9/10</Badge>
                The War Within Season 1 Begins
              </CardTitle>
              <CardDescription>
                Heroic Raids, Raid Finder Wing 1, Mythic 0 Dungeons, Heroic
                Seasonal dungeons, a new World Boss, and PvP Season 1
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Badge className="mr-2 text-white-400">9/17</Badge>
                Mythic raids and Mythic+ dungeons open
              </CardTitle>
              <CardDescription>
                Raid Finder Wing 2 opens, raid Story Difficulty opens
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Badge className="mr-2 text-white-400">9/24</Badge>
                Raid Finder Wing 3 Opens
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
}
