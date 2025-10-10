import { CheckCircle } from "lucide-react";
import React from "react";

const ConfirmBuy = () => {
  return (
    <div className="text-[#2ba832]  text-xs flex items-center justify-center">
      <CheckCircle className="w-3.5 h-3.5 mt-[-3px] mr-[3px]" />
      <span>Đã mua tại ĐMX</span>
    </div>
  );
};

export default ConfirmBuy;
