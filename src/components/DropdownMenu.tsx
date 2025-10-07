import { categories } from "@/data/data-fake";
import React from "react";

const DropdownMenu = () => {
  return (
    <div className="w-xl bg-white absolute top-[calc(100%+14px)] left-0 rounded-md shadow-md text-gray-600 px-6 py-4">
      <div className="grid grid-cols-3 gap-6">
        {categories?.map((c) => (
          <div className="gap-2">
            <h2 className="font-bold text-sm hover:text-[#0772eb] hover:cursor-pointer">
              {c.name}
            </h2>
            <ul>
              {c.subcategories.map((subc) => (
                <li className="hover:cursor-pointer ml-2 text-gray-500 hover:text-gray-600">
                  {subc.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
