"use client";
import { categories, categories1, fakeProducts } from "@/data/data-fake";
import { Dot, Star } from "lucide-react";
import React, { useState } from "react";

export default function PromoSection() {
  const [activeCate, setActiveCate] = useState("Tất cả");

  const filteredProducts =
    activeCate === "Tất cả"
      ? fakeProducts
      : fakeProducts.filter((p) => p.category === activeCate);

  return (
    <section className="w-full bg-white rounded-2xl shadow p-4 mt-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#0056a6]">
          🎉 Khuyến mãi Online
        </h2>
        <button
          className="text-sm text-[#0056a6] hover:underline hover:cursor-pointer"
          onClick={() => setActiveCate("Tất cả")}
        >
          Xem tất cả
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 mb-3 ">
        {categories1.map((cate) => (
          <button
            key={cate}
            onClick={() => setActiveCate(cate)}
            className={`hover:cursor-pointer flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeCate === cate
                ? "bg-[#0056a6] text-white border-[#0056a6]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cate}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredProducts.slice(0, 10).map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-xl border-[1px] border-gray-300  hover:shadow-lg hover:cursor-pointer transition p-4 flex flex-col items-center text-center gap-2"
          >
            {product.isHot && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-semibold px-2 py-[2px] rounded-full z-50">
                Giá sốc
              </span>
            )}

            <div className="w-full h-[163px] leading-[163px] mb-[10px] relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[95%] object-contain mt-2 mx-[4.275px] transition-all duration-300 ease-in-out hover:scale-105"
              />

              <img
                src="https://cdn.tgdd.vn/2023/10/campaign/label-dmx-200x200.png?v=2024"
                alt="image"
                className="w-10 h-10 absolute top-auto bottom-0 left-0 border-0 overflow-clip transition-all duration-300 ease-in-out hover:scale-105"
              />
            </div>

            <h3 className="text-sm font-medium line-clamp-2 min-h-[40px] text-left hover:text-[#288ad6] text-[#1d2939] mb-[8px] leading-[21px] overflow-hidden text-ellipsis">
              {product.name}
            </h3>

            <div className="mt-1 w-full flex flex-col items-start">
              <p className="text-red-600 font-semibold text-[18px]">
                {Math.round(
                  product.price * (1 - product.discount / 100)
                ).toLocaleString()}
                ₫
              </p>
              <div className="w-full flex  items-center">
                <p className="text-gray-400 text-sm line-through">
                  {product.price.toLocaleString()}₫
                </p>
                <span className=" text-sm font-semibold text-red-500 ml-2">
                  -{product.discount}%
                </span>
              </div>
            </div>

            <div className="w-full mt-2 flex items-center justify-start">
              <Star className="w-5 h-5 text-yellow-400" />
              <div className="w-fit pr-[3px] ">
                <span className="ml-1 text-[12px] text-[#667085]">5</span>
              </div>
              <span className="ml-1 text-[12px] text-[#667085]">
                • Đã bán 7,2k
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
