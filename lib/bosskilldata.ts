export async function getWarcraftLogsData(slug: string, bossId: string) {
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
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("hitting route:: result", result);

    const { fights, masterData, table, healing } =
      result.data.reportData.report;
    const fight = fights[0]; // Assuming one fight is returned

    // Process raid composition
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
