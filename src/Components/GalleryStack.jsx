import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GalleryStack = ({ ref }) => {
  return (
    <div
      ref={ref}
      className="w-full h-[75%] flex flex-row gap-2 transform -translate-x-[212vw]"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <img
          key={index}
          className="object-cover min-w-[50vw] rounded-md"
          src={`/images/ModelImg${index + 1}.jpg`}
        />
      ))}
    </div>
  );
};

export default GalleryStack;
