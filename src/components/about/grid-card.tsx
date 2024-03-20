import Image from "next/image";
import React from "react";

export type GridCardProps = {
  img: string;
  title: string;
  description: string;
};

const GridCard: React.FC<GridCardProps> = ({ img, description, title }) => {
  return (
    <div className="flex flex-col items-start max-w-sm w-full gap-5 ">
      <Image
        src={img}
        width={500}
        height={500}
        alt="78"
        className="object-cover aspect-video"
      />

      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
        <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
        <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
      </div>

      <h3 className=" text-xl md:text-2xl max-w-60 w-full text-[#222226]">
        {title}
      </h3>
      <p className=" text-[#666361]">{description}</p>
    </div>
  );
};

export default GridCard;
