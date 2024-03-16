"use client";
import Footer from "@/components/common/footer";
import LandingPage from "@/components/landing";
import Navbar from "@/components/navbar";
import { Fragment, useEffect, useState } from "react";

import { Bed, LockIcon, MapIcon, PlayCircle } from "lucide-react";
import AboutPage from "../about/page";

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

          <section className="bg-amber-50 text-black">
            <div className="container py-20 mx-auto flex flex-col items-center justify-center">
              <div className="max-w-4xl">
                <h1 className="text-4xl lg:text-6xl w-full text-center mb-10">
                  Every property that we show has features and benefits that
                  meet every requirement and expectation, from a safe and
                  comfortable atmosphere.
                </h1>

                <div className="bg-indigo-500 w-4/5 h-96 flex items-center justify-center">
                  <h1 className="text-2xl text-center text-white">
                    <PlayCircle size={70} />
                  </h1>
                </div>
              </div>

              {/* <div className="bg-amber-50 w-96 h-60 relative bottom-40 left-96 border border-black item-center justify-center">
      <div className="flex flex-row justify-center items-center">
        <h3 className="text-sm">
          We prioritize elements that contribute to a safe and comfortable atmosphere. Whether you're seeking a serene escape or a vibrant urban setting, our properties are tailored to accommodate various preferences.
        </h3>
      </div>
    </div> */}
            </div>
          </section>
          <section className="bg-amber-50 text-black">
            <div className="container py-10 px-4 mx-auto flex flex-col items-center justify-center">
              <h1 className="text-4xl lg:text-6xl w-3/6 text-center mb-10">
                Get our highlights from each property
              </h1>

              <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-8">
                <div className="flex flex-col items-center justify-center p-5 max-w-xs lg:max-w-md gap-5">
                  <LockIcon
                    size={70}
                    className="bg-white rounded-full p-4 mb-4"
                  />
                  <h3 className="text-2xl lg:text-3xl text-center">
                    Security <br /> Guaranteed
                  </h3>
                  <p className="text-sm lg:text-base text-center">
                    Ensuring the safety of every property is paramount, and to
                    achieve this goal, we are implementing a comprehensive array
                    of state-of-the-art security technologies.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-5 max-w-xs lg:max-w-md gap-5">
                  <Bed size={70} className="bg-white rounded-full p-4 mb-4" />
                  <h3 className="text-2xl lg:text-3xl text-center">
                    Complete <br /> Facilities
                  </h3>
                  <p className="text-sm lg:text-base text-center">
                    We stand prepared to showcase an extensive array of
                    facilities meticulously designed to cater to and enhance the
                    fulfillment of your diverse needs and activities.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-5 max-w-xs lg:max-w-md gap-5">
                  <MapIcon
                    size={70}
                    className="bg-white rounded-full p-4 mb-4"
                  />
                  <h3 className="text-2xl lg:text-3xl text-center">
                    Strategic <br /> Location
                  </h3>
                  <p className="text-sm lg:text-base text-center">
                    Each of our buildings is strategically situated in close
                    proximity to city facilities, ensuring unparalleled
                    convenience and accessibility for occupants.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <AboutPage />

          <Footer />
        </Fragment>
      )}
    </div>
  );
}
