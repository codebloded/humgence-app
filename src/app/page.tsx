"use client";
import Footer from "@/components/common/footer";
import { Hero, Highlights, Para, Unlock } from "@/components/home";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import OurVisionPage from "./vision/page";
import { motion } from "framer-motion";
import ImageSlider from "@/components/carousals/ImageSlider";
import { SwipeCarousel } from "@/components/carousals/SecondCarousal";
import ProjectPage from "./project/page";
import { ThreeDCardDemo } from "@/components/Card";

const Page = () => {
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.getElementById("hero-section")!.offsetHeight!;
      const navbar = document.querySelector(".navbar");
      if (navbar === null) return;
      if (window.scrollY > heroSectionHeight) {
        setIsTransparent(false);
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-gray-900"); // Change this to the desired background color
      } else {
        setIsTransparent(true);
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-gray-900"); // Change this to the desired background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* navbar */}

      <Hero />
      <Para />

      <Highlights />
      <Unlock />
      <AboutPage />
      <ProjectPage />
      {/* <OurVisionPage /> */}

      <SwipeCarousel />
      <ContactPage />
      <Footer />
    </motion.div>
  );
};

export default Page;
