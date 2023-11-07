import Heading from "@/components/Heading";
import GuildPage from "./guild/page";
import { getGuildLogs } from "@/lib/members";
// import Logs from "@/components/Logs/Logs";

export default async function Home() {
  // const data = await getGuildLogs();
  return (
    <>
      <div>{/* <Logs logs={data} /> */}</div>
      <Heading>GGK</Heading>
      <p className="pb-3">Gammal är äldst.</p>
      <GuildPage />

      <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full"></div>
    </>
  );
}
