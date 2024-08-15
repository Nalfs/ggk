import type { Metadata } from "next";
import Heading from "@/components/Heading";
import React from "react";
import { DataTable } from "./dataTable";
import { getGuildLogs } from "@/lib/members";
import { columns } from "./columns";

export const metadata: Metadata = {
  title: "Logs",
};

export default async function LogsPage() {
  const logs = await getGuildLogs();

  // const { table, state } = useTable(
  //   {
  //     columns: columns,
  //     data: logs,
  //   },
  //   // Use the usePagination plugin to enable pagination
  //   usePagination
  // );

  return (
    <>
      <div className="container mx-auto py-10">
        <div>
          <Heading>Logs Page</Heading>
        </div>
        <DataTable columns={columns} data={logs} />
      </div>
    </>
  );
}
