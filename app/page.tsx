import ImageCarousel from "@/components/CarouselComponent";

export default async function Home() {
  return (
    <>
      <div className="container mx-auto py-10">
        <h1>Åh nej, du måste kommit fel!</h1>
        <ImageCarousel />
      </div>
    </>
  );
}
