"use client";

import { getAllCategory } from "@/api/categoryApi";
import { fakeMenuData } from "@/data/data-fake";
import { useQuery } from "@tanstack/react-query";
import useEmblaCarousel from "embla-carousel-react"; // Import hook
import Link from "next/link";
import React from "react";
import { CategoryItem } from "./CategoryItem";
import CategoriesSkeleton from "./skeleton/CategoriesSkeleton";

const Categories = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategory,
  });

  if (isError) return <p>Error...</p>;

  return (
    <>
      {isLoading ? (
        <CategoriesSkeleton />
      ) : (
        <div className="hidden md:grid w-full h-auto bg-white mb-5 mt-4 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-2 rounded-[8px] shadow overflow-hidden">
          {data?.slice(0, 15).map((cate, index) => (
            <CategoryItem key={index} cate={cate} />
          ))}
          {data?.length > 15 && (
            <Link
              href={"/"}
              className="flex flex-col items-center justify-center hover:bg-gray-100 hover:cursor-pointer transition p-2"
            >
              <img
                src="https://cdnv2.tgdd.vn/mwg-static/dmx/Common/9c/c7/9cc7b36387641fc1bdde6bb3909e4b07.png"
                alt="image"
                className="w-[47px] h-[47px]"
              />
              <span className="text-center text-sm font-medium my-[2px]">
                Tất cả
              </span>
            </Link>
          )}
        </div>
      )}

      <div className="block md:hidden mt-4 bg-white p-2 rounded-lg shadow">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {fakeMenuData.map((cate, index) => (
              <div
                key={index}
                className="relative basis-1/5 flex-shrink-0 flex justify-center"
              >
                <CategoryItem cate={cate} isMobile />
              </div>
            ))}

            <div className="relative basis-1/5 flex-shrink-0 flex justify-center">
              <Link
                href={"/"}
                className="w-full flex flex-col items-center justify-start text-center p-1"
              >
                <div className="w-[47px] h-[47px] flex items-center justify-center bg-gray-100 rounded-full mb-1">
                  <img
                    src="https://cdnv2.tgdd.vn/mwg-static/dmx/Common/9c/c7/9cc7b36387641fc1bdde6bb3909e4b07.png"
                    alt="image"
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-center text-xs leading-tight my-[2px] mx-auto">
                  Xem thêm
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
