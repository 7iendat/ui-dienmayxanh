"use client";
import React from "react";

export default function PromoProductSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4 mt-4 px-2 md:px-5 pb-[5px]">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-full h-[200px] bg-gray-200 rounded-md animate-pulse"
        />
      ))}
    </div>
  );
}
