import { useRouter } from "next/navigation";
import React from "react";

const PromoProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div
      key={product.id}
      onClick={() => router.push(`/${product.category}/${product.id}`)}
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
  );
};

export default PromoProductCard;
