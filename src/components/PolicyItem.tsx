import React from "react";

const PolicyItem = () => {
  return (
    <div className="md:py-[12px] flex items-center ">
      <div>
        <img
          src="https://cdnv2.tgdd.vn/pim/cdn/images/202410/icon%20bao%20hanh170837.png"
          alt="chính sách bảo hành"
          className="w-8 h-8"
        />
      </div>
      <div className="md:text-sm leading-[20px] md:ml-2.5 ">
        <p className="leading-[20px] md:pl-[5px]">Bảo hành máy nén 20 năm</p>
      </div>
    </div>
  );
};

export default PolicyItem;
