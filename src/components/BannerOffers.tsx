import Link from "next/link";
import React from "react";

const linkArr = [
  "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/a6/e5/a6e503e2bbab9b936d6934ae85521431.png",
  "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/0f/c2/0fc2dfd608dcc1cf346fb58b34a8b291.png",
  "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/8a/b9/8ab9a495e089591055e85532e3f02f26.png",
  "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/24/ee/24eee485cc589fe42a48e01b1f19afe0.png",
];

const BannerOffers = () => {
  return (
    <section className="w-full my-5">
      <div className="text-[#1d2939] text-[18px] md:text-[24px] leading-8 font-bold mx-2.5 my-2.5 md:mb-5">
        Gian hàng ưu đãi
      </div>
      {/* Desktop */}
      <div className="hidden md:flex w-full bg-transparent mt-[-10px] rounded-[12px]  items-center justify-between">
        {linkArr.map((l) => (
          <div className="w-[24%] py-[5px] ">
            <Link href={"/"}>
              <img src={l} alt="brand" className="w-full rounded-lg" />
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile */}

      <div className="flex flex-wrap justify-evenly md:hidden">
        {linkArr.map((l) => (
          <div className="w-[45%] py-[5px] ">
            <Link href={"/"}>
              <img src={l} alt="brand" className="w-full " />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerOffers;
