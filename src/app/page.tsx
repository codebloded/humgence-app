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
    <div>
      {show ? (
        <LandingPage show={show} setShow={setShow} />
      ) : (
        <div>
          <Navbar isTransparent={isTransparent} />

          <Hero />
          <Para />

          <div className="container mx-auto flex flex-col items-center justify-center py-20">
            <AboutPage />
            <section className="bg-white text-black">
              <div className="container py-10 px-4 mx-auto flex flex-col items-center gap-10 justify-between lg:flex-row lg:items-center lg:justify-center">
                <div className="lg:w-2/5 lg:mr-10">
                  <Image
                    src="/land.jpg"
                    //rectangle image
                    width={250}
                    height={550}
                    alt="about"
                    className="w-full filter grayscale aspect-square"
                  />
                </div>
                <div className="lg:w-1/3 lg:ml-10 text-start lg:text-start">
                  <h2 className="text-xl font-light mb-4 lg:mb-8">
                    Beyond that expected
                  </h2>
                  {/* divide the a big paragraph into three lines */}
                  <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-3/4 items-center lg:items-start justify-center lg:justify-start text-black">
                    <p className="text-sm leading-relaxed">
                      Were forward-thinking, highly experienced real estate
                      agents representing premium properties in some of
                      Melbournes finest inner-city neighbourhoods.
                    </p>
                    <p className="text-sm leading-relaxed">
                      We navigate the property landscape and our local market
                      with a level of assured ease and familiarity that’s only
                      possible with years of experience and proven results.
                    </p>
                    <p className="text-sm leading-relaxed">
                      What we do isn’t simply a job, it’s a lifestyle. For our
                      clients, we’re always one step ahead, and over-delivery is
                      our standard.
                    </p>
                    <p className="text-sm leading-relaxed">
                      All for an experience and end result that goes beyond the
                      expected.
                    </p>
                    {/* sharp button */}
                    <button className="bg-black text-white px-4 py-2">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white text-black"></section>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Page;
