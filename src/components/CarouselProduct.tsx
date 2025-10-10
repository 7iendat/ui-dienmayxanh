import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const CarouselProduct = ({ isLoading, data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <div>
      <div className="w-full relative flex items-center mt-2.5 md:mt-0">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <div className="flex items-stretch h-full gap-2">
              {data?.map((product, i) => (
                <ProductCard product={product} key={i} />
              ))}
            </div>
          )}
        </div>

        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-opacity left-2 md:-left-4 ${
            prevBtnDisabled ? "opacity-30 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-opacity right-2 md:-right-4 ${
            nextBtnDisabled ? "opacity-30 cursor-not-allowed" : ""
          }`}
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default CarouselProduct;
