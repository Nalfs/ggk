"use client";
import type { Metadata } from "next";
import Heading from "@/components/Heading";
import React from "react";
import { DataTable } from "./dataTable";
import { getGuildLogs } from "@/lib/members";
import { columns } from "./columns";
import { useWarcraftLogs } from "@/lib/warcraftlogs";

// export const metadata: Metadata = {
//   title: "Logs",
// };

export default function LogsPage() {
  // const logs = await getGuildLogs();
  const { data, loading, error } = useWarcraftLogs();

  // const { table, state } = useTable(
  //   {
  //     columns: columns,
  //     data: logs,
  //   },
  //   // Use the usePagination plugin to enable pagination
  //   usePagination
  // );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log("data", data);
  return (
    <>
      <div className="container mx-auto py-10">
        <div>
          <Heading>Logs Page</Heading>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
