"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/components/common/footer";
import GridCard from "@/components/about/grid-card";
import Navbar from "@/components/navbar";

const AboutPage = () => {
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
    <div>
      <Navbar isTransparent={isTransparent} />
      <div id="hero-section" className="relative hero min-h-screen w-full">
        <Image
          src="/r.jpg"
          layout="fill"
          objectFit="cover"
          className="object-cover filter grayscale"
          alt="Hero Image"
        />
        <div className="hero-overlay bg-black opacity-70"></div>
        <div className="hero-content text-start max-w-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6">
          <h1 className="text-4xl font-bold text-brand-secondary">
            Helping you achieve the kind of property success you dream of.
          </h1>
        </div>
      </div>

      <motion.div
        className="w-full max-w-4xl mx-auto border-t border-gray-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      ></motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10  mx-auto items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6, staggerChildren: 0.2 }} // Stagger animation of children
      >
        <div className="w-full">
          <Image
            src="/3.jpg"
            width={500}
            height={500}
            alt="78"
            className="object-cover"
          />
        </div>
        <p className="text-sm sm:text-base md:text-lg text-center">
          Embark on the journey to your ideal living space with our exclusive
          real estate offerings. From urban retreats to countryside estates,
          unlock the door to your dream home today. Explore listings, schedule a
          viewing, and speak to our experts to turn your vision into reality.
        </p>
      </motion.div>

      <div className="max-w-sm mx-auto flex flex-col items-start justify-center p-10 lg:max-w-screen-xl  h-screen">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10  mx-auto items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, staggerChildren: 0.2 }} // Stagger animation of children
        >
          <GridCard
            img="/1.jpg"
            title="Residential Sales & Leasing"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            dolores asperiores unde voluptatum possimus non recusandae, rerum,
            omnis labore"
          />
          <GridCard
            img="/11.jpg"
            title="Commercial Sales & Leasing"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            dolores asperiores unde voluptatum possimus non recusandae, rerum,
            omnis l"
          />
          <GridCard
            img="/3.jpg"
            title="Project Marketing"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            dolores asperiores unde voluptatum possimus non recusandae, rerum,
            omnis labor expedita harum ad."
          />
        </motion.div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
