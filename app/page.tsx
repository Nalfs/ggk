import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import Heading from "@/components/Heading";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Heading>GGK</Heading>
      <p className="pb-3">Gammal är äldst.</p>
      <div>
        {" "}
        <BackgroundImage />
       {/*  <Image
          src="/images/wow.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        /> */}
      </div>
    </>
  );
}
