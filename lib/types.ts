namespace WarcraftLogs {
  export interface Encounter {
    id: number;
    name: string;
  }

  export interface Server {
    id: number;
    name: string;
    region: string;
  }

  export interface Character {
    id: number;
    name: string;
    server: Server;
    class: string;
    spec: string;
    amount: number;
    bracketData: number;
    bracket: number;
    rank: string;
    best: string;
    totalParses: number;
    bracketPercent: number;
    rankPercent: number;
  }

  export interface RoleGroup {
    name: string;
    characters: Character[];
  }

  export interface Roles {
    tanks: RoleGroup;
    healers: RoleGroup;
    dps: RoleGroup;
  }

  export interface Guild {
    id: number;
    name: string;
    faction: number;
    server: Server;
  }

  export interface SpeedOrExecution {
    rank: string;
    best: string;
    totalParses: number;
    rankPercent: number;
  }

  export interface RankingEntry {
    fightID: number;
    partition: number;
    zone: number;
    encounter: Encounter;
    difficulty: number;
    size: number;
    kill: number;
    duration: number;
    bracketData: number;
    deaths: number;
    damageTakenExcludingTanks: number;
    roles: Roles;
    bracket: number;
    guild: Guild;
    reportsBlacklistForCharacters: any[]; // Assuming this is an array of unknown structure
    speed: SpeedOrExecution;
    execution: SpeedOrExecution;
  }

  export interface Rankings {
    data: RankingEntry[];
  }

  // Other interfaces remain unchanged
  export interface Actor {
    id: number;
    name: string;
    type: string;
    subType: string;
    gameID: number;
  }

  export interface Fight {
    id: number;
    name: string;
    averageItemLevel: number;
    kill: boolean;
    size: number;
    friendlyPlayers: number[];
  }

  export interface Report {
    fights: Fight[];
    masterData: {
      actors: Actor[];
    };
    rankings: Rankings;
  }

  export interface ReportData {
    report: Report;
  }

  export interface Data {
    reportData: ReportData;
  }

  export interface Response {
    data: Data;
  }

  export interface Result {
    raidComposition: Actor[];
    rankings: Rankings;
    fights?: Fight[]; // Optional, if you decide to return it
  }
}
