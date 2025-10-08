"use client";

import { categories } from "@/data/data-fake";
import Image from "next/image";
import React, { useState } from "react";

const DropdownMenu = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-xl bg-white absolute top-[calc(100%+14px)] left-0 rounded-md shadow-md text-gray-600 px-6 py-4 flex z-50">
      <div className="w-48 border-r bg-gray-50">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActive(idx)}
            className={`px-4 py-2 cursor-pointer text-sm hover:bg-blue-100 ${
              active === idx ? "bg-blue-100 text-blue-600 font-medium" : ""
            }`}
          >
            {cat.name}
          </div>
        ))}
      </div>

      <div className="p-4 grid grid-cols-[repeat(3,90px)] gap-3">
        {categories[active!]?.subcategories.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-start w-[90px] gap-1 py-2 px-2 rounded-md hover:bg-blue-50 cursor-pointer transition-colors duration-150"
          >
            <img
              src="https://cdnv2.tgdd.vn/mwg-static/common/Common/0a/b9/0ab938f5b5b2993d568351bceb721407.png"
              width={40}
              height={40}
              alt="Image"
              className="object-contain"
            />
            <span className="text-xs text-gray-700 text-center  w-full h-auto">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
