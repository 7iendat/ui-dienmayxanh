"use client";

import { fakeMenuData } from "@/data/data-fake";
import {
  ChevronRight,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CategoryMenu from "./CategoryMenu";
import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "@/api/categoryApi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full text-sm shadow-md">
      <HeaderTop
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <HeaderMenu />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};

const HeaderTop = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="w-full bg-[#2a83e9] text-white">
      <div className="md:hidden p-2 space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex-shrink-0">
            <div className="bg-yellow-400 rounded-full p-1">
              <img
                src="./logo.png"
                alt="logo"
                className="h-8 w-8 object-contain"
              />
            </div>
          </Link>

          <div className="flex-grow bg-[#5194e8] rounded-full h-9 flex items-center px-3 text-xs cursor-pointer">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">Hồ Chí Minh</span>
            <ChevronRight className="h-4 w-4 ml-auto flex-shrink-0" />
          </div>

          <Link
            href="/"
            className="flex-shrink-0 bg-[#5194e8] rounded-full h-9 flex items-center px-3 text-xs"
          >
            <User className="h-4 w-4 mr-1" />
            <span>Đăng nhập</span>
          </Link>
        </div>

        <div className="bg-white rounded-full h-11 flex items-center p-1">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col items-center justify-center text-[#2a83e9] w-16"
          >
            <Menu className="h-5 w-5" />
            <span className="text-[10px] font-semibold">MENU</span>
          </button>

          <div className="w-[1px] h-6 bg-gray-200" />

          <form className="relative flex-grow flex items-center h-full px-2">
            <Search className="absolute left-3 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="pl-7 w-full h-full text-sm text-black outline-none bg-transparent"
            />
          </form>

          <Link href="/" className="p-2 text-gray-600">
            <ShoppingCart className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <img src="./logo.png" alt="logo" className="h-10 w-auto" />
          </Link>
        </div>

        <div className="flex items-center gap-4 h-[60px]">
          <CategoryMenu />

          <form className="relative flex items-center w-[300px] h-[40px] rounded-3xl bg-white shadow-sm overflow-hidden">
            <Search className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Nhập..."
              className="pl-8 pr-3 w-full text-[12px] text-black placeholder-[#4593ec] h-full outline-none rounded-3xl"
            />
          </form>

          <Link
            href={"/"}
            className="px-[5px] mx-2.5 rounded-4xl text-sm flex items-center hover:bg-[#2871d5] h-[42px]"
          >
            <User className="h-5 w-5 mr-2" /> Đăng nhập
          </Link>

          <Link
            href={"/"}
            className="px-[5px] rounded-4xl text-sm flex items-center hover:bg-[#2871d5] h-[42px] leading-[42px]"
          >
            <ShoppingCart className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Giỏ hàng</span>
          </Link>

          <div className="w-[266px] bg-[#5194e8] rounded-3xl h-[42px] inline-flex justify-between items-center px-4 hover:bg-[#2871d5] cursor-pointer">
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Hồ Chí Minh</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

const HeaderMenu = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategory,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className="hidden md:block w-full bg-[#eaecf0] h-[32px] text-center">
      <div className="max-w-7xl mx-auto h-full px-4">
        <ul className="flex flex-nowrap h-full justify-center items-center">
          {data?.slice(0, 10).map((d, i) => (
            <Link
              key={i}
              href={"/"}
              className="text-sm text-[#0567da] transition px-[10px] leading-4"
            >
              {d.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      onClick={onClose}
    >
      <div
        className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-lg p-5 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">Menu</h2>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-100"
          >
            <User className="h-5 w-5 text-gray-700" />
            <span className="font-medium text-gray-800">
              Đăng nhập / Đăng ký
            </span>
          </Link>
          <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <MapPin className="h-5 w-5 text-gray-700" />
            <span className="font-medium text-gray-800">Hồ Chí Minh</span>
          </div>

          <hr />

          <h3 className="text-gray-500 font-bold mt-4">Danh mục tin tức</h3>
          {fakeMenuData.map((d, i) => (
            <Link
              key={i}
              href={d.path}
              className="p-2 rounded hover:bg-gray-100 text-gray-700"
              onClick={onClose}
            >
              {d.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
