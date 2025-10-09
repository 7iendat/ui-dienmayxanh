"use client";

import { getProductLimit } from "@/api/productApi";
import { fakeProducts } from "@/data/data-fake";
import { useQuery } from "@tanstack/react-query";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import React, { useCallback } from "react";
import ProductCard from "./ProductCard";

const MonopolyProduct = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", 5, 5],
    queryFn: () => getProductLimit(5, 5),
  });

  if (isError) return <p>Error</p>;
  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="mt-6 bg-white md:rounded-xl shadow-sm py-2.5 pl-2.5 md:p-5 w-full flex-wrap">
      <h3 className="text-[#1d2939] mb-[20px] mr-2.5 text-[18px] md:text-[24px] font-bold">
        Sản Phẩm Đặc Quyền
      </h3>

      <div className="w-full block md:flex items-stretch h-full">
        <Link
          href={"https://www.dienmayxanh.com/chuong-trinh-hang-dac-quyen"}
          className="w-full md:w-[380px] "
        >
          <img
            src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/72/ca/72caf3d7ea3c1738ed1abcfd23e4dc83.png"
            alt="banner"
            className="w-full  md:w-[360px] h-full overflow-clip"
          />
        </Link>

        <div className="w-full md:max-w-[calc(100%-380px)] relative flex items-center mt-2.5 md:mt-0">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <div className="flex items-stretch h-full ml-1 gap-1">
                {data?.map((product, i) => (
                  <ProductCard product={product} key={i} />
                ))}
              </div>
            )}
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-8 h-8 flex items-center justify-center hover:bg-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-8 h-8 flex items-center justify-center hover:bg-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MonopolyProduct;
