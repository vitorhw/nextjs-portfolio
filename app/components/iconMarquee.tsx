"use client";
import Marquee from "react-fast-marquee";
import { IconContext } from "react-icons";
import {
  IoLogoCss3,
  IoLogoFigma,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoMarkdown,
  IoLogoPython,
  IoLogoReact,
  IoLogoSass,
  IoLogoVercel,
} from "react-icons/io5";

export function IconMarquee() {
  return (
    <IconContext.Provider value={{ size: "3rem", className: "ml-[5rem] opacity-10" }}>
      <Marquee
        direction='left'
        autoFill
        gradient
        gradientColor={[2, 6, 23]}
        className="hidden md:flex"
      >
        <IoLogoHtml5 />
        <IoLogoCss3 />
        <IoLogoJavascript />
        <IoLogoGithub />
        <IoLogoFigma />
        <IoLogoReact />
        <IoLogoMarkdown />
        <IoLogoPython />
        <IoLogoSass />
        <IoLogoVercel />
      </Marquee>
    </IconContext.Provider>
  );
}
