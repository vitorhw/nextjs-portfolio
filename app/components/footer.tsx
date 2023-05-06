"use client";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { SocialButton } from "./socialButton";
import { socials } from "./header";

export function Footer() {
  const asPath = usePathname();

  return (
    <footer className="flex w-full mx-auto">
      <div className="p-4 border-t border-gray-800 flex flex-row md:flex items-center justify-around w-full">
        <div className="flex md:hidden gap-2">
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
        <p className="p-4 opacity-80 text-sm text-center font-fira hidden md:block">
          with love, VITORH. <br /> {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
