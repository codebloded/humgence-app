import React from "react";
import { SectionLayout } from "../layouts/SectionLayout";

export const Para = () => {
  const IMG =
    "https://files.123freevectors.com/wp-content/solidbackground/light-indigo-free-solidcolor-background.jpg";
  return (
    <SectionLayout
      bgColor={{
        type: "hex",
        value: "#f3ede6",
      }}
    >
      <div className="text-[#222226] flex flex-col py-28 md:py-36 lg:py-44 items-center gap-10">
        <p className="text-xl md:text-3xl md:leading-[50px] lg:text-4xl lg:leading-[60px] xl:text-5xl xl:leading-[70px] text-center">
          Every property that we show has features and benefits that meet every
          requirement and expectation, from a safe and comfortable atmosphere.
        </p>
        <div className="relative">
          <div className="aspect-video w-full max-w-4xl rel">
            <img src={IMG} alt="" className="h-full w-full" />
          </div>
          <div className="absolute grid place-items-center text-[#666361] bg-[#f3ede6] aspect-video w-[60%] -bottom-[25%] -right-[5%] xl:right-[-15%] 2xl:right-[-30%] p-5 sm:p-10 text-sm sm:text-lg md:text-2xl lg:text-3xl">
            We prioritize elements that contribute to a safe and comfortable
            atmosphere.
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
