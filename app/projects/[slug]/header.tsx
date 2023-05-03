"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
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
    <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
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
    </div>
  );
};
