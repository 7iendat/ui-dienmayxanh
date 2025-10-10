"use client";

import { getProductLimit } from "@/api/productApi";
import { useQuery } from "@tanstack/react-query";

import Link from "next/link";
import React from "react";

import CarouselProduct from "./CarouselProduct";

const MonopolyProduct = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", 5, 5],
    queryFn: () => getProductLimit(5, 5),
  });
  if (isError) return <p>Error</p>;

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

        <CarouselProduct isLoading={isLoading} data={data} />
      </div>
    </section>
  );
};

export default MonopolyProduct;
