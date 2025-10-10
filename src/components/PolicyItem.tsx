import React from "react";

const PolicyItem = () => {
  return (
    <div className="md:py-[12px] py-2.5 flex items-center border-b border-solid border-[#f1f1f1]">
      <div>
        <img
          src="https://cdnv2.tgdd.vn/pim/cdn/images/202410/icon%20bao%20hanh170837.png"
          alt="chính sách bảo hành"
          className="w-8 h-8"
        />
      </div>
      <div className="text-sm leading-[20px] ml-2.5 ">
        <p className="leading-[20px] pl-[5px]">Bảo hành máy nén 20 năm</p>
      </div>
    </div>
  );
};

export default PolicyItem;
