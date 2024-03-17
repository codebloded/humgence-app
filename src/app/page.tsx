"use client";
import Footer from "@/components/common/footer";
import { Hero, Highlights, Para, Unlock } from "@/components/home";
import Navbar from "@/components/navbar";
import React from "react";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import OurVisionPage from "./vision/page";
import { motion } from "framer-motion";
import { ThreeDCardDemo } from "@/components/Card";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Para />
      <ThreeDCardDemo />
      <Highlights />
      <Unlock />
      <AboutPage />
      {/* <OurVisionPage /> */}
      <ContactPage />
      <Footer />
    </motion.div>
  );
};

export default Page;
