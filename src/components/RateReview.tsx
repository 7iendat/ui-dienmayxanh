import { Star } from "lucide-react";
import React from "react";

const RateReview = ({ quantity, rate }) => {
  return (
    <div className="flex items-center ">
      <div className="text-sm flex items-center w-[35px]">
        <span>{quantity}</span>
        <Star className="w-2.5 h-2.5 text-yellow-500 ml-[5px]" />
      </div>
      <div className="w-full bg-[#eee] h-1.5 relative">
        <p
          className={` bg-[#64b2fa] rounded-[20px] h-1.5 absolute top-0 left-0`}
          style={{ width: `${rate}px` }}
        />
      </div>
      <span className="text-sm text-[#323232] font-bold pl-2.5 w-[35px]">
        {rate}%
      </span>
    </div>
  );
};

export default RateReview;
