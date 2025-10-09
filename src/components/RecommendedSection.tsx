"use client";

import { getAllProduct, getProductLimit } from "@/api/productApi";
import { fakeProducts } from "@/data/data-fake";
import { useQuery } from "@tanstack/react-query";
import { ArrowDownIcon, ChevronDown, Star } from "lucide-react";
import React from "react";
import ProductCard from "./ProductCard";

const RecommendedSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductLimit(20, 20),
  });

  if (isError) return <p>Error</p>;

  return (
    <section className=" mt-6 bg-white md:rounded-xl shadow-sm  w-full">
      <h3 className="text-[18px] md:text-[24px] font-bold text-[#1d2939]  leading-[32px] px-2.5 pb-2.5 md:pl-5 pt-[12px]">
        Gợi ý cho bạn
      </h3>

      {isLoading ? (
        <span>Loading</span>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-[8px] md:gap-[10px] w-full md:px-5 px-2.5 pb-[15px]">
          {data?.slice(0, 12).map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      )}
      <div className="w-full py-2 text-center text-[#2a83e9] cursor-pointer mx-auto flex justify-center">
        {data?.length > 12 && (
          <div className="flex items-center text-sm leading-9">
            <a>Xem thêm {fakeProducts.length - 12} sản phẩm</a>
            <ChevronDown />
          </div>
        )}
      </div>
    </section>
  );
};

export default RecommendedSection;
