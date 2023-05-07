"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
    banner?: string;
  };

  views: number;
};
export const Header: React.FC<Props> = ({ project, views }) => {
  const ref = useRef<HTMLElement>(null);

  const links: { label: string; href: string }[] = [];
  if (project.repository) {
    links.push({
      label: "GitHub",
      href: `https://github.com/${project.repository}`,
    });
  }
  if (project.url) {
    links.push({
      label: "Website",
      href: project.url,
    });
  }

  return (
    <div className="container mx-auto relative isolate overflow-hidden py-16 sm:py-20 rounded-lg border border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex z-10 flex-col items-center relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-semibold text-white sm:text-6xl font-display">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            {project.description}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-gray-50 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <Link target="_blank" key={link.label} href={link.href}>
                {link.label} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={
          project.banner ||
          "https://media1.giphy.com/media/14uQ3cOFteDaU/giphy.gif?cid=ecf05e477tzva8oph8w0ayw004joirzotu9u7hnl4p5iw9zg&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        }
        width={1200}
        height={600}
        className="object-cover absolute top-0 right-0 w-full h-full opacity-10 z-0 "
        alt="project banner"
      />
    </div>
  );
};
