import React from "react";
import Image from "next/image";
import { Redis } from "@upstash/redis";
import { allProjects } from "@/.contentlayer/generated";
import { Card } from "./components/card";
import { Article } from "./projects/article";
import { IconMarquee } from "./components/iconMarquee";
import Link from "next/link";

const redis = Redis.fromEnv();

export const revalidate = 0;
export default async function Home() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const sorted = allProjects
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <>
      <div className="px-8 max-w-[1440px] mx-auto flex flex-col justify-around min-h-[calc(100vh-220px)]">
        <div className="text-center animate-title mx-auto max-w-[70rem]">
          <div className="text-5xl md:text-[5rem] font-bold leading-[130%]">
            <span className="mr-6">Hi, I'm</span>
            <div className="mr-2 md:mr-0 md:ml-4 w-10 h-10 md:w-16 md:h-16 relative inline-block">
              <Image
                src="/pfp.jpg"
                fill
                alt="profile picture"
                className="rounded-full bg-cover"
              />
            </div>
            <Link className="md:ml-2 hover:underline pointer" href="#me">
              Vitor Hugo
            </Link>
            <span>, a frontend engineer from 🇧🇷</span>
          </div>
          <p className="font-fira md:text-xl mt-8 opacity-80 leading-8">
            empowering a community of creators @{" "}
            <span className="blur-md">confidential</span>
          </p>
          <Link href="#work">
            <svg
              width="95"
              height="95"
              viewBox="0 0 95 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-16 md:mt-24 h-8 mx-auto animate-slow"
            >
              <circle
                cx="47.5"
                cy="47.5"
                r="43.3088"
                className="stroke-gray-300"
                strokeWidth="8.38235"
              />
              <path
                d="M62.3894 45.3417C66.1697 45.3417 69.2451 42.2663 69.2451 38.486C69.2451 34.7058 66.1697 31.6304 62.3894 31.6304C58.6092 31.6304 55.5338 34.7058 55.5338 38.486C55.5338 42.2663 58.6092 45.3417 62.3894 45.3417Z"
                className="fill-gray-300"
              />
              <path
                d="M32.6105 45.3417C36.3907 45.3417 39.4662 42.2663 39.4662 38.486C39.4662 34.7058 36.3907 31.6304 32.6105 31.6304C28.8303 31.6304 25.7549 34.7058 25.7549 38.486C25.7549 42.2663 28.8305 45.3417 32.6105 45.3417Z"
                className="fill-gray-300"
              />
              <path
                d="M47.4999 69.5358C38.3111 69.5358 29.9984 63.7341 26.8146 55.0991L21.3011 57.1319C25.3324 68.0659 35.8609 75.4121 47.4999 75.4121C59.1389 75.4121 69.6674 68.0659 73.6987 57.1319L68.1852 55.0991C65.0014 63.7341 56.6887 69.5358 47.4999 69.5358Z"
                className="fill-gray-300"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div
        id="work"
        className="animate-fade-in p-8 w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="grid grid-cols-1 gap-4">
          {sorted
            .filter((_, i) => i % 3 === 0)
            .map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {sorted
            .filter((_, i) => i % 3 === 1)
            .map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {sorted
            .filter((_, i) => i % 3 === 2)
            .map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
        </div>
      </div>

      <div
        id="me"
        className="mx-auto md:max-w-2xl mt-24 p-8 flex flex-col items-center text-center"
      >
        <div className="flex flex-row gap-4 items-end ">
          <div className="hidden md:inline-block mr-2 w-4 h-4 md:w-12 md:h-12 relative">
            <Image
              src="/about.jpg"
              fill
              alt="profile picture"
              className="rounded-full object-cover"
            />
          </div>
          <p className="rounded-br-3xl rounded-tr-3xl rounded-tl-xl bg-gray-800 font-medium text-regular font-fira p-4">
            Hey, nice to meet you! (^_^)/{" "}
          </p>
        </div>

        <h2 className="font-bold font-heading text-6xl mt-8 ">
          A brief introduction
        </h2>
        <p className="w-full text-lg opacity-80 mt-8 max-w-lg">
          Hey, I'm Vitor Hugo, a frontend engineer and computer science
          undergraduate based in Brazil. My career as a web developer dates back
          to 2017, when I first integrated a Clash Royale API to my Wordpress
          blog.
          <br /> <br />
          Throughout the past years, I've dedicated my career in helping other
          developers succeed as a Developer Relations and Community Operations
          professional. I also have background in Product Design and UI/UX to
          deliver the best experience to the end user.
          <br /> <br />
          In my personal time, I like traveling and volunteering abroad. Thanks
          for visiting my portfolio!
        </p>
      </div>
      <div className="my-[10rem]">
        <IconMarquee />
      </div>
    </>
  );
}
