import ImageCarousel from "@/components/CarouselComponent";
import Countdown from "@/components/Countdown";

export default async function Home() {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-center">
          <Countdown targetDate={"2024-08-22T15:00:00-07:00"} />
        </div>
        <h1>Åh nej, du måste kommit fel!</h1>
        <ImageCarousel />
      </div>
    </>
  );
}
