import React from "react";
import PolicyItem from "./PolicyItem";
import { ChevronDown } from "lucide-react";
import CommentSection from "./CommentSection";

const ProductInfor = ({ product }) => {
  return (
    <div>
      <aside className="p-[15px] w-full h-[490px] bg-white mb-5 md:rounded-[12px]">
        <img
          src={product.images[0]}
          alt={product.title}
          className="md:w-[calc(100%-40px)] md:h-[380px]"
        />
      </aside>

      <div className="bg-white md:rounded-[12px] md:mb-[25px] md:px-3 md:pt-[25px]">
        <h2 className="text-[#101828] text-base font-bold md:mb-[15px]">
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

      <div className="bg-white md:rounded-[12px] md:mb-[25px] md:px-3 md:pt-[25px]">
        <div className="md:pt-5 md:pb-[15px] bg-white flex items-center justify-evenly">
          <button className="border cursor-pointer border-[#e5e5e5] border-solid text-[#3a3a3a] md:mr-[15px] md:py-2.5 md:w-[245px] font-semibold rounded-[8px]">
            Thông số kỹ thuật
          </button>
          <button className="text-[#2a83e9] border cursor-pointer border-[#bbddfd] border-solid bg-[#f1f8fe] md:mr-[15px] md:py-2.5 md:w-[245px] font-semibold rounded-[8px]">
            Thông tin sản phẩm
          </button>
        </div>

        {/* content */}
        <div>
          <div className="md:px-2.5">
            <h3 className="md:mt-5 md:mb-[15px] md:text-xl ">
              {product?.description}
            </h3>
          </div>

          <div className="md:py-2.5 md:px-[5px] flex items-center justify-center hover:cursor-pointer">
            <span className="md:text-[#2f80ed] ">Xem thêm</span>
            <ChevronDown className="w-4 h-4 md:text-[#2f80ed] " />
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
