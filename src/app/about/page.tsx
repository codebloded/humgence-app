"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "@/components/common/card";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const aboutSectionTop = aboutSection.offsetTop;
        setIsVisible(scrollY > aboutSectionTop - windowHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="about-section"
      className={`container mx-auto flex flex-col  flex-wrap md:flex-row justify-between items-center gap-4 py-36 px-4 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src="/land.jpg"
        width={550}
        height={550}
        alt="about"
        className="rounded-lg"
      />

      <div className="container mx-auto px-4 text-start md:text-start md:w-1/2">
        <h2 className="text-4xl font-light mb-8">Our Philosophy</h2>
        <p className="text-lg leading-relaxed">
          "Anyone can do what's expected. It takes focused commitment and drive
          to reach beyond it. Good service is expected, but exceptional service
          is the Core way. We care not just about where you are now, but where
          you're going. We ask good questions, and guide you through the
          answers. We're warm and attentive, and there when you need us. Our
          approach is the human, pick-up-the-phone kind that's remembered for
          all the right reasons. A sale or a purchase is expected, but a
          market-leading result that gets everyone talking is not. Our team is
          well-connected, not just locally but all around the globe".
        </p>
      </div>
      <div className="container flex flex-row justify-between py-36 items-center gap-5 flex-wrap mx-auto px-4">
        <Card
          img="/1.jpg"
          description="Guiding you through every step of the process with care and precision, sharing insights and knowledge to help you arrive at every decision with ease and confidence."
          title="Residential Sales & Leasing"
        />
        <Card
          img="/2.jpg"
          title="Commercial Sales & Leasing"
          description="We work with you to design the best approach for your property and then we leverage our expertise, networks and market knowledge to achieve your property goals."
        />
        <Card
          img="/3.jpg"
          description="We navigate the property landscape and our local market with a level of assured ease and familiarity thats only possible with years of experience and proven results."
          title="Project Marketing"
        />
      </div>
    </div>
  );
};

export default AboutPage;
