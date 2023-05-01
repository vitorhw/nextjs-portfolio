'use client'

import { useState, useEffect } from "react";

export function useScrollY() {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      if (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10) {
        setOffset(scrollY);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [offset]);

  return offset;
}