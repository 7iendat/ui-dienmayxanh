import React, { JSX } from "react";
import ConfirmBuy from "./ConfirmBuy";
import { HeartIcon, Star, ThumbsUp } from "lucide-react";
import Link from "next/link";

const CommentDetail = ({ review }) => {
  const stars: JSX.Element[] = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-3.5 h-3.5 ml-0.5 ${
          i <= review.rating ? "text-yellow-500" : "text-[#a5aebd]"
        }`}
      />
    );
  }

  const getDiffDays = (dayCreated) => {
    const target = new Date(dayCreated);
    const now = new Date();
    const diffMs = now.getTime() - target.getTime(); // milliseconds
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return diffDays;
  };
  return (
    <div className="md:py-[15px] md:border-b border-[#ebf0f9] border-solid ">
      <div className="flex items-center">
        <p className="text-[#222b45] inline font-bold text-sm leading-4 mr-2.5">
          {review.reviewerName}
        </p>
        <ConfirmBuy />
      </div>

      <div className="mt-2 flex items-center ">
        <div className="mr-2.5 flex items-center">{stars}</div>
        <div className="pl-2.5 text-xs flex items-center">
          <HeartIcon className="w-3.5 h-3.5 text-[#ee1b24] mr-0.5" />
          <span>Sẽ giới thiệu cho bạn bè, người thân</span>
        </div>
      </div>

      <div className="mt-2.5 ">
        <p>{review.comment}</p>
      </div>

      <div className="mt-2.5 flex items-center">
        <Link
          href={"/"}
          className="mr-3 text-xs text-[#222b45] flex items-center"
        >
          <ThumbsUp className="w-[15px] [15px] mr-[5px] text-[#222b45]" />
          <span>Hữu ích (1)</span>
        </Link>

        <span className="text-[#8f9bb3] text-[12px] pl-[12px]">
          Đã dùng khoảng {getDiffDays(review.date)} ngày
        </span>
      </div>
    </div>
  );
};

export default CommentDetail;
