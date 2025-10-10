"use client";

import { getAllProduct, getProductById } from "@/api/productApi";
import CarouselProduct from "@/components/CarouselProduct";
import ExtractInfor from "@/components/ExtractInfor";
import ProductInfor from "@/components/ProductInfor";

import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { Span } from "next/dist/trace";
import { useParams } from "next/navigation";

import React from "react";

const ProductDetail = () => {
  const { id } = useParams();

  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
  });

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(Number(id)),
    enabled: !!id,
  });

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error...</span>;
  // console.log("=> ", product);
  return (
    <div className="pt-2.5">
      <div className=" flex flex-col items-starts md:flex-row  md:items-center justify-start">
        <h1 className="text-base md:text-[20px] px-2.5 mb-2.5 md:mr-2.5 md:mb-[5px] font-bold">
          {product?.title}
        </h1>
        <div className="hidden md:block">
          <img
            src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/DMX/Product/label-only.png"
            alt={product?.title}
            className="rounded-[8px] mr-[5px] mb-[5px] align-middles w-[172px] h-5"
          />
        </div>
        <div className="flex items-center justify-center px-2.5 mb-2.5">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-[#98a2b3] md:text-sm mr-3 ml-1">
            Đã bán 7,2k
          </span>
        </div>
      </div>

      <div className="mt-2.5 pt-[5px] grid md:grid-cols-[59%_38%] gap-7 w-full">
        <ProductInfor product={product} />
        <ExtractInfor />
      </div>

      <div className="md:mt-5 px-2.5 pt-[15px] pb-[5px] md:p-[15px] bg-white md:rounded-[12px] md:mb-5">
        <p className="text-base font-bold mb-[15px]">
          <span>Sản phẩm thường mua cùng</span>
        </p>

        {productsError ? (
          <span>Fecth products error</span>
        ) : (
          <CarouselProduct isLoading={productsLoading} data={products} />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
