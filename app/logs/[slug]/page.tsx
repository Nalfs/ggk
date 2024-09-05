import ClientLogPage from "./ClientLogPage";
import { getGuildLog } from "@/lib/members";

export default async function LogPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const log = await getGuildLog(slug);

  // Pass the fetched data and the slug as props to the client component
  return <ClientLogPage initialLog={log} slug={slug} />;
}
