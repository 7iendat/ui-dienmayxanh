import Link from "next/link";
import React from "react";

const BannerBrand = () => {
  return (
    <section className="w-full my-5">
      <div className="text-[#1d2939] text-[24px] leading-8 font-bold">
        TUẦN LỄ THƯƠNG HIỆU
      </div>

      {/* Desktop */}
      <div className="hidden md:block w-full bg-transparent pt-[10px] rounded-[12px]">
        <Link href={"/"}>
          <img
            src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/9a/a1/9aa10b0d675ebf93fa5d580203fde48c.png"
            alt="brand"
            className="w-full rounded-lg"
          />
        </Link>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-wrap justify-evenly">
        <Link href={"/"}>
          <img
            src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/3c/5c/3c5c8ba7651a913671da7ce3eafc2435.png"
            alt="brand"
            className="w-[95%] overflow-clip mr-[3px]"
          />
        </Link>
      </div>
    </section>
  );
};

export default BannerBrand;
