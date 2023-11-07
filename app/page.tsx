import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";

import DemoPageTable from "./payment/page";
import GuildPage from "./guild/page";

export default async function Home() {
  console.log("[HomePage]");
  // const review = await getFeaturedReview();
  return (
    <>
      <GuildPage />
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full"></div>

      <DemoPageTable />
    </>
  );
}
