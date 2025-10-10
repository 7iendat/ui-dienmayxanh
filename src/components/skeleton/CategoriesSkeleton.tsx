"use client";
import React from "react";

export default function CategoriesSkeleton() {
  return (
    <div className="hidden md:grid w-full h-auto bg-white mb-5 mt-4 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-2 rounded-[8px] shadow overflow-hidden p-3">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="w-full h-[80px] bg-gray-200 rounded-md animate-pulse"
        />
      ))}
    </div>
  );
}
