"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const imagePaths = [
  "/images/guild/1.jpg",
  "/images/guild/2.jpg",
  "/images/guild/3.jpg",
  "/images/guild/20240628_204712.jpg",
  "/images/guild/IMG_0371.jpg",
  "/images/guild/IMG_0751.jpg",
  "/images/guild/IMG_0934.jpg",
  "/images/guild/diego_knight.jpg",
  "/images/guild/4.jpg",
  "/images/guild/5.jpg",
  "/images/guild/6.jpg",
  "/images/guild/7.jpg",
  "/images/guild/IMG_0996.jpg",
  "/images/guild/IMG_0998.jpg",
  "/images/guild/IMG_5304.jpg",
  "/images/guild/PXL_20240813_223417642.jpg",
];

export default function ImageCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {imagePaths.map((src, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={500} // Adjust width as necessary
              height={500} // Adjust height as necessary
              style={{ objectFit: "cover" }} // Ensures the image fits within the 300x300 size
              className="aspect-square" // Makes sure the container has a 1:1 aspect ratio
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
