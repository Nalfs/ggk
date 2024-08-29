"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "../../dataTable";
import { ColumnDef } from "@tanstack/react-table";
import { ClassIcon } from "@/components/ClassIconComponent";

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
    cell: ({ row }) => <ClassIcon className={row.original.class} />, // Using ClassIcon component
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
    cell: ({ row }) => (
      <div className="text-center">{row.original.amount.toFixed(2)}</div>
    ),
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
  const [sorting, setSorting] = useState([]);
  const [filteredDpsCharacters, setFilteredDpsCharacters] =
    useState(dpsCharacters);
  const [filteredHpsCharacters, setFilteredHpsCharacters] =
    useState(hpsCharacters);

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
