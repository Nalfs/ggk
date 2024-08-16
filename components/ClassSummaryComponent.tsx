import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "./ui/table"; // Adjust the import paths according to your structure
import { wowClasses } from "@/lib/utils";
import Image from "next/image";

type WowClass = {
  name: string;
  color: string;
  raidBuff: string | string[];
  icon: string;
};

type WowClasses = {
  [key: string]: WowClass;
};

type DataEntry = {
  "Vilken klass vill du main:a?": string;
};

type ClassCounts = {
  [key: string]: number;
};

const processData = (data: DataEntry[]): ClassCounts => {
  const classCounts: ClassCounts = {};

  // Normalize wowClasses names to lowercase for case-insensitive comparison
  const normalizedWowClasses: { [key: string]: string } = {};
  (Object.keys(wowClasses) as Array<keyof typeof wowClasses>).forEach((key) => {
    const className = wowClasses[key].name.toLowerCase();
    normalizedWowClasses[className] = key;
  });

  data.forEach((entry) => {
    // Extract the class name from the entry and normalize it
    const rawClassName = entry["Vilken klass vill du main:a?"]
      .split(",")[0]
      .trim()
      .toLowerCase();

    // Attempt to match against multi-word class names first
    const className =
      Object.keys(normalizedWowClasses).find((name) =>
        rawClassName.startsWith(name)
      ) || rawClassName;

    // Check if the normalized class name exists in the wowClasses object
    if (normalizedWowClasses[className]) {
      const originalClassName = normalizedWowClasses[className];
      classCounts[originalClassName] =
        (classCounts[originalClassName] || 0) + 1;
    }
  });

  return classCounts;
};

const ClassSummaryTable = ({ data }: { data: DataEntry[] }) => {
  const classCounts = processData(data);

  // Calculate the total number of players across all classes
  const totalCounts = Object.values(classCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Class</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Icon</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(Object.keys(classCounts) as Array<keyof typeof wowClasses>).map(
            (classKey) => {
              const wowClass = wowClasses[classKey];
              return (
                <TableRow key={classKey}>
                  <TableCell style={{ color: wowClass.color }}>
                    {wowClass.name}
                  </TableCell>
                  <TableCell>{classCounts[classKey]}</TableCell>
                  <TableCell>
                    <Image
                      src={wowClass.icon}
                      alt={wowClass.name}
                      width={32}
                      height={32}
                    />
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>

      {/* Summary Section */}
      <div className="mt-4">
        <strong>Total Players: </strong> {totalCounts}
      </div>
    </div>
  );
};

export default ClassSummaryTable;
