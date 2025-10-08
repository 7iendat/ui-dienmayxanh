"use client";
import { fakeMenuData } from "@/data/data-fake";
import {
  ChevronRight,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";
import CategoryMenu from "./CategoryMenu";

const Header = () => {
  return (
    <div className="w-full text-sm">
      <HeaderTop />
      <HeaderMenu />
    </div>
  );
};

const HeaderTop = () => {
  return (
    <header className="w-full bg-[#2a83e9] text-white flex justify-center">
      <div className="max-w-7xl mx-auto ">
        <div className="max-w-7xl mx-auto w-full h-16 flex items-center justify-between px-4 ">
          <div className="flex items-center w-[220px]">
            <span className="font-semibold text-lg">Logo</span>
          </div>

          <CategoryMenu />

          <div className="flex items-center gap-4 h-[60px]">
            <form className="relative flex items-center w-[300px] h-[40px] rounded-3xl bg-white shadow-sm overflow-hidden">
              <Search className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
              <div
                className="w-[calc(100% - 16px)] h-full text-[#2a83e9]"
                style={{ marginLeft: 32 }}
              >
                <input
                  type="text"
                  placeholder="Nhập..."
                  className=" w-full h-full outline-none rounded-3xl"
                />
              </div>
            </form>

            <div className="inline-flex items-center cursor-pointer hover:opacity-90">
              <User className="h-4 w-4 mr-2" /> Đăng nhập
            </div>

            <div className="inline-flex items-center cursor-pointer hover:opacity-90">
              <ShoppingCart className="h-4 w-4 mr-2" /> Giỏ hàng
            </div>

            <div className="w-[266px] bg-[#5194e8] rounded-3xl h-[42px] inline-flex justify-between items-center px-4 hover:bg-[#0f71ea] cursor-pointer">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Hồ Chí Minh</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeaderMenu = () => {
  return (
    <div className="w-full bg-[#eaecf0] h-8 ">
      <div className="w-[80%] h-full flex items-center justify-between mx-auto ">
        {fakeMenuData.slice(0, 15).map((d) => (
          <Link href={d.path} className="text-sm text-[#0567da]">
            {d.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
