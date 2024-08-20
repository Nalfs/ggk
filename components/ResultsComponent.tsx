"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import DPSIcon from "@/public/images/role/dps.jpg";
import HealerIcon from "@/public/images/role/healer2.jpg";
import TankIcon from "@/public/images/role/tank.jpg";
import ProgressComponent from "./ProgressComponent";

const ResultsComponent = ({ data }: any) => {
  const roleIcons: { [key: string]: string } = {
    DPS: DPSIcon.src,
    Healer: HealerIcon.src,
    Tank: TankIcon.src,
  };

  const roleCounts = Array.isArray(data)
    ? data.reduce((acc, row) => {
        const role = row["Vilken roll vill du spela nästa tier/säsong?"];
        if (role) {
          acc[role] = (acc[role] || 0) + 1;
        }
        return acc;
      }, {})
    : {};

  const totalResponses = data.length;
  const rolePercentages = Object.keys(roleCounts).map((role) => ({
    role,
    count: roleCounts[role],
    percentage: ((roleCounts[role] / totalResponses) * 100).toFixed(2),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Responses</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{totalResponses}</p>
        </CardContent>
      </Card>

      {rolePercentages.map(({ role, count, percentage }) => (
        <Card key={role}>
          <CardHeader className="flex-row justify-between">
            <CardTitle>{role}</CardTitle>
            {roleIcons[role] && (
              <Image src={roleIcons[role]} alt={role} width={32} height={32} />
            )}
          </CardHeader>
          <CardContent>
            <p>
              {count} ({percentage}%)
            </p>
            <ProgressComponent value={parseFloat(percentage)} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResultsComponent;
