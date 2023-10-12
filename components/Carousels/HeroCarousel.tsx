"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imageUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
  { imageUrl: "/assets/images/hero-2.svg", alt: "bag" },
  { imageUrl: "/assets/images/hero-3.svg", alt: "lamp" },
  { imageUrl: "/assets/images/hero-4.svg", alt: "air " },
  { imageUrl: "/assets/images/hero-5.svg", alt: "chair" },
];
const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        emulateTouch={true}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => {
          return (
            <Image
              src={image.imageUrl}
              alt={image.alt}
              key={image.alt}
              width={484}
              height={484}
              className="object-contain"
            />
          );
        })}
      </Carousel>

      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        width={175}
        height={175}
        alt="arrow-right"
        className="max-xl:hidden absolute -left-[15%] bottom-0"
      />
    </div>
  );
};

export default HeroCarousel;
