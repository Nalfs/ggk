"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "../../dataTable";
import { ColumnDef, SortingState } from "@tanstack/react-table";
import { ClassIcon } from "@/components/ClassIconComponent";
import ProgressComponent from "@/components/ProgressComponent";

interface Character {
  class: string;
  name: string;
  amount: number;
  rankPercent: number;
  bracketPercent: number;
}

export const columns: ColumnDef<Character>[] = [
  {
    accessorKey: "class",
    header: "Class",
    cell: ({ row }) => <ClassIcon className={row.original.class} />,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <span>{row.original.name}</span>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <div className="text-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row, table }) => {
      // Calculate the total DPS/HPS by summing the amount field for all rows
      const totalAmount = table
        .getRowModel()
        .rows.reduce((sum, row) => sum + row.original.amount, 0);
      // Calculate the percentage of the current row's amount relative to the total
      const percentage = (row.original.amount / totalAmount) * 100;

      return (
        <div className="flex flex-col items-center">
          <span>{row.original.amount.toFixed(2)}</span>
          <ProgressComponent value={percentage} />
        </div>
      );
    },
  },
  {
    accessorKey: "rankPercent",
    header: ({ column }) => (
      <div className="text-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Parse%
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.original.rankPercent}%</div>
    ),
  },
  {
    accessorKey: "bracketPercent",
    header: ({ column }) => (
      <div className="text-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Parse ilvl %
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.original.bracketPercent}%</div>
    ),
  },
];

export default function ClientBossLogPage({
  raidComposition,
  dpsCharacters,
  hpsCharacters,
}: {
  raidComposition: any[];
  dpsCharacters: any[];
  hpsCharacters: any[];
}) {
  const initialSorting: SortingState = [{ id: "amount", desc: true }];
  return (
    <Tabs defaultValue="dps">
      <TabsList>
        <TabsTrigger value="overall">Overall</TabsTrigger>
        <TabsTrigger value="dps">DPS</TabsTrigger>
        <TabsTrigger value="hps">HPS</TabsTrigger>
      </TabsList>

      <TabsContent value="overall">
        <p>Overall data will be here.</p>
      </TabsContent>

      <TabsContent value="dps">
        <DataTable
          columns={columns}
          data={dpsCharacters}
          initialSort={initialSorting}
        />
      </TabsContent>

      <TabsContent value="hps">
        <DataTable
          columns={columns}
          data={hpsCharacters}
          initialSort={initialSorting}
        />
      </TabsContent>
    </Tabs>
  );
}
