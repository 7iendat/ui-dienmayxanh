import React from "react";
import BannerBrand from "./BannerBrand";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  MapPin,
  Phone,
  ShoppingCart,
  Store,
} from "lucide-react";
import ServiceOption from "./ServiceOption";
import ListPromo from "./ListPromo";

const ExtractInfor = () => {
  return (
    <div className=" ">
      <div className="bg-white md:p-[15px]  md:rounded-[12px]">
        <div className="mx-2.5 mb-2.5 md:mb-2.5 ">
          <Link href={"/"}>
            <img
              src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/04/df/04df9206ab4181edf32148287885d9d8.gif"
              alt="banner"
              className="md:max-w-full h-auto"
            />
          </Link>
        </div>

        <div className="mb-2.5">
          <div className=" mb-2.5 px-2.5 md:px-0">
            <button className="border-[#bbddfd] text-[#2a83e9] bg-[#f1f8fe] p-2 md:py-[12px] md:px-[15px] mr-0.5 md:mb-[5px] text-[13px] md:text-sm border rounded-[8px] min-w-[67px] max-w-[120px]">
              9 KG
            </button>
            <button className="border-[#eaecf0] text-[13px] text-[#333] bg-transparent md:py-[12px] md:px-[15px] md:mr-0.5 md:mb-[5px] md:text-sm border rounded-[8px] p-2 min-w-[67px] max-w-[120px]">
              10 KG
            </button>
          </div>
        </div>

        <div>
          <div className="leading-4 px-2.5 md:px-0 mb-2.5 text-[#344054]  text-sm flex items-center">
            <span className="mr-1">Giá tại</span>
            <Link
              href={"/"}
              className="text-[#2f80ed] md:pr-5 flex items-center"
            >
              <span>Thành phố Hồ Chí Minh</span>
              <ChevronDown className="md:w-5 md:h-5" />
            </Link>
          </div>

          <div className="mx-[2.5px] mb-[2.5px] pb-2.5 px-[5px] md:px-0">
            <b className=" md:mb-2.5 text-[15px]">Loại dịch vụ lắp đặt</b>
            <ServiceOption />
            <ServiceOption />
          </div>

          <div className="mb-2.5">
            <div className="md:rounded-[8px] md:border border-solid border-b  border-[#e0e0e0] mb-2.5 px-2.5 pt-2.5 pb-[1px] md:p-0 ">
              <div className="bg-[#f9fafb] md:border-b-[#eaecf0] rounded-t-[8px] md:py-2 md:px-2.5">
                <p className="text-[#101828] text-base font-bold">
                  Khuyến mãi trị giá 120.000₫
                </p>
                <i className="text-[#667085] text-sm mt-[5px] ">
                  Giá và khuyến mãi dự kiến áp dụng đến 23:59 | 31/10
                </i>
              </div>

              <div>
                <ListPromo />
              </div>
            </div>
          </div>

          <div className="border-t-8 border-[#f2f4f7] border-b-4 md:border-b border-solid md:border-[#eaecf0] mb-2.5 pt-2.5 md:pt-0 ">
            <p className="text-[#2a83e9] md:mb-[5px] mb-2.5 px-2.5 md:px-0">
              <Link href={"/"} className="flex items-center">
                <MapPin className="w-4 h-4 text-[#444]" />
                <span className="text-sm ">
                  Chọn địa chỉ nhận hàng để biết thời gian giao.
                </span>
              </Link>
            </p>
          </div>

          <div className="mb-2.5">
            <div className="flex items-center text-sm px-2.5 md:px-0">
              <p>
                <b>+8.540</b> điểm tích lũy Quà Tặng VIP
              </p>
              <div className="ml-[5px] w-[15px] h-[15px] border border-solid border-[#667085] rounded-full text-center text-[10px] cursor-pointer">
                ?
              </div>
            </div>
          </div>

          <div className="pb-2.5 md:pb-0 md:mb-2.5 px-2.5 md:px-0">
            <div className="flex justify-between ">
              <button className="border border-solid border-[#2a83e9] bg-white py-[7px] md:px-2.5 w-[48.5%] text-[#2a83e9] rounded-[8px] text-sm  md:text-[15px] flex flex-col items-center justify-center">
                <ShoppingCart className="w-4 h-4" />
                <span>Thêm vào giỏ</span>
              </button>
              <button className="border border-solid border-[#fc7600] bg-[#fc7600] py-[15px] px-2.5 w-[48.5%] text-white rounded-[8px] text-sm md:text-[15px] text-center">
                Mua ngay
              </button>
            </div>
            <div className="py-[9px] px-2.5 rounded-[8px] w-full bg-[#2f80ed] text-white text-[13px] text-center mt-2.5">
              <p className="flex justify-center">
                Mua trả chậm 0% <ChevronRight className="w-4 h-4" />
              </p>
              <p className="text-[#bbddfd] mt-[2px] text-[12px]">
                Qua thẻ tín dụng, nhà tài chính, mua trước trả sau
              </p>
            </div>
          </div>

          <p className="mb-2.5 text-sm flex items-center px-2.5 md:px-0">
            <Phone className="w-[15px] h-[15px] mr-1" />
            Gọi đặt mua
            <Link href={"/"} className="text-[#2a83e9]">
              1900 232 461
            </Link>
            (8:00 - 21:30)
          </p>

          <Link
            href={"/"}
            className="text-[#2f80ed] mb-2.5 text-sm flex items-center px-2.5 md:px-0 "
          >
            <Store className="w-4 h-4 text-[#444] mr-1" />
            <span>Xem siêu thị có hàng trưng bày</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExtractInfor;
