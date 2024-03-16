"use client";
import React from "react";
import { SectionLayout } from "../layouts/SectionLayout";
import { WhiteButton } from "../common/buttons";
import { Text } from "@chakra-ui/react";

export const Unlock = () => {
  return (
    <SectionLayout
      bgColor={{
        type: "hex",
        value: "#222226",
      }}
    >
      <div className="text-white flex pb-14 md:pb-28 lg:pb-32 gap-10">
        <div className="w-full pt-14 md:pt-28 lg:pt-32 text-3xl leading-[40px] md:text-5xl md:leading-[70px] lg:text-6xl lg:leading-[80px] xl:text-7xl xl:leading-[100px]  font-semibold">
          Unlock your dream home today!
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="w-full aspect-video bg-purple-300">hksbdfk</div>
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
              Explore listings, schedule a viewing, and speak to our experts to
              turn your vision into reality.
            </Text>
            <WhiteButton label={"Get Started"} onClick={() => {}} />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
