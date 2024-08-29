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
    data: any[]; // Define a more specific type based on the actual structure of rankings if available
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

  export interface Response {
    reportData: ReportData;
  }

  export interface Result {
    raidComposition: Actor[];
    rankings: Rankings;
  }
}
