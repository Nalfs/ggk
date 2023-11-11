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

  return (
    <>
      <Heading>Logs Page</Heading>

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={logs} />
      </div>
    </>
  );
}
