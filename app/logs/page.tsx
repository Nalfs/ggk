import type { Metadata } from "next";
import Heading from "@/components/Heading";
import React from "react";
import { DataTable } from "./dataTable";
import { getGuildLogs } from "@/lib/members";
import { columns } from "./columns";
import DemoPageTable from "../payment/page";

export const metadata: Metadata = {
  title: "Logs",
};

async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      title: "pending",
      owner: "m@example.com",
    },
    {
      id: "728ed52f",
      start: 100,
      end: 100,
      status: "vdxfJ7ckDbGQmjXa",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    // ...
  ];
}

export default async function LogsPage() {
  const logs = await getGuildLogs();
  const data = await getData();
  return (
    <>
      <Heading>Logs Page</Heading>
      <DemoPageTable />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={logs} />
      </div>
    </>
  );
}
