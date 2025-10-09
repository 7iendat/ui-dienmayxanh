import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full border-t border-solid border-[#e2e2e2] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-[#1d2939] text-[12px] md:text-sm">
            <p className="font-semibold">Tổng đài hỗ trợ</p>

            <div className="space-y-2 mt-3">
              <p>
                <span>Gọi mua: </span>
                <Link href="/" className="text-[#2f80ed] font-bold">
                  1900 232 461
                </Link>{" "}
                (8:00 - 21:30)
              </p>
              <p>
                <span>Khiếu nại: </span>
                <Link href="/" className="text-[#2f80ed] font-bold">
                  1900 232 462
                </Link>{" "}
                (8:00 - 21:30)
              </p>
              <p>
                <span>Bảo hành: </span>
                <Link href="/" className="text-[#2f80ed] font-bold">
                  1900 232 463
                </Link>{" "}
                (8:00 - 21:30)
              </p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-gray-300 md:hidden"></div>

          <div className="hidden md:block text-[#1d2939] text-sm">
            <p className="font-semibold mb-3">Về công ty</p>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#2f80ed] transition">
                  Giới thiệu công ty (MWG.vn)
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#2f80ed] transition">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#2f80ed] transition">
                  Gửi góp ý, khiếu nại
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block text-[#1d2939] text-sm">
            <p className="font-semibold mb-3">Thông tin khác</p>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#2f80ed] transition">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#2f80ed] transition">
                  Tích điểm Quà tặng VIP
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#2f80ed] transition">
                  Xem bản mobile
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block text-[#1d2939] text-sm">
            <p className="font-semibold mb-3">Website cùng tập đoàn</p>
            <div className="space-y-2">
              <p>
                <Link href="/" className="hover:text-[#2f80ed] transition">
                  thegioididong.com
                </Link>
              </p>
              <p>
                <Link href="/" className="hover:text-[#2f80ed] transition">
                  bachhoaxanh.com
                </Link>
              </p>
              <p>
                <Link href="/" className="hover:text-[#2f80ed] transition">
                  avakids.vn
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          © 2025 Công ty Cổ phần Thế Giới Di Động
        </div>
      </div>
    </section>
  );
};

export default Footer;
