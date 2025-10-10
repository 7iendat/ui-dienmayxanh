import React from "react";
import PromoProductDetail from "./PromoProductDetail";
import Link from "next/link";

const ListPromo = () => {
  return (
    <div className="md:px-2.5 pt-[15px] md:pb-2.5 ">
      <PromoProductDetail />
      <PromoProductDetail />
      <PromoProductDetail />

      <div className="border-t border-solid border-[#e0e0e0] pt-2.5 pb-[12px] md:ml-[12px] mr-2.5 ml-2.5">
        <p className="text-[#344054] text-sm">Hình quà khuyến mãi</p>
        <div className="overflow-x-auto overflow-y-hidden ">
          <div className="mt-[5px] ">
            <div>
              <div className="w-[137px] ">
                <div className="w-[136.133px] mr-[5px] border rounded-[8px] border-solid border-[#e0e0e0] p-2 flex">
                  <Link href={"/"} className="">
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/2403/326661/ch…tu-20-cm-sunhouse-sh20g-140624-104112-600x600.jpg"
                      alt="img Chảo nhôm chống dính vân đá đáy từ 20 cm Sunhouse SH20G"
                      className="w-10 h-10 overflow-clip cursor-pointer"
                    />
                  </Link>

                  <div className="text-[#333] text-[12px] overflow-hidden ml-[3px]">
                    <p className="text-[#344054] text-xs overflow-hidden line-clamp-2  ">
                      Chảo nhôm chống dính vân đá đáy từ 20 cm Sunhouse SH20G
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPromo;
