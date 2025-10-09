"use client";

import { Menu } from "lucide-react";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const CategoryMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className="h-full flex items-center cursor-pointer w-auto "
        style={{ marginRight: 12 }}
      >
        <Menu className="h-5 w-5 mr-2" />
        <span>Danh mục</span>
      </div>

      {open && <div className="absolute top-full left-0 w-full h-[16px] " />}
      {open && <DropdownMenu />}
    </div>
  );
};

export default CategoryMenu;
