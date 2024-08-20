import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "./ui/table"; // Adjust the import paths according to your structure
import { wowClasses } from "@/lib/utils";
import Image from "next/image";
import DPSIcon from "@/public/images/role/dps.jpg";
import HealerIcon from "@/public/images/role/healer.jpg";
import TankIcon from "@/public/images/role/tank.jpg";

type WowClass = {
  name: string;
  color: string;
  raidBuff: string | string[];
  icon: string;
};

type WowClasses = {
  [key: string]: WowClass;
};

type Role = "Tank" | "DPS" | "Healer" | "Support"; // Added "Support" as a role

type DataEntry = {
  "Vilken klass vill du main:a?": string;
  "Vilken roll vill du spela nästa tier/säsong?": string;
};

type ClassCounts = {
  [key: string]: {
    count: number;
    roles: {
      Tank: boolean;
      DPS: boolean;
      Healer: boolean;
    };
  };
};

const processData = (data: DataEntry[]): ClassCounts => {
  const classCounts: ClassCounts = {};

  // Normalize wowClasses names to lowercase for case-insensitive comparison
  const normalizedWowClasses: { [key: string]: string } = {};
  (Object.keys(wowClasses) as Array<keyof typeof wowClasses>).forEach((key) => {
    const className = wowClasses[key].name.toLowerCase();
    normalizedWowClasses[className] = key;
  });

  // Ensure data is an array
  if (!Array.isArray(data)) {
    console.error("Expected data to be an array, but received:", data);
    return classCounts;
  }

  data.forEach((entry) => {
    // Extract the class name from the entry and normalize it
    const rawClassName = entry["Vilken klass vill du main:a?"]
      ?.split(",")[0]
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
      if (!classCounts[originalClassName]) {
        classCounts[originalClassName] = {
          count: 0,
          roles: {
            Tank: false,
            DPS: false,
            Healer: false,
          },
        };
      }
      classCounts[originalClassName].count += 1;

      let role = entry["Vilken roll vill du spela nästa tier/säsong?"] as Role;

      // Treat "Support" as "DPS"
      if (role === "Support") {
        role = "DPS";
      }

      if (role in classCounts[originalClassName].roles) {
        classCounts[originalClassName].roles[role] = true;
      }
    }
  });

  return classCounts;
};

const ClassSummaryTable = ({ data }: { data: DataEntry[] }) => {
  const classCounts = processData(data);

  const roleIcons: { [key: string]: string } = {
    DPS: DPSIcon.src,
    Healer: HealerIcon.src,
    Tank: TankIcon.src,
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Class</TableCell>
            <TableCell className="text-center">Tank</TableCell>
            <TableCell className="text-center">DPS</TableCell>
            <TableCell className="text-center">Healer</TableCell>
            <TableCell className="text-center">Count</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(Object.keys(classCounts) as Array<keyof typeof wowClasses>).map(
            (classKey) => {
              const wowClass = wowClasses[classKey];
              const roles = classCounts[classKey].roles;

              return (
                <TableRow key={classKey}>
                  <TableCell style={{ color: wowClass.color }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {wowClass.name}
                      <Image
                        src={wowClass.icon}
                        alt={wowClass.name}
                        width={16}
                        height={16}
                        style={{ marginLeft: "8px" }}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {roles.Tank && (
                      <Image
                        src={roleIcons.Tank}
                        alt="Tank"
                        width={24}
                        height={24}
                      />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {roles.DPS && (
                      <Image
                        src={roleIcons.DPS}
                        alt="DPS"
                        width={24}
                        height={24}
                      />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {roles.Healer && (
                      <Image
                        src={roleIcons.Healer}
                        alt="Healer"
                        width={24}
                        height={24}
                      />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {classCounts[classKey].count}
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>

      {/* Summary Section */}
      <div className="mt-4">
        <strong>Total Players: </strong>{" "}
        {Object.values(classCounts).reduce((sum, cls) => sum + cls.count, 0)}
      </div>
    </div>
  );
};

export default ClassSummaryTable;
