"use client";

import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="overflow-hidden relative duration-200 border rounded-xl group md:gap-8 hover:border-gray-600 border-gray-800">
      {children}
    </div>
  );
};
