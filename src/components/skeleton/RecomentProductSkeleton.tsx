"use client";
import React from "react";

export default function RecomentProductSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-[8px] md:gap-[10px] w-full md:px-5 px-2.5 pb-[15px]">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-full h-[200px] bg-gray-200 rounded-md animate-pulse"
        />
      ))}
    </div>
  );
}
