"use client";
import { useState, useEffect } from "react";

export const useWarcraftLogs = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/warcraftlogs", {
          method: "POST",
          headers: {
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

        if (!response.ok) {
          throw new Error("Failed to retrieve data");
        }

        const result = await response.json();
        console.log("#####result", result);

        // Correctly accessing the reports data
        const reports = result?.data?.reportData?.reports?.data;
        if (!reports) {
          throw new Error("Invalid API response format");
        }

        const formattedLogs = reports.map((log: any) => ({
          id: log.code,
          title: log.title,
          owner: log.owner.name,
          start: new Date(log.startTime).toLocaleString(),
          end: log.endTime ? new Date(log.endTime).toLocaleString() : "N/A",
        }));

        setData(formattedLogs);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
