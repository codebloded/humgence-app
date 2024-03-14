"use client";
import Carousel from "@/components/carousel";
import Footer from "@/components/common/footer";
import LandingPage from "@/components/landing";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import AboutPage from "./about/page";
import Card from "@/components/common/card";

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
        <Fragment>
          <Navbar isTransparent={isTransparent} />
          {/* <div
            className="relative 
            top-0
            overflow-hidden"
          >
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 object-cover w-full h-full"
            >
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-black opacity-50 h-full"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
              <p className="mt-4 text-lg">Your hero subtitle or description</p>
            </div>

            <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 text-white z-20">
              <p className="text-lg">Scroll to start</p>
            </div>
          </div> */}
          <div id="hero-section" className="relative hero min-h-screen w-full">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 object-cover w-full h-full"
            >
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-overlay bg-black opacity-70"></div>
            <div className="hero-content text-center">
              <div className="max-w-2xl">
                <h1 className=" text-5xl font-bold">Welcome To Real Estate</h1>
              </div>
            </div>
          </div>
          <AboutPage />

          <Footer />
        </Fragment>
      )}
    </div>
  );
}
