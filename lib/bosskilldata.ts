import { inspect } from "util";

export async function getWarcraftLogsData(
  slug: string,
  bossId: string
): Promise<WarcraftLogs.Result | null> {
  console.log("start fetch");
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const tokenUrl = "https://www.warcraftlogs.com/oauth/token";
  const apiUrl = "https://www.warcraftlogs.com/api/v2/client";

  try {
    // Step 1: Fetch access token
    const tokenResponse = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    if (!tokenResponse.ok) {
      throw new Error("Failed to retrieve access token");
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Step 2: Fetch data from the Warcraft Logs v2 API
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
           query GetEncounterDetails($reportCode: String!, $encounterID: Int!) {
            reportData {
              report(code: $reportCode) {
                fights(encounterID: $encounterID) {
                  id
                  name
                  averageItemLevel
                  kill
                  size
                  friendlyPlayers
                }
                masterData {
                  actors {
                    id
                    name
                    type
                    subType
                    gameID
                  }
                }
                rankings: rankings(encounterID: $encounterID)
              }
            }
          }
            `,
        variables: {
          reportCode: slug,
          encounterID: parseInt(bossId),
        },
      }),
    });

    const result: WarcraftLogs.Response = await response.json();

    /*     console.log("#############################");
    console.log(
      inspect(result, {
        depth: 3,
        colors: true,
        maxArrayLength: 10,
      })
    ); */
    // console.log("#############################");
    // console.dir(result.data.reportData.report.rankings, { depth: null });
    // console.log(
    //   inspect(result.data.reportData.report.rankings, {
    //     depth: 3,
    //     colors: true,
    //     maxArrayLength: 10,
    //   })
    // );
    const report = result?.data?.reportData?.report;
    if (
      !report ||
      !Array.isArray(report.fights) ||
      report.fights.length === 0
    ) {
      throw new Error("No fights found in the report");
    }

    const fight = report.fights[0]; // Assuming one fight is returned

    // Process raid composition
    const raidComposition = report.masterData.actors.filter((actor) =>
      fight.friendlyPlayers.includes(actor.id)
    );
    const rankings = report.rankings;
    //console.dir(rankings, { depth: null });
    return {
      raidComposition,
      rankings,
      fights: report.fights,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
