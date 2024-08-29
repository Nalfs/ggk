import { getWarcraftLogsData } from "@/lib/bosskilldata";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const difficultyMap: { [key: number]: string } = {
  1: "M+",
  2: "LFR",
  3: "Normal",
  4: "Heroic",
  5: "Mythic",
};

export default async function BossDetailsPage({
  params: { slug, bossId },
}: {
  params: { slug: string; bossId: string };
}) {
  const data = await getWarcraftLogsData(slug, bossId);
  if (!data) {
    return <p>Error fetching data</p>;
  }
  const { raidComposition, rankings, fights } = data;
  const bossName = fights?.[0]?.name;
  const difficultyNumber = rankings?.data?.[0]?.difficulty;
  const difficulty = difficultyMap[difficultyNumber];
  const roles = rankings?.data?.[0]?.roles;

  const getTableRows = (characters: any[]) => {
    return characters.map((character) => (
      <TableRow key={character.id}>
        <TableCell>{character.class}</TableCell>
        <TableCell>{character.name}</TableCell>
        <TableCell>{character.amount.toFixed(2)}</TableCell>
        <TableCell>{character.rankPercent}%</TableCell>
        <TableCell>{character.bracketPercent}%</TableCell>
      </TableRow>
    ));
  };

  // Combine DPS and Tank characters into one array for the DPS tab
  const dpsCharacters = [
    ...(roles?.tanks?.characters || []),
    ...(roles?.dps?.characters || []),
  ];

  // Use only Healers for the HPS tab
  const hpsCharacters = [...(roles?.healers?.characters || [])];

  /* console.log("########## START RANKS", rankings?.data?.[0]); */

  return (
    <div className="container flex py-10 px-4 justify-center">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold">
          Boss Details: {bossName} {difficulty ? `(${difficulty})` : ""}
        </h1>
        <p>
          <strong>Slug:</strong> {slug}
        </p>
        <p>
          <strong>Boss ID:</strong> {bossId}
        </p>
        <p>
          <strong>Average ilevel:</strong>{" "}
          {fights?.[0]?.averageItemLevel?.toFixed(2)}
        </p>
        <p>
          <strong>Size:</strong> {fights?.[0]?.size}
        </p>
        {/* Tabs Section */}
        <Tabs>
          <TabsList>
            <TabsTrigger value="overall">Overall</TabsTrigger>
            <TabsTrigger value="dps">DPS</TabsTrigger>
            <TabsTrigger value="hps">HPS</TabsTrigger>
          </TabsList>

          <TabsContent value="overall">
            <p>Overall data will be here.</p>
          </TabsContent>

          <TabsContent value="dps">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Class</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Parse %</TableCell>
                  <TableCell>Parse ilvl %</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>{getTableRows(dpsCharacters)}</TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="hps">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Class</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Parse %</TableCell>
                  <TableCell>Parse ilvl %</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>{getTableRows(hpsCharacters)}</TableBody>
            </Table>
          </TabsContent>
        </Tabs>

        {/* Raid Composition Section */}
        {/*    <div>
          <h2>Raid Composition</h2>
          {raidComposition &&
            raidComposition.map((actor: any) => (
              <p key={actor.id}>
                {actor.name} - {actor.type}/{actor.subType}
              </p>
            ))}
        </div> */}
      </div>
    </div>
  );
}
