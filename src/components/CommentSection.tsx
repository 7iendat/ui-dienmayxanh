import { products } from "@/data/data-fake";
import { Star } from "lucide-react";
import React from "react";

const CommentSection = ({ title, reviews, rating }) => {
  return (
    <div className="bg-white md:rounded-[12px]  md:px-3 md:p-[30px] md:mt-5 md:mb-10">
      <div>
        <h2 className="text-base font-bold">Đánh giá {title}</h2>
        <div className="md:mt-[30px] ">
          <div className="md:w-[25%] flex flex-col justify-center">
            <div className="md:my-1 flex items-baseline">
              <Star className="w-[18px] h-[18px] text-yellow-500 md:mx-1" />
              <div className="flex items-baseline">
                <span className="text-[#101828] md:text-4xl font-bold">
                  {rating}
                </span>
                <span className="text-[#98a2b3] md:text-sm ">/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
