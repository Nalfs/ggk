"use client";

import React, { useState } from "react";
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { formatTime } from "@/lib/utils";
import ClassSummaryTable from "@/components/ClassSummaryComponent";
import BossKillDetails from "@/components/BossKillComponent";
import { FormattedKill, showKills } from "@/lib/members";

interface ClientLogPageProps {
  initialLog: any; // Adjust the type based on what getGuildLog returns
}

export default function ClientLogPage({ initialLog }: ClientLogPageProps) {
  const [selectedKill, setSelectedKill] = useState<FormattedKill | null>(null);
  const killsToShow = showKills(initialLog.fights);

  if (selectedKill) {
    return <BossKillDetails kill={selectedKill} />;
  }

  return (
    <div className="px-2">
      <div className="flex justify-center text-center">
        <div className="flex-col justify-center text-center">
          <Heading>Log: {initialLog.title}</Heading>{" "}
          {/* Adjust based on your data */}
          <ShareLinkButton />
          <p>
            <strong>Start:</strong> {formatTime(initialLog.startTime)}
          </p>
          <p>
            <strong>End:</strong> {formatTime(initialLog.endTime)}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <Heading>Session</Heading>
          {killsToShow.map((kill, index) => (
            <div key={index} onClick={() => setSelectedKill(kill)}>
              <p>
                Boss: <strong>{kill.name}</strong>
              </p>
              {/* <p>Duration: {kill.duration}</p> */}
              <p>Start: {formatTime(initialLog.startTime)}</p>
              <p>End: {formatTime(initialLog.endTime)}</p>
            </div>
          ))}
        </div>
        <div>
          <Heading>Members in Raid</Heading>
          <ClassSummaryTable data={initialLog.friendlies} />
        </div>
      </div>
    </div>
  );
}
