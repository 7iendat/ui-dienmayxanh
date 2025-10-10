import React from "react";
import PolicyItem from "./PolicyItem";
import { ChevronDown } from "lucide-react";
import CommentSection from "./CommentSection";

const ProductInfor = ({ product }) => {
  return (
    <div>
      <aside className="p-[15px] w-full h-[287px] md:h-[490px] bg-white mb-5 md:rounded-[12px] flex justify-center">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-[calc(100%-40px)] h-full md:h-[380px] overflow-clip "
        />
      </aside>

      <div className="bg-white md:rounded-[12px] md:mb-[25px] md:px-3 md:pt-[25px] p-[12px]">
        <h2 className="text-[#101828] text-base font-bold mb-[15px]">
          Điện Máy XANH cam kết
        </h2>

        <div className="grid md:grid-cols-2">
          <PolicyItem />
          <PolicyItem />
          <PolicyItem />
          <PolicyItem />
          <PolicyItem />
          <PolicyItem />
        </div>
      </div>

      <div className="bg-white md:rounded-[12px] md:mb-[25px] md:px-3 md:pt-[25px] px-2.5 ">
        <div className="pt-5 md:pb-[15px] bg-white flex items-center justify-evenly my-[12px] md:my-0">
          <button className="border cursor-pointer border-[#e5e5e5] border-solid text-[#3a3a3a] mr-[15px] py-2.5 w-[49%] font-semibold rounded-[8px]">
            Thông số kỹ thuật
          </button>
          <button className="text-[#2a83e9] border cursor-pointer border-[#bbddfd] border-solid bg-[#f1f8fe] mr-[15px] py-2.5 w-[49%] font-semibold rounded-[8px]">
            Thông tin sản phẩm
          </button>
        </div>

        {/* content */}
        <div className="">
          <div className="px-2.5">
            <h3 className="mt-5 mb-[15px] text-base md:text-xl ">
              {product?.description}
            </h3>
          </div>

          <div className="py-2.5 px-[5px] flex items-center justify-center hover:cursor-pointer">
            <span className="text-[#2f80ed] ">Xem thêm</span>
            <ChevronDown className="w-4 h-4 text-[#2f80ed] " />
          </div>
        </div>
      </div>

      <CommentSection
        title={product.title}
        reviews={product.reviews}
        rating={product.rating}
      />
    </div>
  );
};

export default ProductInfor;
