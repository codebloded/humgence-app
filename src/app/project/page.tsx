"use client";

import ImageSlider from "@/components/carousals/ImageSlider";
import Footer from "@/components/common/footer";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProjectPage = () => {
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
        navbar.classList.add("bg-brand-primary"); // Change this to the desired background color
      } else {
        setIsTransparent(true);
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-brand-primary"); // Change this to the desired background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar isTransparent={isTransparent} />
      <div
        id="project-section"
        className="flex flex-col item-start justify-start "
      >
        <div id="hero-section" className="relative hero min-h-screen w-full">
          <Image
            src="/33.jpg"
            layout="fill"
            objectFit="cover"
            className="object-cover filter grayscale"
            alt="Hero Image"
          />
          <div className="hero-overlay bg-black opacity-50"></div>
          <div className="hero-content text-center">
            <h1 className="text-4xl font-bold text-white">Our Projects</h1>
          </div>
        </div>

        <div className="max-w-sm mx-auto flex flex-col items-center justify-center my-24 lg:max-w-screen-xl">
          <div className="flex flex-col items-center gap-10 justify-between lg:flex-row lg:items-center lg:justify-center">
            <div className="lg:w-2/4 lg:ml-10 text-start lg:text-start">
              <h2 className="text-xl font-light mb-4 lg:mb-8">
                Beyond that expected
              </h2>
              {/* divide the a big paragraph into three lines */}
              <div className="flex flex-col gap-6 lg:gap-6 w-full lg:w-4/5 items-start lg:items-start justify-center lg:justify-start text-black">
                <p className="text-xs leading-relaxed">
                  Humgence is involved in the sale of various off the plan
                  projects, from apartments to townhouses and homes. Please see
                  the list below for more details of some of the projects Core
                  is involved with and please contact us if you have any
                  specific requirements or locations you are interested in.
                </p>
                <p className="text-xs leading-relaxed">
                  Why buy off the plan? Depending on a client’s individual
                  circumstances, there are several compelling reasons to choose
                  a brand new apartment over an established one – both for owner
                  occupancy and for investment purposes. It can be a minefield
                  of local and international laws, taxation and depreciation
                  implications – all dependent on a client’s individual
                  circumstances, but with our knowledge and expertise, we are
                  here to guide you.
                </p>

                {/* sharp button */}
              </div>
            </div>
            <div className="lg:w-2/5 lg:mr-10">
              <Image
                src="/xx.webp"
                //rectangle image
                width={250}
                height={450}
                alt="about"
                className=" aspect-square w-full filter grayscale "
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 items-start justify-start my-24">
            <div className="max-w-xs md:max-w-none flex flex-col gap-4 lg:max-w-screen-xl">
              <img
                src="/3.jpg"
                alt="property"
                className="w-full aspect-video h-1/2 object-cover"
              />
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-lg font-light">
                    Modern Apartment in Downtown
                  </h3>
                  <p className="text-sm ">New York City</p>
                  <p className="text-sm ">Price: $500,000</p>
                </div>
                <p className="text-sm leading-relaxed">Enquiries Open</p>
              </div>
            </div>
            <div className="max-w-xs md:max-w-none flex flex-col gap-4 lg:max-w-screen-xl">
              <img
                src="/3.jpg"
                alt="property"
                className="w-full aspect-video h-1/2 object-cover"
              />
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-lg font-light">
                    Modern Apartment in Downtown
                  </h3>
                  <p className="text-sm ">New York City</p>
                  <p className="text-sm ">Price: $500,000</p>
                </div>
                <p className="text-sm leading-relaxed">Enquiries Open</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProjectPage;
