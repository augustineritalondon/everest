"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 200, // Offset (in px) from the original trigger point
      easing: "ease-in-out", // Easing function for animations
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return null;
};

export default AOSInitializer;
