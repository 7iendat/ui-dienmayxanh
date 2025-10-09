"use client";

import { getProductLimit } from "@/api/productApi";
import { useQuery } from "@tanstack/react-query";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const MonopolyProduct = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", 5, 5],
    queryFn: () => getProductLimit(5, 5),
  });

  if (isError) return <p>Error</p>;

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
    <section className="mt-6 bg-white md:rounded-xl shadow-sm py-2.5 px-2.5 md:p-5 w-full flex-wrap">
      <h3 className="text-[#1d2939] mb-[20px] text-[18px] md:text-[24px] font-bold">
        Sản Phẩm Đặc Quyền
      </h3>

      <div className="w-full block md:flex md:gap-4 items-stretch h-full">
        <Link
          href={"https://www.dienmayxanh.com/chuong-trinh-hang-dac-quyen"}
          className="w-full md:w-[360px] md:flex-shrink-0"
        >
          <img
            src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/72/ca/72caf3d7ea3c1738ed1abcfd23e4dc83.png"
            alt="banner"
            className="w-full h-full object-cover rounded-lg overflow-clip md:rounded-none"
          />
        </Link>

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
    </section>
  );
};

export default MonopolyProduct;
