"use client";

import { IconButton } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CarouselProps {
  slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden mx-auto relative ">
        <div
          className={`flex transition ease-out duration-400`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s, index) => (
            <img
              key={index}
              src={s}
              alt={`Slide ${index}`}
              className="w-full aspect-video object-cover"
            />
          ))}
        </div>

        <div className="absolute inset-y-0 flex justify-between w-full px-4 md:px-10 text-white">
          <button onClick={previousSlide} className="flex-shrink-0">
            <ChevronLeft
              size={54}
              className="bg-gray-900 opacity-70 rounded-full p-2"
            />
          </button>
          <button onClick={nextSlide} className="flex-shrink-0">
            <ChevronRight
              size={54}
              className="bg-gray-900 opacity-70 rounded-full p-2"
            />
          </button>
        </div>

        <div className="absolute bottom-2 md:bottom-8 w-full flex justify-center gap-2 p-2 md:p-4">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full w-2 h-2 md:w-3 md:h-3 cursor-pointer ${
                index === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-row lg:flex-row gap-10 items-start justify-between md:justify-between p-10">
        <h3 className="text-sm font-light text-center mb-4 md:mb-0">
          Apartment
        </h3>

        <h3 className="text-sm font-light text-center mb-4 md:mb-0">3 Beds</h3>
      </div>
    </div>
  );
};

export default Carousel;
