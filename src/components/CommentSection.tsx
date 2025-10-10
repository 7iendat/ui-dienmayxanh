import { products } from "@/data/data-fake";
import { CircleQuestionMark, Star } from "lucide-react";
import React from "react";
import RateReview from "./RateReview";
import CommentDetail from "./CommentDetail";

const CommentSection = ({ title, reviews, rating }) => {
  return (
    <div className="bg-white md:rounded-[12px]   md:p-[30px] md:mt-5 md:mb-10 px-2.5">
      <div>
        <h2 className="text-base font-bold">Đánh giá {title}</h2>
        <div className="md:mt-[30px] mt-2.5 flex ">
          <div className="w-[50%] md:w-[25%] flex flex-col justify-center items-center">
            <div className="my-1 flex items-baseline">
              <Star className="w-[18px] h-[18px] text-yellow-500 mx-1" />
              <div className="flex items-baseline">
                <span className="text-[#101828] text-4xl font-bold">
                  {rating}
                </span>
                <span className="text-[#98a2b3] text-sm ">/5</span>
              </div>
            </div>

            <div className="flex md:items-center ">
              <p className="text-[#333] text-sm font-medium mr-1.5 ">
                601 khách hài lòng
              </p>
              <CircleQuestionMark className="w-4 h-4 text-[#a5aebd]" />
            </div>
            <span className="text-[#98a2b3] text-sm font-normal">
              3 đánh giá
            </span>
          </div>

          <div className="flex-1">
            <RateReview quantity={5} rate={96.3} />
            <RateReview quantity={4} rate={0} />
            <RateReview quantity={3} rate={0} />
            <RateReview quantity={2} rate={0} />
            <RateReview quantity={1} rate={0} />
          </div>
        </div>

        <div className="text-[#a5aebd]">
          <div className="text-[#222b45] mt-5 max-w-[680px] text-left">
            <CommentDetail review={reviews[0]} />

            <div className="mt-[15px] md:mt-[25px] flex justify-between">
              <button className="p-2.5 bg-white md:py-3.5 md:px-2.5 border border-solid border-[#3e3e3f] text-[#3e3e3f] rounded-lg cursor-pointer text-[15px] w-[49%] hover:bg-[#3e3e3f] hover:text-white leading-[17px] ">
                Xem 3 đánh giá
              </button>
              <button className="bg-[#0071e3] p-2.5 md:py-3.5 md:px-2.5  border border-solid border-[#0071e3] text-white rounded-lg cursor-pointer text-[15px] w-[49%] leading-[17px] hover:bg-transparent hover:text-[#0071e3]">
                Viết đánh giá
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
