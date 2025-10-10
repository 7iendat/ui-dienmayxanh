import { CheckCircle, CheckCircle2, CircleDot } from "lucide-react";
import React from "react";

const ServiceOption = () => {
  return (
    <div className="mb-2.5 py-2.5 px-2.5 bg-[#f1f8fe] border border-solid border-[#64b2fa] cursor-pointer overflow-hidden rounded-[8px] flex items-start justify-center">
      <div className="h-auto w-5 mr-3">
        <CircleDot className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#2a83e9]" />
      </div>
      <div className="w-full">
        <div className="text-sm flex items-center justify-between ">
          <b>Gói dịch vụ 1</b>
          <div className="flex items-center">
            <em className="text-[#98a2b3] text-xs mr-[5px] ">5.890.000₫</em>
            <b className="text-[#d92d20] text-[15px]">4.270.000₫</b>
          </div>
        </div>
        <div className="md:mt-2.5 flex items-center">
          <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#039855] mr-2" />
          <span className="text-sm text-[#333]">Gói tiêu chuẩn</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceOption;
