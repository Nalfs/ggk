"use client";

import { useEffect, useState } from "react";
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { formatTime } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchSingelReportData, FormattedKill, showKills } from "@/lib/members";
import { useRouter } from "next/router";
import Link from "next/link";

interface Difficulty {
  id: number;
  name: string;
}

interface Encounter {
  id: number;
  name: string;
  startTime: number;
  endTime: number;
  bossPercentage: number;
  fightPercentage: number;
  kill: boolean;
  encounterID: number;
  difficulty: number;
}

interface ClientLogPageProps {
  initialLog: {
    title: string;
    startTime: number;
    endTime: number;
    fights?: Encounter[]; // Make fights optional
  };
  slug: string; // The slug is passed here as a prop
}

function getWipeCount(encounterID: number, fights: Encounter[]): number {
  return fights.filter(
    (fight) => fight.encounterID === encounterID && !fight.kill
  ).length;
}

function parseDuration(startTime: number, endTime: number): string {
  const durationMs = endTime - startTime;
  const totalSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${formattedSeconds}`;
}

export default function ClientLogPage({
  initialLog,
  slug,
}: ClientLogPageProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <p>Loading...</p>;
  }

  const fights = initialLog.fights || [];
  const difficultyMap: { [key: number]: string } = {
    1: "M+",
    2: "LFR",
    3: "Normal",
    4: "Heroic",
    5: "Mythic",
  };

  const uniqueEncounters: Encounter[] = Array.from(
    new Map(
      fights
        .filter((fight) => fight.encounterID > 0)
        .map((fight) => [fight.encounterID, fight])
    ).values()
  );

  return (
    <div className="px-2">
      <div className="flex justify-center text-center">
        <div className="flex-col justify-center text-center">
          <Heading>Log: {initialLog.title}</Heading>
          <ShareLinkButton />
          <p>
            <strong>Start:</strong> {formatTime(initialLog.startTime)}
          </p>
          <p>
            <strong>End:</strong> {formatTime(initialLog.endTime)}
          </p>
        </div>
      </div>
      <div className="mt-6 w-1/2 mx-auto">
        <Accordion type="single" collapsible>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Encounter</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {uniqueEncounters.map((encounter: Encounter, index: number) => (
                <TableRow key={index}>
                  <TableCell>
                    <Link
                      href={`/logs/${slug}/${encounter.encounterID}`}
                      className="cursor-pointer"
                    >
                      {encounter.name}{" "}
                      {difficultyMap[encounter.difficulty] || "Unknown"}
                    </Link>
                  </TableCell>
                  <TableCell className="w-48">
                    {" "}
                    <AccordionItem value={`encounter-${index}`}>
                      <AccordionTrigger className="w-full text-left">
                        {" "}
                        View Details
                      </AccordionTrigger>
                      <AccordionContent className="transition-all duration-300 ease-in-out overflow-hidden">
                        {" "}
                        <div className="p-4 bg-gray-800 rounded-lg">
                          {" "}
                          <p>
                            <strong>Boss:</strong> {encounter.name}
                          </p>
                          <p>
                            <strong>Duration:</strong>{" "}
                            {parseDuration(
                              encounter.startTime,
                              encounter.endTime
                            )}{" "}
                            min
                          </p>
                          <p>
                            <strong>Kill:</strong>{" "}
                            {encounter.kill ? "Yes" : "No"}
                          </p>
                          <p>
                            <strong>Wipes:</strong>{" "}
                            {getWipeCount(encounter.encounterID, fights)}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Accordion>
      </div>
    </div>
  );
}
