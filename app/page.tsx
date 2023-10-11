import Image from "next/image";

export default function Home() {
  console.log("[HomePage]");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Indie Gamer</h1>
      <p>Only the best indie games, reviewed for you</p>
    </main>
  );
}
