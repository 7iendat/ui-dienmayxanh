import { fakePopularSearches } from "@/data/data-fake";
import Link from "next/link";
import React from "react";

const SearchTrend = () => {
  return (
    <section className="w-full bg-white my-2.5  rounded-[8px] px-2.5 py-[15px] md:p-5 mt-5">
      <div className="w-full">
        <p className="text-[18px] md:text-2xl  font-bold text-[#1d2939]">
          Mọi người cũng tìm kiếm
        </p>
        <div className="mt-3 overflow-x-auto scrollbar-hide">
          <div className="grid grid-rows-3 grid-flow-col gap-2 md:flex md:flex-wrap">
            {fakePopularSearches.map((ps, index) => (
              <Link
                key={index}
                href="/"
                className="bg-[#f2f4f7] rounded-2xl py-[6px] px-[12px] text-[#1d2939] text-sm whitespace-nowrap hover:bg-[#e4e7eb] transition inline-block flex-shrink-0"
              >
                {ps.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchTrend;
