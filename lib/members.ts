export async function getMembers(): Promise<any> {
  const response = await fetchMembers();
  const data = await response.json(); // Extract JSON data from the response
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

// export async function getGuildLog(param: string) {
//   const apiKey = process.env.CLIENT_KEY;
//   console.log("[param]", param);
//   const url = `https://www.warcraftlogs.com/v1/report/fights/${param}?api_key=${apiKey}`;
//   console.log("[url]", url);

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`WCL returned ${response.status} for ${url}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     // Handle errors, log, or return default data as needed
//     console.error("Error fetching logs:", error);
//     return []; // Returning an empty array in case of an error
//   }
// }
export async function getGuildLog(param: string) {
  const apiKey = process.env.CLIENT_KEY;
  console.log("[param]", param);
  const url = `https://www.warcraftlogs.com/v1/report/fights/${param}?api_key=${apiKey}`;
  console.log("[url]", url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`WCL returned ${response.status} for ${url}`);
    }

    const data = await response.json();
    return data; // Return the retrieved JSON object
  } catch (error) {
    // Handle errors, log, or return default data as needed
    console.error("Error fetching logs:", error);
    // You might return a default error object instead of an empty array
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
        start: new Date(log.start).toDateString(),
        end: new Date(log.end).toDateString(),
      }));

      return formattedLogs;
    } else {
      throw new Error("Data format is not as expected");
    }
  } catch (error) {
    // Handle errors, log, or return default data as needed
    console.error("Error fetching logs:", error);
    return []; // Returning an empty array in case of an error
  }
}

// This is a basic example of how you might fetch data from the Warcraft Logs API
const apiKey = "c9efc4caafae3b28664a0bed395385b7"; // Replace 'YOUR_API_KEY' with your actual API key
// Replace YourUsernameHere with your username
// const url = "https://www.warcraftlogs.com/v1/reports/user/YourUsernameHere";
const url =
  "https://www.warcraftlogs.com/v1/parses/character/Symfonisk/tarren-mill/EU";
export const fetchData = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      // Process the retrieved data here
      // console.log("####logs", data);
    } else {
      console.error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
