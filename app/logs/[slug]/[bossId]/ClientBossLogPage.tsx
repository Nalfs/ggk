"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "../../dataTable";
import { ColumnDef } from "@tanstack/react-table"; // Adjust this import based on your setup

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
    cell: ({ row }) => <span>{row.original.class}</span>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <span>{row.original.name}</span>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => <div className="text-center">{row.original.amount}</div>,
  },
  {
    accessorKey: "rankPercent",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Parse%
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.original.rankPercent}</div>
    ),
  },
  {
    accessorKey: "bracketPercent",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Parse ilvl %
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.original.bracketPercent}</div>
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
  // Example of adding state management
  const [sorting, setSorting] = useState([]);
  const [filteredDpsCharacters, setFilteredDpsCharacters] =
    useState(dpsCharacters);
  const [filteredHpsCharacters, setFilteredHpsCharacters] =
    useState(hpsCharacters);

  // Add sorting, filtering logic here

  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="overall">Overall</TabsTrigger>
        <TabsTrigger value="dps">DPS</TabsTrigger>
        <TabsTrigger value="hps">HPS</TabsTrigger>
      </TabsList>

      <TabsContent value="overall">
        <p>Overall data will be here.</p>
      </TabsContent>

      <TabsContent value="dps">
        <DataTable columns={columns} data={filteredDpsCharacters} />
      </TabsContent>

      <TabsContent value="hps">
        <DataTable columns={columns} data={filteredHpsCharacters} />
      </TabsContent>
    </Tabs>
  );
}
