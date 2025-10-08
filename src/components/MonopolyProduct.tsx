"use client";

import { fakeProducts } from "@/data/data-fake";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import React, { useCallback } from "react";

const MonopolyProduct = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <section className="mt-6 bg-white md:rounded-xl shadow-sm p-4 w-full  flex-wrap  ">
      <h3 className="text-[#1d2939] mb-[20px] text-[24px] font-bold">
        Sản Phẩm Đặc Quyền
      </h3>

      <div className="w-full block md:flex items-center h-full">
        <Link
          href={"https://www.dienmayxanh.com/chuong-trinh-hang-dac-quyen"}
          className="w-[380px] mr-[10px] "
        >
          <img
            src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/72/ca/72caf3d7ea3c1738ed1abcfd23e4dc83.png"
            alt="banner"
            className="w-[360px] h-auto"
          />
        </Link>

        <div className="w-full md:max-w-[calc(100%-390px)] h-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {fakeProducts.slice(0, 6).map((product) => (
                <div
                  key={product.id}
                  className="min-w-[200px]  bg-white rounded-[8px] border-[1px] border-[#eaecf0]  hover:shadow-lg hover:cursor-pointer transition p-[10px] flex flex-col  text-center mx-1"
                >
                  <div className="w-full h-10">
                    <span className="absolute top-2 left-2  text-[#333] text-[10px] font-[11px] p-[3px]  rounded-[2px]  inline-block bg-[#f1f1f1] leading-[12px] ">
                      Trả chậm 0% trả trước 0đ
                    </span>
                  </div>

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

                  <p className="bg-gradient-to-r from-[#faab08] to-[#d42611] mb-[5px] rounded-[20px]  overflow-hidden max-w-fit pr-2 relative h-5 text-start flex items-center">
                    <img
                      src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/68/18/6818d5903c1d43a67477566f8d422bdc.png"
                      alt=""
                      className="w-5 max-h-5 float-left cursor-pointer "
                    />
                    <span className="text-white text-[10px] leading-[13px] ml-[3px] pl-[3px] pt-1 overflow-hidden overflow-ellipsis text-nowrap">
                      TRẢ TRƯỚC 0Đ
                    </span>
                  </p>

                  <h3 className="text-sm font-medium line-clamp-2 min-h-[40px] text-left hover:text-[#288ad6] text-[#1d2939] mb-[8px] leading-[21px] overflow-hidden text-ellipsis">
                    {product.name}
                  </h3>

                  <span className="w-fit   text-[#333] text-[10px] font-[11px] px-[5px] py-1 mr-[5px]  rounded-[2px]  inline-block bg-[#f1f1f1] leading-[12px] ">
                    Kim loại giả gương
                  </span>

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
