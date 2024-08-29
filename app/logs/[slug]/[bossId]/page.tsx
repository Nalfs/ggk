import { getWarcraftLogsData } from "@/lib/bosskilldata";
import React from "react";

export default async function BossDetailsPage({
  params: { slug, bossId },
}: {
  params: { slug: string; bossId: string };
}) {
  const data = await getWarcraftLogsData(slug, bossId);

  if (!data) {
    return <p>Error fetching data</p>;
  }

  const { raidComposition } = data;

  return (
    <div className="px-2">
      <h1 className="text-2xl font-bold">Boss Details</h1>
      <p>
        <strong>Slug:</strong> {slug}
      </p>
      <p>
        <strong>Boss ID:</strong> {bossId}
      </p>

      {/* Raid Composition Section */}
      <div>
        <h2>Raid Composition</h2>
        {raidComposition &&
          raidComposition.map((actor: any) => (
            <p key={actor.id}>
              {actor.name} - {actor.type}/{actor.subType}
            </p>
          ))}
      </div>

      {/* Damage Done Section */}
      {/*  <div>
        <h2>Damage Done</h2>
        {dpsData.map((entry: any, index: number) => (
          <div key={index}>
            <p>
              {entry.name}: {entry.dps} DPS, {entry.rankPercent}% Parse, iLvl{" "}
              {entry.itemLevel}
            </p>
          </div>
        ))}
      </div> */}

      {/* Healing Done Section */}
      {/*  <div>
        <h2>Healing Done</h2>
        {hpsData.map((entry: any, index: number) => (
          <div key={index}>
            <p>
              {entry.name}: {entry.hps} HPS, {entry.rankPercent}% Parse, iLvl{" "}
              {entry.itemLevel}
            </p>
          </div>
        ))}
      </div>*/}
    </div>
  );
}
