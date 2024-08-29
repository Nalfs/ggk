namespace WarcraftLogs {
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

  export interface Rankings {
    data: any[]; // You can define a more specific type here if you know the structure of rankings data
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
    fights?: Fight[];
  }
}
