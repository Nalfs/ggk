import React from "react";
import type { Metadata } from "next";
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getGuildLog, showKills, FormattedKill } from "@/lib/members";
import { formatTime } from "@/lib/utils";
import { CharacterList } from "@/components/CharacterList/CharacterList";

interface LogPageParams {
  slug: string;
}

interface LogPageProps {
  params: LogPageParams;
}

export default async function LogPage({ params: { slug } }: LogPageProps) {
  const log = await getGuildLog(slug);
  const killsToShow: FormattedKill[] = showKills(log.fights);

  return (
    <>
      <div className="flex justify-center text-center">
        <div className="flex-col justify-center text-center">
          <Heading>Log: {slug}</Heading>
          <ShareLinkButton />
          <p>
            <strong>Start:</strong> {formatTime(log.start)}
          </p>
          <p>
            <strong>End:</strong> {formatTime(log.end)}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <Heading>Fights</Heading>
          {killsToShow.map((kill, index) => (
            <div key={index}>
              <p>
                Name: <strong>{kill.name}</strong>
              </p>
              <p>Duration: {kill.duration}</p>
            </div>
          ))}
        </div>
        <div>
          <Heading>Members in raid</Heading>

          <CharacterList characters={log.friendlies as Friend[]} />
        </div>
      </div>
    </>
  );
}
