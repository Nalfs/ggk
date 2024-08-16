import { useState, useCallback, useEffect } from "react";
import Papa from "papaparse";

/**
 * Hook for generating csv responses.
 */
export function useGetResponses() {
  const csvUrl = process.env.NEXT_PUBLIC_CSV_URL;
  console.log("#####URL :", csvUrl);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchResponses = useCallback(async () => {
    setLoading(true);
    try {
      if (!csvUrl) {
        throw new Error("CSV URL is not defined");
      }

      console.log("URL value:", csvUrl);

      const response = await fetch(csvUrl);
      console.log("Response:", response);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      console.log("Reader:", reader);
      if (!reader) {
        throw new Error("No readable stream found in response");
      }

      const { value } = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(value);

      console.log("CSV Data:", csv);

      const parsedData = Papa.parse(csv, { header: true });
      console.log("Parsed Data:", parsedData.data);
      setData(parsedData.data);
    } catch (err) {
      console.error("Error fetching CSV data:", err);
      setError(err as Error); // Type assertion here
    } finally {
      setLoading(false);
    }
  }, [csvUrl]);

  useEffect(() => {
    console.log("#1 running function");
    fetchResponses();
    console.log("#2 running function");
  }, [fetchResponses]);

  return { data, loading, error };
}
