import { formatTime } from "./utils";

export async function getMembers(): Promise<any> {
  const response = await fetchMembers();
  const data = await response.json();

  return data;
}

async function fetchMembers() {
  const url =
    "https://raider.io/api/v1/guilds/profile?region=eu&realm=tarren-mill&name=Gamla%20gubbar%20kan&fields=members";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return response;
}

export async function getGuildLog(param: string) {
  const apiKey = process.env.CLIENT_KEY;
  //console.log("[param]", param);
  const url = `https://www.warcraftlogs.com/v1/report/fights/${param}?api_key=${apiKey}`;
  //console.log("[url]", url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`WCL returned ${response.status} for ${url}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching logs:", error);

    return { error: "Failed to fetch data" };
  }
}

export async function getGuildLogs() {
  const apiKey = process.env.CLIENT_KEY;
  const url = `https://www.warcraftlogs.com/v1/reports/guild/Gamla%20gubbar%20kan/tarren-mill/EU?api_key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`WCL returned ${response.status} for ${url}`);
    }

    const data = await response.json();

    if (Array.isArray(data)) {
      const formattedLogs = data.map((log) => ({
        ...log,
        // start: new Date(log.start).toDateString(),
        // end: new Date(log.end).toDateString(),
        start: formatTime(log.start),
        end: formatTime(log.end),
      }));

      return formattedLogs;
    } else {
      throw new Error("Data format is not as expected");
    }
  } catch (error) {
    console.error("Error fetching logs:", error);
    return [];
  }
}

interface BossData {
  boss: number;
  bossPercentage: number;
  difficulty: number;
  end_time: number;
  fightPercentage: number;
  id: number;
  inProgress: boolean;
  kill: boolean;
  lastPhaseAsAbsoluteIndex: number;
  lastPhaseForPercentageDisplay: number;
  maps: number[];
  name: string;
  partial: number;
  size: number;
  start_time: number;
  zoneDifficulty: number;
  zoneID: number;
  zoneName: string;
}

export interface FormattedKill {
  name: string;
  duration: string;
}

export const showKills = (bossData: BossData[]): FormattedKill[] => {
  // Filter for objects where kill is true
  const killObjects = bossData.filter((boss) => boss.kill);

  // Map the filtered objects to a new array with the desired format
  const formattedData: FormattedKill[] = killObjects.map((boss) => {
    const durationInSeconds = (boss.end_time - boss.start_time) / 1000;
    const durationFormatted = formatDuration(durationInSeconds);

    return {
      name: boss.name,
      duration: durationFormatted,
    };
  });

  return formattedData;
};

// Function to format duration in HH:mm:ss
const formatDuration = (durationInSeconds: number): string => {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
};
