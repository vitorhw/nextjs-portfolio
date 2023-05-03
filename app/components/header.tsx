"use client";

import Link from "next/link";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { motion } from "framer-motion";
import {
  LinkedinLogo,
  DribbbleLogo,
  GithubLogo,
  SquaresFour,
  ArrowLeft,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { SocialButton } from "./socialButton";

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/vitorhw",
    icon: <GithubLogo />,
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/vhwdev",
    icon: <DribbbleLogo />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/vitorhw/",
    icon: <LinkedinLogo />,
  },
];

export function Header() {
  const scrollDirection = useScrollDirection();
  const asPath = usePathname();

  return (
    <motion.header
      className={`sticky bg-opacity-0 ${
        scrollDirection === "down" ? "-top-32" : "top-0"
      } p-4 z-[99] max-w-[1700px] w-full mx-auto transition-all duration-500`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`border border-1 border-gray-800 p-4 rounded-full bg-gray-900 bg-opacity-30 backdrop-blur flex flex-row md:grid md:grid-cols-3 items-center justify-between w-full`}
      >
        <div className="hidden md:flex gap-2">
          {asPath?.startsWith("/projects") && (
            <Link
              href="#work"
              className="group p-4 rounded-full transition-all duration-200"
            >
              <ArrowLeft
                size={24}
                className="fill-gray-200 group-hover:fill-gray-100 group-hover:scale-110"
              />
            </Link>
          )}
          {socials.map((social) => (
            <SocialButton
              name={social.name}
              href={social.href}
              key={social.name}
            >
              {social.icon}
            </SocialButton>
          ))}
        </div>

        <div className="flex justify-around items-center">
          <Link href="/">
            <svg
              width="146"
              height="39"
              viewBox="0 0 146 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4 md:ml-0 cursor-pointer"
            >
              <path
                d="M7.86364 7.72727L12.6364 24.1364H12.8182L17.5909 7.72727H24.7273L17.0455 31H8.40909L0.727273 7.72727H7.86364ZM33.2869 7.72727V31H26.9688V7.72727H33.2869ZM35.6449 12.8182V7.72727H55.8722V12.8182H48.8722V31H42.6449V12.8182H35.6449ZM79.7017 19.3636C79.7017 21.9545 79.1979 24.1402 78.1903 25.9205C77.1828 27.6932 75.8229 29.0379 74.1108 29.9545C72.3987 30.8636 70.4896 31.3182 68.3835 31.3182C66.2623 31.3182 64.3456 30.8598 62.6335 29.9432C60.929 29.0189 59.5729 27.6705 58.5653 25.8977C57.5653 24.1174 57.0653 21.9394 57.0653 19.3636C57.0653 16.7727 57.5653 14.5909 58.5653 12.8182C59.5729 11.0379 60.929 9.69318 62.6335 8.78409C64.3456 7.86742 66.2623 7.40909 68.3835 7.40909C70.4896 7.40909 72.3987 7.86742 74.1108 8.78409C75.8229 9.69318 77.1828 11.0379 78.1903 12.8182C79.1979 14.5909 79.7017 16.7727 79.7017 19.3636ZM73.2017 19.3636C73.2017 17.9697 73.0161 16.7955 72.6449 15.8409C72.2812 14.8788 71.7396 14.1515 71.0199 13.6591C70.3078 13.1591 69.429 12.9091 68.3835 12.9091C67.3381 12.9091 66.4555 13.1591 65.7358 13.6591C65.0237 14.1515 64.482 14.8788 64.1108 15.8409C63.7472 16.7955 63.5653 17.9697 63.5653 19.3636C63.5653 20.7576 63.7472 21.9356 64.1108 22.8977C64.482 23.8523 65.0237 24.5795 65.7358 25.0795C66.4555 25.572 67.3381 25.8182 68.3835 25.8182C69.429 25.8182 70.3078 25.572 71.0199 25.0795C71.7396 24.5795 72.2812 23.8523 72.6449 22.8977C73.0161 21.9356 73.2017 20.7576 73.2017 19.3636ZM82.625 31V7.72727H92.6705C94.3977 7.72727 95.9091 8.04167 97.2045 8.67045C98.5 9.29924 99.5076 10.2045 100.227 11.3864C100.947 12.5682 101.307 13.9848 101.307 15.6364C101.307 17.303 100.936 18.7083 100.193 19.8523C99.4583 20.9962 98.4242 21.8598 97.0909 22.4432C95.7652 23.0265 94.2159 23.3182 92.4432 23.3182H86.4432V18.4091H91.1705C91.9129 18.4091 92.5455 18.3182 93.0682 18.1364C93.5985 17.947 94.0038 17.6477 94.2841 17.2386C94.572 16.8295 94.7159 16.2955 94.7159 15.6364C94.7159 14.9697 94.572 14.428 94.2841 14.0114C94.0038 13.5871 93.5985 13.2765 93.0682 13.0795C92.5455 12.875 91.9129 12.7727 91.1705 12.7727H88.9432V31H82.625ZM96.2614 20.3182L102.08 31H95.2159L89.5341 20.3182H96.2614ZM104 31V7.72727H110.318V16.8182H118.682V7.72727H125V31H118.682V21.9091H110.318V31H104Z"
                className="fill-gray-100"
              />
              <circle
                cx="137.5"
                cy="15.5"
                r="7.75"
                className="stroke-gray-100"
                strokeWidth="1.5"
              />
              <path
                d="M140.164 15.1138C140.841 15.1138 141.391 14.5634 141.391 13.887C141.391 13.2105 140.841 12.6602 140.164 12.6602C139.488 12.6602 138.938 13.2105 138.938 13.887C138.938 14.5634 139.488 15.1138 140.164 15.1138Z"
                className="fill-gray-100"
              />
              <path
                d="M134.836 15.1138C135.512 15.1138 136.062 14.5634 136.062 13.887C136.062 13.2105 135.512 12.6602 134.836 12.6602C134.159 12.6602 133.609 13.2105 133.609 13.887C133.609 14.5634 134.159 15.1138 134.836 15.1138Z"
                className="fill-gray-100"
              />
              <path
                d="M137.5 19.4433C135.856 19.4433 134.368 18.4051 133.798 16.8599L132.812 17.2236C133.533 19.1802 135.417 20.4948 137.5 20.4948C139.583 20.4948 141.467 19.1802 142.188 17.2236L141.202 16.8599C140.632 18.4051 139.144 19.4433 137.5 19.4433Z"
                className="fill-gray-100"
              />
            </svg>
          </Link>
        </div>

        <div className="justify-end flex gap-2">
          <Link
            href="#work"
            className="group p-4 rounded-full transition-all duration-200"
          >
            <SquaresFour
              size={32}
              className="fill-gray-200 group-hover:fill-gray-100 group-hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
