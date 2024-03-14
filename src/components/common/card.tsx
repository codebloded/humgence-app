import Image from "next/image";
import React from "react";

const Card: React.FC<{ img: string; description: string; title: string }> = ({
  img,
  description,
  title,
}) => {
  return (
    <div className="card  w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm font-thin">{description}</p>
      </div>
    </div>
  );
};

export default Card;
