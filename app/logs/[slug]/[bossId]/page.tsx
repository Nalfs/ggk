import { getWarcraftLogsData } from "@/lib/bosskilldata";
import React from "react";
import ClientBossLogPage from "./ClientBossLogPage";

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
  const difficultyMap: { [key: number]: string } = {
    1: "M+",
    2: "LFR",
    3: "Normal",
    4: "Heroic",
    5: "Mythic",
  };
  const difficulty = difficultyMap[difficultyNumber];
  const roles = rankings?.data?.[0]?.roles;

  // Combine DPS and Tank characters into one array for the DPS tab
  const dpsCharacters = [
    ...(roles?.tanks?.characters || []),
    ...(roles?.dps?.characters || []),
  ];

  // Use only Healers for the HPS tab
  const hpsCharacters = [...(roles?.healers?.characters || [])];

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

        {/* Pass the data to the client-side component */}
        <ClientBossLogPage
          raidComposition={raidComposition}
          dpsCharacters={dpsCharacters}
          hpsCharacters={hpsCharacters}
        />
      </div>
    </div>
  );
}
