import { useState, useCallback, useEffect } from "react";
import Papa from "papaparse";

/**
 * Hook for fetching and parsing CSV data.
 */
export function useGetResponses() {
  const csvUrl = process.env.NEXT_PUBLIC_CSV_URL;
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchResponses = useCallback(async () => {
    if (!csvUrl) {
      setError("CSV URL is not defined");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(csvUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const csvText = await response.text();

      const parsedData = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
      });

      if (parsedData.errors.length > 0) {
        throw new Error(
          `Parsing error: ${parsedData.errors[0].message} at row ${parsedData.errors[0].row}`
        );
      }

      setData(parsedData.data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [csvUrl]);

  useEffect(() => {
    fetchResponses();
  }, [fetchResponses]);

  return { data, loading, error };
}
