"use client";
import Carousel from "@/components/carousel";
import Footer from "@/components/common/footer";
import LandingPage from "@/components/landing";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import AboutPage from "./about/page3";
import Card from "@/components/common/card";
import {
  Bed,
  LockIcon,
  MapIcon,
  MapPinOff,
  PlayCircle,
  PlayIcon,
} from "lucide-react";
import ImageSlider from "@/components/carousals/ImageSlider";
import { motion } from "framer-motion";

export default function Home() {
  const [show, setShow] = useState<boolean>(true);
  const properties = [
    {
      id: 1,
      imageSrc: "/property1.jpg",
      title: "Modern Apartment in Downtown",
      location: "New York City",
      price: "$500,000",
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      id: 2,
      imageSrc: "/property2.jpg",
      title: "Luxury Villa with Ocean View",
      location: "Los Angeles",
      price: "$1,200,000",
      bedrooms: 4,
      bathrooms: 3,
    },
    // Add more properties as needed
  ];
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
    <div>
      {show ? (
        <LandingPage show={show} setShow={setShow} />
      ) : (
        <div>
          <Navbar isTransparent={isTransparent} />
          <motion.div
            className="relative  w-full  flex justify-start md:justify-center items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div
              id="hero-section"
              className="relative hero min-h-screen w-full"
            >
              <video
                autoPlay
                loop
                muted
                className="absolute inset-0 object-cover w-full h-full grayscale"
              >
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="hero-overlay bg-black opacity-50"></div>
              <div className="hero-content text-center"></div>
            </div>
          </motion.div>

          <div className="max-w-sm mx-auto flex flex-col items-center justify-center py-20 lg:max-w-screen-xl">
            <section className="bg-white text-black">
              <div className=" py-10 px-4 flex flex-col items-center gap-20 justify-between lg:flex-row lg:items-center lg:justify-center">
                <div className="lg:w-3/5 ">
                  <Image
                    src="/land.jpg"
                    //rectangle image
                    width={800}
                    height={550}
                    alt="about"
                    className=" aspect-auto w-full filter grayscale "
                  />
                </div>
                <div className="lg:w-2/5  text-start lg:text-start">
                  <h2 className="text-xl font-light mb-4 ">
                    Beyond that expected
                  </h2>
                  {/* divide the a big paragraph into three lines */}
                  <div className="flex flex-col gap-6 lg:gap-6 w-full lg:w-3/4 items-start lg:items-start justify-center lg:justify-start text-black">
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
                    <button className="bg-brand-primary text-brand-secondary px-4 py-2 hover:bg-transparent hover:border-black border hover:text-brand-primary ">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white text-black my-20">
              <div className="flex flex-col gap-10 m-5">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-light text-start">
                    Featured Properties
                  </h1>
                  <button className="bg-brand-primary text-brand-secondary px-4 py-2 hover:bg-transparent hover:border-black border hover:text-brand-primary ">
                    View all
                  </button>
                </div>
                <Carousel slides={["/land.jpg", "/2.jpg", "/3.jpg"]} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-start justify-start">
                  <div className="max-w-xs md:max-w-none flex flex-col gap-4">
                    <img src="/3.jpg" alt="property" className="mx-auto" />
                    <div>
                      <h3 className="text-lg font-light">
                        Modern Apartment in Downtown
                      </h3>
                      <p className="text-sm">New York City</p>
                      <p className="text-sm">Price: $500,000</p>
                    </div>
                  </div>
                  <div className="max-w-xs md:max-w-none flex flex-col gap-4">
                    <img src="/3.jpg" alt="property" className="mx-auto" />
                    <div>
                      <h3 className="text-lg font-light">
                        Modern Apartment in Downtown
                      </h3>

                      <p className="text-sm ">New York City</p>
                      <p className="text-sm ">Price: $500,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
