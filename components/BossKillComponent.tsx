import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import Heading from "./Heading";

interface BossKillDetailsProps {
  kill: any;
}

const BossKillDetails: React.FC<BossKillDetailsProps> = ({ kill }) => {
  const sortedPlayers = kill.players.sort((a: any, b: any) => b.dps - a.dps);

  return (
    <div>
      <Heading>Boss Kill: {kill.name}</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>DPS</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPlayers.map((player: any, index: number) => (
            <TableRow key={index}>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.dps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BossKillDetails;
