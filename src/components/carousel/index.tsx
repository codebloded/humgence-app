"use client";

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
      <div className="overflow-hidden mx-auto max-w-2xl">
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
              className="w-full h-auto object-cover"
            />
          ))}
        </div>

        <div className="relative bottom-4 md:bottom-8 w-full flex justify-center gap-4 px-4 md:px-10 text-white">
          <button onClick={previousSlide} className="flex-shrink-0">
            Prev
          </button>
          <button onClick={nextSlide} className="flex-shrink-0">
            Next
          </button>
        </div>

        <div className="relative bottom-2 md:bottom-8 w-full flex justify-center gap-2 p-2 md:p-4">
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
    </div>
  );
};

export default Carousel;
