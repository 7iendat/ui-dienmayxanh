import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div
      key={product.id}
      className="relative bg-white rounded-[8px] border-[1px] border-[#f2f4f7] md:border-[#eaecf0] hover:shadow-lg hover:cursor-pointer transition p-[10px] flex flex-col text-center flex-shrink-0 basis-2/5 md:basis-1/4 lg:basis-1/5"
      onClick={() => router.push(`/${product.category}/${product.id}`)}
    >
      <div className="w-full h-10">
        <span className="absolute top-2 left-2  text-[#333] text-[10px] md:text-[11px]   p-[3px]  rounded-[2px]  inline-block bg-[#f1f1f1] leading-[12px] ">
          Trả chậm 0% trả trước 0đ
        </span>
      </div>

      <div className="w-full h-[163px] leading-[163px] mb-[10px] relative overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
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

      <h3 className="text-[12px] md:text-sm font-medium line-clamp-2 min-h-[40px] text-left hover:text-[#288ad6] text-[#1d2939] mb-[8px] leading-[21px] overflow-hidden text-ellipsis">
        {product.title}
      </h3>

      <span className="w-fit text-[#333] text-[10px] md:text-[12px] px-[5px] py-1 mr-[5px]  rounded-[2px]  inline-block bg-[#f1f1f1] leading-[12px] ">
        {product.warrantyInformation}
      </span>

      <div className="mt-1 w-full flex flex-col items-start">
        <p className="text-red-600 font-semibold text-sm md:text-[18px]">
          {Math.round(
            product.price * (1 - product.discountPercentage / 100)
          ).toLocaleString()}
          ₫
        </p>
        <div className="w-full flex  items-center">
          <p className="text-gray-400 text-[13px] md:text-sm line-through">
            {product.price.toLocaleString()}₫
          </p>
        </div>
      </div>

      <div className="w-full mt-2 flex items-center justify-start">
        <Star className="w-3.5 h-3.5 text-yellow-400" />
        <div className="w-fit pr-[3px] ">
          <span className="ml-1 text-[12px] text-[#667085]">
            {product.rating}
          </span>
        </div>
        <span className="ml-1 text-[12px] text-[#667085] ">• Đã bán 7,2k</span>
      </div>
    </div>
  );
};

export default ProductCard;
