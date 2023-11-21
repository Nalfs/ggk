import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import Heading from "@/components/Heading";
import Image from "next/image";
import LogsPage from "./logs/page";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <>
      <div>
        <LogsPage />

        <Button> Hello</Button>
        {/* <Heading>GGK - Gamla Gubbar Kan</Heading>
      <p className="pb-3">Gammal är äldst.</p>
      <div>
        {" "}
        <BackgroundImage />
        {/*  <Image
          src="/images/wow.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        /> }
      </div> */}
      </div>
    </>
  );
}
