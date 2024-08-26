// import { getBossDetails } from "@/lib/members"; // Adjust the path and function as necessary
// import { useRouter } from "next/router";

export default async function BossDetailsPage({
  params: { slug, bossId },
}: {
  params: { slug: string; bossId: string };
}) {
  //   const bossDetails = await getBossDetails(slug, bossId); // Fetch boss details using slug and bossId

  //   if (!bossDetails) {
  //     return <p>Boss details not found</p>;
  //   }

  return (
    <div className="px-2">
      {/* <h1 className="text-2xl font-bold">{bossDetails.name}</h1> */}
      <p>
        <strong>Slug:</strong> {slug}
      </p>
      <p>
        <strong>Boss ID:</strong> {bossId}
      </p>
      <p>{/* <strong>Description:</strong> {bossDetails.description} */}</p>
      {/* Render additional boss details here */}
    </div>
  );
}
