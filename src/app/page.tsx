"use client";
import Carousel from "@/components/carousel";
import Footer from "@/components/common/footer";
import LandingPage from "@/components/landing";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import AboutPage from "./about/page";
import Card from "@/components/common/card";
import {
  Bed,
  LockIcon,
  MapIcon,
  MapPinOff,
  PlayCircle,
  PlayIcon,
} from "lucide-react";

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
        <div>
          <Navbar isTransparent={isTransparent} />

          <div id="hero-section" className="relative hero min-h-screen w-full">
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
}
