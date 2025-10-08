"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const fakeNews = [
  {
    id: 1,
    name: "km",
    news: [
      {
        id: 11,
        title:
          "Săn 5.000 suất Phiếu mua hàng 500.000đ mua Tủ lạnh/Tủ đông/Tủ mát trên 500 lít",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/dmx/News/Thumb/1578040/Frame%202117129106638949265961422349.jpg",
      },
      {
        id: 12,
        title:
          "Săn 5.000 suất Phiếu mua hàng 500.000đ mua Tủ lạnh/Tủ đông/Tủ mát trên 500 lít",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/dmx/News/Thumb/1578040/Frame%202117129106638949265961422349.jpg",
      },
      {
        id: 13,
        title:
          "Săn 5.000 suất Phiếu mua hàng 500.000đ mua Tủ lạnh/Tủ đông/Tủ mát trên 500 lít",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/dmx/News/Thumb/1578040/Frame%202117129106638949265961422349.jpg",
      },
      {
        id: 14,
        title:
          "Săn 5.000 suất Phiếu mua hàng 500.000đ mua Tủ lạnh/Tủ đông/Tủ mát trên 500 lít",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/dmx/News/Thumb/1578040/Frame%202117129106638949265961422349.jpg",
      },
    ],
  },

  {
    id: 2,
    name: "social",
    news: [
      {
        id: 21,
        title:
          "Săn 5.000 suất Phiếu mua hàng 500.000đ mua Tủ lạnh/Tủ đông/Tủ mát trên 500 lít",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/dmx/News/Article-KV---1200x628638947508568295055.jpg",
      },
      {
        id: 22,
        title:
          "Săn 5.000 suất Phiếu mua hàng 500.000đ mua Tủ lạnh/Tủ đông/Tủ mát trên 500 lít",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/dmx/News/Article-KV---1200x628638947508568295055.jpg",
      },
      {
        id: 23,
        title:
          "Săn 5.000 suất Phiếu mua hàng 500.000đ mua Tủ lạnh/Tủ đông/Tủ mát trên 500 lít",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/dmx/News/Article-KV---1200x628638947508568295055.jpg",
      },
      {
        id: 24,
        title:
          "Săn 5.000 suất Phiếu mua hàng 500.000đ mua Tủ lạnh/Tủ đông/Tủ mát trên 500 lít",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/dmx/News/Article-KV---1200x628638947508568295055.jpg",
      },
    ],
  },
];

const HotNews = () => {
  const [activeBtn, setActiveBtn] = useState("km");
  const [flag, setFlag] = useState(1);
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  return (
    <section className="w-full rounded-[12px] p-5 max-w-[1280px] bg-white my-5">
      <h3 className="text-[#1d2939] mb-[20px] text-[24px] font-bold">
        #CHỦ ĐỀ
      </h3>

      <div className="w-full mt-2.5 flex justify-start">
        <button
          onClick={() => {
            setActiveBtn("km");
            setFlag(1);
          }}
          className={`cursor-pointer  border-2 py-2 px-1.5 border-solid rounded-[8px] mr-[5px] text-sm ${
            activeBtn === "km"
              ? "border-[#2a83e9] text-[#2a83e9] font-bold"
              : "border-[#eaecf0]"
          }`}
        >
          Khuyến mãi
        </button>
        <button
          onClick={() => {
            setActiveBtn("social");
            setFlag(2);
          }}
          className={`cursor-pointer border-2 py-2 px-1.5 border-solid rounded-[8px] mr-[5px] text-sm ${
            activeBtn === "social"
              ? "border-[#2a83e9] text-[#2a83e9] font-bold"
              : "border-[#eaecf0]"
          }`}
        >
          Mạng xã hội Điện máy XANH
        </button>
      </div>

      {/* desktop */}
      <div className="hidden md:flex w-full relative mt-2.5  items-center ">
        {fakeNews[flag]?.news?.map((n) => (
          <Link href={"/"} className="w-[24%] mr-2.5 ">
            <img
              src={n.image}
              alt="image"
              className="w-[280px] h-[160px] rounded-[8px]"
            />
            <p className="overflow-hidden text-[rgba(16, 24, 40, 1)] leading-[20px] text-ellipsis pt-2.5 text-sm">
              {n.title}
            </p>
          </Link>
        ))}
      </div>

      {/* mobile */}
      <div className="block md:hidden mt-2.5 overflow-hidden" ref={emblaRef}>
        <div className="w-[172.2px] flex gap-2">
          {fakeNews[flag]?.news?.map((n, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80%] sm:w-[60%] bg-white rounded-lg"
            >
              <Link href="/" className="block">
                <img
                  src={n.image}
                  alt={n.title}
                  className="max-w-[150px] w-full h-auto object-cover rounded-[9px]"
                />
                <p className="overflow-hidden text-[#101828] leading-[20px] text-ellipsis pt-2.5 px-2 line-clamp-3 text-sm">
                  {n.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-center mx-auto text-[#2a83e9] mt-2.5 py-1.5">
        <Link href={"/"} className="">
          <strong>Xem thêm</strong>
        </Link>
        <ChevronDown />
      </div>
    </section>
  );
};

export default HotNews;
