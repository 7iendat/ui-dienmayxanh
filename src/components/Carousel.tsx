"use client";

import { products } from "@/data/data-fake";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useCallback } from "react";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full rounded-xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((item) => (
            <div
              key={item.id}
              className="min-w-[95%] sm:min-w-[48%] md:min-w-[45%] lg:min-w-[48%] flex-shrink-0 p-1  transition-all duration-200 rounded-lg cursor-pointer "
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-contain w-full h-[131px] md:h-[200px] rounded-lg mr-2.5"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-8 h-8 flex items-center justify-center hover:bg-gray-200"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-8 h-8 flex items-center justify-center hover:bg-gray-200"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};

export default Carousel;
