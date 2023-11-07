export async function getMembers(): Promise<any> {
  const response = await fetchMembers();
  const data = await response.json(); // Extract JSON data from the response
  console.log("#### data: ", data);
  // Now 'data' contains the JSON response
  return data;
}

async function fetchMembers() {
  const url =
    "https://raider.io/api/v1/guilds/profile?region=eu&realm=tarren-mill&name=Gamla%20gubbar%20kan&fields=members";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return response; // Returning the response object
}

// async function getLogs() {
//   const url =

//     const response =
//     UrlFetchApp.fetch("https://www.warcraftlogs.com/v1/parses/character/Fistweaverz/Illidan/US?
//     api_key=xxxxx");

//     var json = response.getContentText();
//     var data = JSON.parse(json);

//     Logger.log(data["percentile"]);
//   }
