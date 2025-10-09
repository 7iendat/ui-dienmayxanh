"use client";
import { getAllCategory, getProductByCategories } from "@/api/categoryApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
          <p>Loading...</p>
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
          <span>Loading</span>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4 mt-4 px-2 md:px-5 pb-[5px]">
            {products?.slice(0, 12).map((product) => (
              <div
                key={product.id}
                onClick={() =>
                  router.push(`/${product.category}/${product.id}`)
                }
                className="relative bg-white rounded-[6px] border-[1px] border-[#f2f4f7] hover:shadow-lg hover:cursor-pointer transition p-2 flex flex-col items-center text-center"
              >
                <div className="w-full h-auto aspect-square mb-2 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain transition-all duration-300 ease-in-out hover:scale-105"
                  />
                </div>

                <div className="flex flex-col items-start w-full mt-auto">
                  <h3 className="text-sm font-medium line-clamp-2 min-h-[40px] text-left text-[#1d2939] leading-tight mb-2">
                    {product.title}
                  </h3>

                  <div className="w-full flex flex-col items-start mb-2">
                    <p className="text-red-600 font-semibold text-base md:text-lg">
                      {Math.round(
                        product.price * (100 - product.discountPercentage)
                      ).toLocaleString()}
                      ₫
                    </p>
                    <div className="w-full flex items-center">
                      <p className="text-gray-400 text-xs line-through">
                        {product.price.toLocaleString()}₫
                      </p>
                      <span className="text-sm font-semibold text-red-500 ml-2">
                        -{product.discountPercentage}%
                      </span>
                    </div>
                  </div>

                  <span className="bg-[#efefef] text-center text-black text-[12px] py-[3px] px-2.5 rounded-[25px] w-full">
                    Sắp mở bán
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
