/* export async function getWarcraftLogsData(slug: string, bossId: string) {
  const tokenUrl = "https://www.warcraftlogs.com/oauth/token";
  const apiUrl = "https://www.warcraftlogs.com/api/v2/client";
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  try {
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

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const query = `
      query($reportCode: String!, $fightID: Int!) {
        reportData {
          report(code: $reportCode) {
            fights(fightIDs: [$fightID]) {
              id
              name
              averageItemLevel
              friendlyPlayers
            }
            masterData {
              actors {
                id
                name
                type
                subType
              }
            }
            table: damageDone(fightIDs: [$fightID]) {
              data {
                entries {
                  name
                  total
                  activeTime
                  dps
                  itemLevel
                  abilities {
                    name
                    total
                  }
                }
              }
            }
            healing: healingDone(fightIDs: [$fightID]) {
              data {
                entries {
                  name
                  total
                  activeTime
                  hps
                  itemLevel
                  abilities {
                    name
                    total
                  }
                }
              }
            }
          }
        }
      }
    `;

    console.log("pre reponse");
    console.log(apiUrl);
    console.log(accessToken);
    console.log(query);
    console.log(slug);
    console.log(parseInt(bossId));
    console.log("end logs");
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { reportCode: slug, fightID: parseInt(bossId) },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `Failed to fetch data: ${response.statusText} - ${errorText}`
      );
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("hitting route:: result", result);
    console.dir(result, { depth: null });
    const report = result?.data?.reportData?.report;
    if (!report || !report.fights || report.fights.length === 0) {
      throw new Error("No fights found in the report");
    }
    const { fights, masterData, table, healing } =
      result.data.reportData.report;
    const fight = fights[0]; // Assuming one fight is returned

    const raidComposition = masterData.actors.filter((actor: any) =>
      fight.friendlyPlayers.includes(actor.id)
    );

    const dpsData = table.data.entries;
    const hpsData = healing.data.entries;

    return {
      raidComposition,
      dpsData,
      hpsData,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
 */
export async function getWarcraftLogsData(
  slug: string,
  bossId: string
): Promise<WarcraftLogs.Result | null> {
  console.log("start fetch");
  const util = require("util");
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

    // Check if the response is ok (status in the range 200-299)
    /*     if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from Warcraft Logs API:", errorText);
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    } */
    //console.log("##### resp", response);
    // Attempt to parse the JSON response
    const result: WarcraftLogs.Response = await response.json();
    /*    console.log("####result", result);
    console.dir(result, { depth: null }); */
    //console.dir(result.data, { depth: null });

    console.log("#############################");
    console.log(
      util.inspect(result.data, { depth: 3, colors: true, maxArrayLength: 10 })
    );

    const report = result?.data?.reportData?.report;
    if (!report || !report.fights || report.fights.length === 0) {
      throw new Error("No fights found in the report");
    }

    const fight = report.fights[0]; // Assuming one fight is returned

    // Process raid composition
    const raidComposition = report.masterData.actors.filter((actor) =>
      fight.friendlyPlayers.includes(actor.id)
    );
    const rankings = report.rankings;

    //* DO I NEED TO RETURN FIGHTS ASWELL?***

    return {
      raidComposition,
      rankings,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
