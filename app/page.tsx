"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

export default function Home() {
  return (
    <>
      <div className="relative px-8 w-screen max-w-[1440px] mx-auto flex flex-col items-left min-h-[calc(100vh-220px)]">
        <motion.div className="flex flex-row justify-between items-end mt-[4rem] md:mt-[6rem]">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <motion.p className="text-[3.5rem] text-left md:text-center md:text-[5rem] font-heading leading-[130%] w-full mx-auto max-w-[70rem]">
              <span className="opacity-80 mr-6">Hi, I'm</span>
              <div className="mr-2 md:mr-0 md:ml-4 w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] relative inline-block">
                <Image
                  src="/pfp.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="profile picture"
                  className="rounded-full"
                />
              </div>
              <span className="opacity-100 md:ml-2">
                <a className="hover:underline pointer" href="#me">
                  Vitor Hugo
                </a>
              </span>
              <span className="opacity-80">, a product designer </span>
              <span className="opacity-80">from 🇧🇷</span>
            </motion.p>
            <motion.p className="text-left md:text-center font-fira md:text-[1.5rem] mt-8">
              empowering a community of creators @{" "}
              <span className="blur-md">confidential</span>
            </motion.p>
            <motion.a
              href="#work"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100 }}
              transition={{ duration: 1 }}
            >
              <svg
                width="95"
                height="95"
                viewBox="0 0 95 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-16 md:mt-24 h-8 hover:opacity-100 opacity-70 mx-auto animate-slow"
              >
                <circle
                  cx="47.5"
                  cy="47.5"
                  r="43.3088"
                  stroke="black"
                  strokeWidth="8.38235"
                />
                <path
                  d="M62.3894 45.3417C66.1697 45.3417 69.2451 42.2663 69.2451 38.486C69.2451 34.7058 66.1697 31.6304 62.3894 31.6304C58.6092 31.6304 55.5338 34.7058 55.5338 38.486C55.5338 42.2663 58.6092 45.3417 62.3894 45.3417Z"
                  fill="black"
                />
                <path
                  d="M32.6105 45.3417C36.3907 45.3417 39.4662 42.2663 39.4662 38.486C39.4662 34.7058 36.3907 31.6304 32.6105 31.6304C28.8303 31.6304 25.7549 34.7058 25.7549 38.486C25.7549 42.2663 28.8305 45.3417 32.6105 45.3417Z"
                  fill="black"
                />
                <path
                  d="M47.4999 69.5358C38.3111 69.5358 29.9984 63.7341 26.8146 55.0991L21.3011 57.1319C25.3324 68.0659 35.8609 75.4121 47.4999 75.4121C59.1389 75.4121 69.6674 68.0659 73.6987 57.1319L68.1852 55.0991C65.0014 63.7341 56.6887 69.5358 47.4999 69.5358Z"
                  fill="black"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <div id="work" className="p-8 mt-4 w-full max-w-[1440px] mx-auto ">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          variants={list}
          viewport={{ once: true }}
        >
          <h1>TBD</h1>
        </motion.div>
      </div>

      <motion.div
        className="overflow-hidden max-w-[1440px] mx-auto px-8 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="h-[1px] w-full bg-zinc-900 opacity-10"></div>
      </motion.div>

      <motion.div
        className="w-screen mx-auto max-w-[1440px] flex flex-col md:flex-row my-24 mb-24 gap-32 p-8"
        id="me"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[400px] relative">
          <img
            src="/sticker.png"
            className="absolute -top-16 -right-16 w-[10rem] h-[10rem]"
          />
          <img src="/about.jpg" alt="profile picture" />
        </div>

        <div className="max-w-[500px]">
          <h3 className="font-medium text-regular font-fira">
            Hey, nice to meet you! (^_^)/{" "}
          </h3>
          <h2 className="font-bold font-heading text-6xl mt-8">
            A tiny little introduction
          </h2>
          <p className="max-w-[500px] text-lg opacity-80 mt-8">
            Hey, I&apos;m Vitor, a Product Designer and Computer Science
            undergraduate based in Brazil. I&apos;m passionate about designing,
            volunteering, and participating in collaborative communities!
            <br /> <br />
            I truly believe in designing products that are accessible and
            equitable. I&apos;m constantly looking for challenges to brainstorm
            solutions with innovative ideas and an open minded team.
            <br /> <br />
            Personally, I&apos;m a big fan of traveling, hiking, and watching
            scary movies with family and friends!
            <br />
            <br />
            <br />
            <small>
              Resume available upon{" "}
              <Link href="mailto:vitor.hw@sempreceub.com">request</Link>
            </small>
          </p>
        </div>
      </motion.div>
    </>
  );
}
