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
  "/images/guild/20240628_204712.jpg",
  "/images/guild/IMG_0364.jpg",
  "/images/guild/IMG_0365.jpg",
  "/images/guild/IMG_0371.jpg",
  "/images/guild/IMG_0751.jpg",
  "/images/guild/IMG_0934.jpg",
  "/images/guild/diego_knight.jpg",
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
              width={300} // Adjust width as necessary
              height={300} // Adjust height as necessary
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
