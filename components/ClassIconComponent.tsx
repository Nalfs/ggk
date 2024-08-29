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

  const classKey = classMap[className.toLowerCase()];

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
