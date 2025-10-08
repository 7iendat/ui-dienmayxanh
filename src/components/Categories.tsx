import { fakeMenuData } from "@/data/data-fake";
import React from "react";

const Categories = () => {
  return (
    <div className="w-full h-auto bg-white mt-4 grid sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-2 rounded-[8px] shadow overflow-hidden">
      {fakeMenuData.slice(0, 15).map((cate, index) => (
        <div
          key={index}
          className=" relative flex flex-col items-center justify-center hover:bg-[#eaecf0] hover:cursor-pointer transition p-2"
        >
          {cate.isHot && (
            <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-semibold px-2 py-[2px] rounded-full shadow">
              Giá Sốc
            </span>
          )}
          <img
            src={cate.image}
            alt={cate.name}
            className="w-[47px] h-[47px] object-contain bg-transparent"
          />
          <span className="text-center text-sm leading-[18px] my-[2px] mx-auto">
            {cate.name}
          </span>
        </div>
      ))}

      {fakeMenuData.length > 16 && (
        <div className="flex flex-col items-center justify-center hover:bg-gray-400/40 hover:cursor-pointer transition p-2">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-700">+</span>
          </div>
          <span className="text-center text-sm font-medium text-blue-600">
            Xem thêm
          </span>
        </div>
      )}
    </div>
  );
};

export default Categories;
