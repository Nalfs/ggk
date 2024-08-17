import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const page = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8 px-4">
        <ul>
          <li>
            {" "}
            <Link
              href={
                "https://docs.google.com/spreadsheets/d/1xlsweYp1Jz086WRskFAj8dmiXFXIgsxR8wThHxAUYSc/edit?gid=1272551205#gid=1272551205"
              }
            >
              Beta Raid Test DPS Logs
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={
                "https://docs.google.com/spreadsheets/d/1UgawxPKreuGbgiCaAUfCZePbkB6q0wzQY93pgtW-XNU/edit?gid=882519646#gid=882519646"
              }
            >
              Beta Raid Test HPS Logs
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://docs.google.com/spreadsheets/d/14Us4SYeq2fr3sG-iv1ADOORaO5NZqXFhQdt7UJzpfro/edit?gid=0#gid=0"
              }
            >
              Temporary Patchwerk Sims
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://docs.google.com/spreadsheets/d/1Hwx5xHyK0bYl3d2tjjYqd3dyC7wfyV3wDifCaz5rpqY/edit?gid=0#gid=0#"
              }
            >
              Petko M+ - Choose your main
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-8 px-4">
        <Card>
          <CardHeader>
            <CardTitle>The War Within</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              With the start of Early Access on August 22, Normal difficulty
              dungeons will become available.
            </p>

            <h2 className="font-bold mt-4">Dungeons</h2>
            <ul className="list-disc ml-8">
              <li>Ara-Kara, City of Echoes (Levels 70-80)</li>
              <li>Priory of the Sacred Flame (Levels 70-80)</li>
              <li>The Rookery (Levels 70-80)</li>
              <li>The Stonevault (Levels 70-80)</li>
              <li>Cinderbrew Meadery (Level 80)</li>
              <li>City of Threads (Level 80)</li>
              <li>Darkflame Cleft (Level 80)</li>
              <li>The Dawnbreaker (Level 80)</li>
            </ul>

            <p className="mt-4">
              With the launch of the expansion on August 26, Heroic difficulty
              dungeons will be available to play.
            </p>

            <p className="mt-4">
              On September 10, The War Within Season 1 will begin with Heroic
              and Raid Finder Wing 1 of Nerub-ar Palace opening, Mythic 0
              dungeons also become available along with Heroic Seasonal dungeons
              and the new World bosses.
            </p>

            <h2 className="font-bold mt-4">World Bosses</h2>
            <ul className="list-disc ml-8">
              <li>Kordac, the Dormant Protector</li>
              <li>Aggregation of Horrors</li>
              <li>Shurrai, Atrocity of the Undersea</li>
              <li>Orta, the Broken Mountain</li>
            </ul>

            <p className="mt-4">
              On September 17, Mythic raids, Raid Finder Wing 2, Mythic+
              dungeons and raid Story Difficulty will open.
            </p>
            <p className="mt-4">
              On September 24 Raid Finder Wing 3 will open.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dungeon Item Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Pre-Season</TableHead>
                  <TableHead>Season 1</TableHead>
                  <TableHead>Great Vault</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Normal</TableCell>
                  <TableCell>554</TableCell>
                  <TableCell>554</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Heroic</TableCell>
                  <TableCell>Explorer 4 (567)</TableCell>
                  <TableCell>Adventurer 4 (580)</TableCell>
                  <TableCell>Veteran 4 (593)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mythic</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Veteran 4 (593)</TableCell>
                  <TableCell>Champion 3 (603)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>+2</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Champion 1 (597)</TableCell>
                  <TableCell>Champion 4 (606)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>+3</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Champion 1 (597)</TableCell>
                  <TableCell>Hero 1 (610)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>+4</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Champion 2 (600)</TableCell>
                  <TableCell>Hero 1 (610)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>+5</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Champion 3 (603)</TableCell>
                  <TableCell>Hero 2 (613)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>+6</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Champion 4 (606)</TableCell>
                  <TableCell>Hero 2 (613)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>+7</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Hero 1 (610)</TableCell>
                  <TableCell>Hero 3 (616)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>+8</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Hero 1 (610)</TableCell>
                  <TableCell>Hero 4 (619)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>+9</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Hero 2 (613)</TableCell>
                  <TableCell>Hero 4 (619)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>+10</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Hero 2 (613)</TableCell>
                  <TableCell>Myth 1 (623)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
