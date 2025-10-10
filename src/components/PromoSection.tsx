"use client";
import { getAllCategory, getProductByCategories } from "@/api/categoryApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import PromoProductCard from "./PromoProductCard";
import PromoProductSkeleton from "./skeleton/PromoProductSkeleton";
import CategoriesSkeleton from "./skeleton/CategoriesSkeleton";

export default function PromoSection() {
  const [activeCate, setActiveCate] = useState("");
  const router = useRouter();

  const {
    data: categories,
    isLoading: cateLoading,
    isError: cateError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategory,
  });

  const {
    data: products,
    isLoading: proLoading,
    isError,
  } = useQuery({
    queryKey: ["products", activeCate],
    queryFn: () => getProductByCategories(activeCate),
    enabled: !!activeCate,
  });

  useEffect(() => {
    if (categories && categories.length > 0 && !activeCate) {
      setActiveCate(categories[0].slug);
    }
  }, [categories, activeCate]);

  if (cateError) return <p>Error</p>;

  return (
    <section className="w-full pt-4 pl-3 pb-2.5 pr-2.5  md:pt-5 mb-5 md:px-2 ">
      <h3 className=" text-[18px] md:text-2xl font-bold text-[#1d2939]  pl-[12px] pr-2.5 pb-2.5 md:mb-5 leading-tight md:leading-[32px]">
        Khuyến mãi Online
      </h3>

      <div className="w-full bg-white py-4 md:rounded-[12px] shadow-sm">
        {cateLoading ? (
          Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-4 w-16 bg-gray-300 rounded mx-[10px] animate-pulse "
            />
          ))
        ) : (
          <div className="w-full overflow-x-auto scrollbar-hide pb-2 mb-3">
            <div className="flex gap-3 px-4">
              {categories?.slice(0, 9).map((cate) => (
                <button
                  key={cate.slug}
                  onClick={() => setActiveCate(cate.slug)}
                  className={`hover:cursor-pointer flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition ${
                    activeCate === cate.slug
                      ? "bg-[#0056a6] text-white border-[#0056a6]"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {cate.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {proLoading ? (
          <PromoProductSkeleton />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4 mt-4 px-2 md:px-5 pb-[5px]">
            {products?.slice(0, 12).map((product) => (
              <PromoProductCard product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
