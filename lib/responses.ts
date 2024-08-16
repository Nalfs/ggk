"use client";
import { useState, useCallback, useEffect } from "react";
import Papa from "papaparse";

/**
 * Hook for fetching and parsing CSV data.
 */
export function useGetResponses() {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/1ui61Et-iq2D4uNeioAkdYgZM9uRqJu05MgiNYLgqft0/pub?gid=108652390&single=true&output=csv";
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!csvUrl) {
          setError("CSV URL is not defined");
          setLoading(false);
          return;
        }

        const response = await fetch(csvUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const csvText = await response.text();

        // Parse CSV only if we are in a client-side environment
        if (typeof window !== "undefined") {
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
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [csvUrl]);

  return { data, loading, error };
}
