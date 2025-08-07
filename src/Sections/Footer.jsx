import React, { useEffect, useRef } from "react";
import CameraSketch from "../Components/CameraSketch";
import useRefStore from "../Stores/useRefStore";

const Footer = () => {
  return (
    <div
      style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" }}
      className=" w-screen bg-[#5c5740] h-[90vh] relative"
    >
      <div className="fixed bottom-0 w-full h-[90vh] flex flex-col justify-between items-center py-[5vh]">
        <div className="flex-1 w-full grid grid-rows-[2fr_1fr]">
          <div className="" />
          <div className="flex flex-row">
            {["ABOUT US", "VARIANTS", "CONTACT US"].map((text, index) => (
              <div
                key={index}
                className="relative flex-1 flex justify-center items-center font-[500] mainTitle text-[1.5vh]"
              >
                <span className="ContactSpan cursor-pointer relative text-[#59270E]  px-3 py-1.5 rounded-full overflow-hidden ">
                  <span className="relative z-2">{text}</span>
                  <span className=" bg-[#98896F] absolute top-0 left-0 z-1 h-full w-full" />
                </span>
              </div>
            ))}
          </div>
        </div>
        <CameraSketch />
      </div>
    </div>
  );
};

export default Footer;
