"use client";
import React from "react";
import { SectionLayout } from "../../components/layouts/SectionLayout";
import Image from "next/image";
import { WhiteButton } from "@/components/common/buttons";
import { Text } from "@chakra-ui/react";
import { SwipeCarousel } from "@/components/carousals/SecondCarousal";

const OurVisionPage = () => {
  return (
    <div>
      {/* First Section */}
      <SectionLayout bgColor={{ type: "hex", value: "#222226" }}>
        <div className="text-white flex pb-14 md:pb-28 lg:pb-32 gap-10">
          <p className="w-full pt-14 md:pt-28 lg:pt-32 text-3xl leading-[40px] md:text-5xl md:leading-[70px] lg:text-6xl lg:leading-[80px] xl:text-7xl xl:leading-[100px] font-semibold">
            Our Vision
          </p>

          <div className="w-full flex flex-col gap-10 ">
            <div className="w-full aspect-video bg-[#222226]">
              <SwipeCarousel />
            </div>
            <div className="flex flex-col gap-5 md:gap-20 ">
              <Text
                noOfLines={{
                  base: 4,
                  md: 6,
                }}
                className="text-xs sm:text-sm md:text-xl"
              >
                Embark on the journey to your ideal living space with our
                exclusive real estate offerings. From urban retreats to
                countryside estates, unlock the door to your dream home today.
                Explore listings, schedule a viewing, and speak to our experts
                to turn your vision into reality.
              </Text>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Second Section */}
      <SectionLayout bgColor={{ type: "hex", value: "#f3ede6" }}>
        <div className="py-20 text-start">
          <h2 className="text-4xl md:text-6xl font-bold text-[#222226] mb-8">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl  text-[#222226]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Duis rutrum
            pretium porta.
          </p>
        </div>
      </SectionLayout>
    </div>
  );
};

export default OurVisionPage;
