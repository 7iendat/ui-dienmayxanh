import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className=" w-full border-t border-solid border-[#e2e2e2] relative pb-3">
      <div className="max-w-7xl mx-2 sm:mx-auto">
        <div className=" max-w-7xl mx-2 sm:mx-auto pt-[15px] pb-[5px]">
          <div className="relative float-left w-full  sm:w-[24%]">
            <div className="text-[#1d2939] text-sm">
              <p>
                <strong>Tổng đài hỗ trợ</strong>
              </p>
              <p className="leading-[21px] mt-2.5">
                <span className="">Gọi mua:</span>
                <Link href={"/"} className="text-[#2f80ed] font-bold">
                  1900 232 461
                </Link>
                {"(8:00 - 21:30)"}
              </p>
              <p className="leading-[21px] mt-2.5">
                <span className="">Gọi mua:</span>
                <Link href={"/"} className="text-[#2f80ed] font-bold">
                  1900 232 461
                </Link>
                {"(8:00 - 21:30)"}
              </p>
              <p className="leading-[21px] mt-2.5">
                <span className="">Gọi mua:</span>
                <Link href={"/"} className="text-[#2f80ed] font-bold">
                  1900 232 461
                </Link>
                {"(8:00 - 21:30)"}
              </p>
            </div>
          </div>

          <div className="w-[19%] float-left hidden sm:block">
            <div className="w-full">
              <p className="text-[#1d2939] text-sm mb-2.5">
                <strong>Về công ty</strong>
              </p>

              <p>
                <Link href={"/"} className="text-[#1d2939] text-sm  mb-2.5">
                  Giới thiệu công ty (MWG.vn)
                </Link>
              </p>

              <p>
                <Link href={"/"} className="text-[#1d2939] text-sm  mb-2.5">
                  Giới thiệu công ty (MWG.vn)
                </Link>
              </p>
              <p>
                <Link href={"/"} className="text-[#1d2939] text-sm  mb-2.5">
                  Giới thiệu công ty (MWG.vn)
                </Link>
              </p>
            </div>
          </div>

          <div className="w-[19%] float-left hidden sm:block">
            <div className="w-full">
              <p className="text-[#1d2939] text-sm mb-2.5">
                <strong>Thong tin khac</strong>
              </p>

              <p>
                <Link href={"/"} className="text-[#1d2939] text-sm  mb-2.5">
                  Giới thiệu công ty (MWG.vn)
                </Link>
              </p>

              <p>
                <Link href={"/"} className="text-[#1d2939] text-sm  mb-2.5">
                  Tích điểm Quà tặng VIP
                </Link>
              </p>
              <p>
                <Link href={"/"} className="text-[#1d2939] text-sm  mb-2.5">
                  Giới thiệu công ty (MWG.vn)
                </Link>
              </p>
              <p>
                <Link href={"/"} className="text-[#1d2939] text-sm  mb-2.5">
                  Tích điểm Quà tặng VIP
                </Link>
              </p>
              <p>
                <Link href={"/"} className="text-[#1d2939] text-sm  mb-2.5">
                  Tích điểm Quà tặng VIP
                </Link>
              </p>
            </div>
          </div>

          <div className="w-[29%] float-left hidden sm:block">
            <div className="w-full">
              <p className="text-[#1d2939] text-sm mb-2.5">
                Website cùng tập đoàn
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
