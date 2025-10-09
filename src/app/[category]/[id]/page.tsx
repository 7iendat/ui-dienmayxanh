"use client";

import { getProductById } from "@/api/productApi";
import ExtractInfor from "@/components/ExtractInfor";
import ProductInfor from "@/components/ProductInfor";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";

import React from "react";

const ProductDetail = () => {
  const { id } = useParams();

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
  console.log("=> ", product);
  return (
    <div className="pt-2.5">
      <div className="flex items-center justify-start">
        <h1 className="text-[20px] mr-2.5 mb-[5px] font-bold">
          {product?.title}
        </h1>
        <img
          src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/DMX/Product/label-only.png"
          alt={product?.title}
          className="rounded-[8px] mr-[5px] mb-[5px] align-middles w-[172px] h-5"
        />
        <div className="flex items-center justify-center">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-[#98a2b3] md:text-sm mr-3 ml-1">
            Đã bán 7,2k
          </span>
        </div>
      </div>

      <div className="mt-2.5 pt-[5px] grid md:grid-cols-[61%_39%] w-full">
        <ProductInfor product={product} />
        <ExtractInfor />
      </div>
    </div>
  );
};

export default ProductDetail;
