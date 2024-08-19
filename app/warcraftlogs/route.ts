import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const CLIENT_ID = process.env.CLIENT_ID as string;
  const CLIENT_SECRET = process.env.CLIENT_SECRET as string;
  const TOKEN_URL = "https://www.warcraftlogs.com/oauth/token";
  const API_URL = "https://www.warcraftlogs.com/api/v2/client";

  console.log("hitting the route");

  try {
    // Fetch access token
    const tokenResponse = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${CLIENT_ID}:${CLIENT_SECRET}`
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

    // Fetch data from the Warcraft Logs v2 API
    const apiResponse = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            reportData {
              reports(guildName: "Gamla gubbar kan", guildServerSlug: "tarren-mill", guildServerRegion: "EU") {
                data {
                  code
                  title
                  owner {
                    name
                  }
                  startTime
                  endTime
                }
              }
            }
          }
        `,
      }),
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error("Error from Warcraft Logs API:", errorText);
      throw new Error("Failed to retrieve data");
    }

    const responseData = await apiResponse.json();
    console.log("#####responseData", responseData);
    console.dir(responseData, { depth: null });
    return NextResponse.json(responseData);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
