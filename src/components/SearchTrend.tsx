import { fakePopularSearches } from "@/data/data-fake";
import Link from "next/link";
import React from "react";

const SearchTrend = () => {
  return (
    <section className="w-full bg-white my-2.5  rounded-[8px] p-5 mt-5">
      <div className="w-full">
        <p className="text-2xl font-bold text-[#1d2939]">
          Mọi người cũng tìm kiếm
        </p>
        <div className="mt-3 overflow-x-auto md:overflow-visible">
          <div className="flex space-x-2 md:flex-wrap md:space-x-0 md:space-y-2 whitespace-nowrap scrollbar-hide">
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
