import Link from "next/link";

export const CategoryItem = ({ cate, isMobile = false }) => {
  const isHot = true;
  return (
    <Link
      href={`/${cate.slug}`}
      className={`relative w-full flex flex-col items-center justify-start hover:bg-gray-100 hover:cursor-pointer transition rounded-lg ${
        isMobile ? "p-1" : "px-2.5 py-4"
      }`}
    >
      {isHot && !isMobile && (
        <span className="absolute top-2 right-[25px] bg-[#ffced2] text-[#dd2f2c] text-[12px] px-[3px] rounded-[5px] shadow">
          3.990k
        </span>
      )}
      <img
        src={
          "https://cdnv2.tgdd.vn/mwg-static/dmx/Common/04/2e/042e6d1427540a418b516a9576e79b20.png"
        }
        alt={cate.name}
        className="w-[47px] h-[47px] object-contain bg-transparent mb-1"
      />
      <span
        className={`text-center leading-tight my-[2px] mx-auto ${
          isMobile ? "text-xs" : "text-sm"
        }`}
      >
        {cate.name}
      </span>
    </Link>
  );
};
