import React from "react";
import Image from "next/image";
import { wowClasses } from "@/lib/utils";

interface ClassIconProps {
  className: string;
}

export const ClassIcon: React.FC<ClassIconProps> = ({ className }) => {
  const classMap: { [key: string]: keyof typeof wowClasses } = {
    deathknight: "deathKnight",
    demonhunter: "demonHunter",
    druid: "druid",
    evoker: "evoker",
    hunter: "hunter",
    mage: "mage",
    monk: "monk",
    paladin: "paladin",
    priest: "priest",
    rogue: "rogue",
    shaman: "shaman",
    warlock: "warlock",
    warrior: "warrior",
  };

  // temp fix untile ProccessData is fixed in ClassSummaryTable
  // Function to remove whitespaces
  const normalizeClassName = (name: string) => name.replace(/\s+/g, "");

  // Normalize and find the classKey
  const normalizedClassName = normalizeClassName(className.toLowerCase());
  const classKey = classMap[normalizedClassName];

  const wowClass = wowClasses[classKey];

  if (!wowClass) {
    return <span>{className}</span>;
  }

  return (
    <div
      style={{ display: "flex", alignItems: "center", color: wowClass.color }}
    >
      {wowClass.name}
      <Image
        src={wowClass.icon}
        alt={wowClass.name}
        width={16}
        height={16}
        style={{ marginLeft: "8px" }}
      />
    </div>
  );
};
