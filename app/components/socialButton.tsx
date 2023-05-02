"use client";
import { PropsWithChildren } from "react";
import { IconContext } from "@phosphor-icons/react";
import Link from "next/link";

type Props = {
  name: string;
  href: string;
};

export const SocialButton = ({
  name,
  href,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <IconContext.Provider
      value={{
        size: 24,
        className: "fill-gray-200 group-hover:fill-gray-800",
      }}
      key={name}
    >
      <Link
        href={href}
        className="group p-4 border border-gray-800 hover:border-gray-600 hover:bg-gray-200 text-gray-100 hover:text-gray-800 rounded-full transition-all duration-200"
      >
        {children}
      </Link>
    </IconContext.Provider>
  );
};
