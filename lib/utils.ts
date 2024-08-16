import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import DeathKnightIcon from "@/public/images/class_64/deathknight.png";
import DemonHunterIcon from "@/public/images/class_64/demonhunter.png";
import DruidIcon from "@/public/images/class_64/druid.png";
import EvokerIcon from "@/public/images/class_64/evoker.png";
import HunterIcon from "@/public/images/class_64/hunter.png";
import MageIcon from "@/public/images/class_64/mage.png";
import MonkIcon from "@/public/images/class_64/monk.png";
import PaladinIcon from "@/public/images/class_64/paladin.png";
import PriestIcon from "@/public/images/class_64/priest.png";
import RogueIcon from "@/public/images/class_64/rogue.png";
import ShamanIcon from "@/public/images/class_64/shaman.png";
import WarlockIcon from "@/public/images/class_64/warlock.png";
import WarriorIcon from "@/public/images/class_64/warrior.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Ensure minutes are displayed as two digits
  const formattedMinutes = (minutes < 10 ? "0" : "") + minutes;

  return `${hours}:${formattedMinutes}`;
};

type WowClass = {
  name: string;
  color: string;
  raidBuff: string | string[];
  icon: string;
};
type WowClasses = {
  deathKnight: WowClass;
  demonHunter: WowClass;
  druid: WowClass;
  evoker: WowClass;
  hunter: WowClass;
  mage: WowClass;
  monk: WowClass;
  paladin: WowClass;
  priest: WowClass;
  rogue: WowClass;
  shaman: WowClass;
  warlock: WowClass;
  warrior: WowClass;
};

export const wowClasses: WowClasses = {
  deathKnight: {
    name: "Death Knight",
    color: "#C41E3A",
    raidBuff: "",
    icon: DeathKnightIcon.src,
  },
  demonHunter: {
    name: "Demon Hunter",
    color: "#A330C9",
    raidBuff: ["Chaos Brand"],
    icon: DemonHunterIcon.src,
  },
  druid: {
    name: "Druid",
    color: "#FF7C0A",
    raidBuff: ["Mark of the Wild"],
    icon: DruidIcon.src,
  },
  evoker: {
    name: "Evoker",
    color: "#33937F",
    raidBuff: ["Dragon Stuff"],
    icon: EvokerIcon.src,
  },
  hunter: {
    name: "Hunter",
    color: "#AAD372",
    raidBuff: ["Hunter's Mark"],
    icon: HunterIcon.src,
  },
  mage: {
    name: "Mage",
    color: "#3FC7EB",
    raidBuff: ["Arcane Intellect"],
    icon: MageIcon.src,
  },
  monk: {
    name: "Monk",
    color: "#00FF98",
    raidBuff: ["Mystic Touch"],
    icon: MonkIcon.src,
  },
  paladin: {
    name: "Paladin",
    color: "#F48CBA",
    raidBuff: ["Devotion Aura"],
    icon: PaladinIcon.src,
  },
  priest: {
    name: "Priest",
    color: "#FFFFFF",
    raidBuff: ["Power Word: Fortitude"],
    icon: PriestIcon.src,
  },
  rogue: {
    name: "Rogue",
    color: "#FFF468",
    raidBuff: ["Atrophic Poison"],
    icon: RogueIcon.src,
  },
  shaman: {
    name: "Shaman",
    color: "#0070DD",
    raidBuff: ["Skyfury"],
    icon: ShamanIcon.src,
  },
  warlock: {
    name: "Warlock",
    color: "#8788EE",
    raidBuff: "",
    icon: WarlockIcon.src,
  },
  warrior: {
    name: "Warrior",
    color: "#C69B6D",
    raidBuff: ["Battle Shout", "Commanding Shout"],
    icon: WarriorIcon.src,
  },
};
