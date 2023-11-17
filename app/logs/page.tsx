import type { Metadata } from "next";
import Heading from "@/components/Heading";
import React from "react";
import { DataTable } from "./dataTable";
import { getGuildLogs } from "@/lib/members";
import { columns } from "./columns";
import { DataTablePagination } from "./tableTest";
// import { useTable, usePagination } from "@tanstack/react-table";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  Column,
  ColumnDef,
} from "@tanstack/react-table";

export const metadata: Metadata = {
  title: "Logs",
};

export default async function LogsPage() {
  const logs = await getGuildLogs();
  const table = useReactTable({
    logs,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
  });

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
      <Heading>Logs Page</Heading>

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={logs} />
      </div>

      <p>test</p>
      <DataTablePagination table={table} />
    </>
  );
}
