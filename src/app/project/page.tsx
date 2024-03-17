import ImageSlider from "@/components/carousals/ImageSlider";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import React from "react";

const ProjectPage = () => {
  return (
    <SectionLayout bgColor={{ type: "hex", value: "#222226" }}>
      <div className="text-[#f3ede6] flex flex-col py-10 md:py-36 lg:py-44 items-start ">
        <p className="text-3xl md:text-6xl md:leading-[70px] lg:text-7xl lg:leading-[90px] xl:text-8xl xl:leading-[110px] font-semibold text-start">
          Our <span className="font-bolder-500 text-[#5656b1]">Projects</span>
        </p>
        <div className="w-full flex flex-col items-center justify-center gap-10 md:flex-row">
          <ImageSlider />
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProjectPage;
