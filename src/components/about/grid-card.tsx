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
        className="object-cover"
      />

      <h3 className=" text-2xl md:text-3xl max-w-60 w-full text-[#222226]">
        {title}
      </h3>
      <p className=" text-[#666361]">{description}</p>
    </div>
  );
};

export default GridCard;
