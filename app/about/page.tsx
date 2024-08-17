import type { Metadata } from "next";
import Heading from "@/components/Heading";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Heading>Gamla Gubbar Kan</Heading>
      <p>Är en casual horde guild på Tarren Mill med fokus på raid & m+.</p>
      <p>
        {" "}
        Som guild har vi ingen CE ambition eller planer på att clear:a hela
        tiert mythic. Vår tanke är att clear:a HC så fort vi kan och sen lägga
        fokus på att rensa så långt vi kommer mythic. Skulle det landa kring
        3-5/9 M så är vi mer än nöjda.{" "}
      </p>
      <p>
        Vi är ett gäng spelare som växt upp med WoW, många började i vanilla &
        har nu förpliktelser utanför spelet, därav vår casual inställning. Vi
        har högt till tak i guilden men när vi spelar, så spelar vi seriöst med
        fokus på progress. Vi värdesätter våra spelare och spelardynamik över
        allt annat.{" "}
      </p>
      <section className="my-5">
        <h3>
          <strong>Tidigare tiers</strong>
        </h3>
        <ul>
          <li>Nyalotha: 12/12 HC</li>
          <li>Castle Nathria: 4/10 Mythic</li>
          <li>SoD: 10/10 HC</li>
          <li>Sepulcher: 10/11</li>
          <li> Voti: 2/8 Mythic</li>
          <li>Abberus: 9/9 HC</li>
          <li>Amirdrassil: 9/9 HC</li>
        </ul>
        <p>Vi raidar 2 dagar i veckan, 20-23 Tors & Sön.</p>
      </section>
      <p>
        Det körs även mycket m+ och vi har flertal spelare över 3k rio varje
        säsong. Alla är välkomna, unga, äldre, kvinnor, män, gröna, gula, växer
        & djur, logs är ett stort plus.
      </p>
      Låter det intressant kan ni kontakta oss här, lägga till på bnet
      Nalf#21745 eller /w Zillyn, Potey, Bolîbompa, Styrman ingame.
    </>
  );
}
