"use client";
import { motion } from "framer-motion";
import { useScrollY } from "../../hooks/useScrollY";
import { ArrowUp } from "@phosphor-icons/react";

export function BackUpButton() {
  const scrollY = useScrollY();

  return (
    <motion.a
      href="#top"
      className={`${
        scrollY > 300 ? "fixed" : "hidden"
      } bottom-8 right-8 text-zinc-900 transition-all duration-500 opacity-60 hover:opacity-100`}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 0.6 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="p-4 border border-gray-700 rounded-full flex items-center justify-around hover:border-gray-600">
        <ArrowUp color="white" size={36} />
      </div>
    </motion.a>
  );
}
