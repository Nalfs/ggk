// import React, { useState } from "react";
// import Heading from "@/components/Heading";
// import ShareLinkButton from "@/components/ShareLinkButton";
// import { getGuildLog, showKills } from "@/lib/members";
// import { formatTime } from "@/lib/utils";
// import { CharacterList } from "@/components/CharacterList/CharacterList";
// import ClassSummaryTable from "@/components/ClassSummaryComponent";
// import BossKillDetails from "@/components/BossKillComponent";
// import { FormattedKill } from "@/lib/members";

// interface LogPageParams {
//   slug: string;
// }

// interface LogPageProps {
//   params: LogPageParams;
// }

// export default async function LogPage({ params: { slug } }: LogPageProps) {
//   // Update the useState hook to accept both null and FormattedKill types
//   const [selectedKill, setSelectedKill] = useState<FormattedKill | null>(null);
//   const log = await getGuildLog(slug);
//   const killsToShow = showKills(log.fights);

//   // If a kill is selected, show the BossKillDetails component
//   if (selectedKill) {
//     return <BossKillDetails kill={selectedKill} />;
//   }

//   return (
//     <div className="px-2">
//       <div className="flex justify-center text-center">
//         <div className="flex-col justify-center text-center">
//           <Heading>Log: {slug}</Heading>
//           <ShareLinkButton />
//           <p>
//             <strong>Start:</strong> {formatTime(log.startTime)}
//           </p>
//           <p>
//             <strong>End:</strong> {formatTime(log.endTime)}
//           </p>
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <div>
//           <Heading>Session</Heading>
//           {killsToShow.map((kill, index) => (
//             <div key={index} onClick={() => setSelectedKill(kill)}>
//               <p>
//                 Name: <strong>{kill.name}</strong>
//               </p>
//               <p>Duration: {kill.duration}</p>
//             </div>
//           ))}
//         </div>
//         <div>
//           <Heading>Members in Raid</Heading>
//           <ClassSummaryTable data={log.friendlies} />
//         </div>
//       </div>
//     </div>
//   );
// }
// page.tsx (server component, no 'use client' here)
import ClientLogPage from "./ClientLogPage";
import { getGuildLog } from "@/lib/members"; // Adjust path as necessary

export default async function LogPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const log = await getGuildLog(slug);

  // Pass the fetched data as props to the client component
  return <ClientLogPage initialLog={log} />;
}
