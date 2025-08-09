import React, { useEffect, useRef } from "react";
import CameraSketch from "../Components/CameraSketch";
import useRefStore from "../Stores/useRefStore";

const Footer = () => {
  return (
    <div
      id="CONTACT"
      style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" }}
      className=" w-screen bg-[#5c5740] h-[90dvh] relative"
    >
      <div className="fixed bottom-0 w-full h-[90dvh] flex flex-col md:flex-row justify-between items-center py-[5dvh]">
        <div className="flex-1 md:h-full w-full grid grid-rows-[2fr_1fr]">
          <div className="grid grid-rows-[2fr_1fr] md:grid-rows-2 ">
            <div className="flex justify-center items-center">
              <img src="/images/HethLogo.svg" alt="" className="h-full" />
            </div>
            <span className="flex justify-center items-center mainTitle text-[#59270E] text-[7vh] md:text-[13dvh] font-black">
              HETH
            </span>
          </div>
          <div className="flex flex-row">
            {["ABOUT US", "VARIANTS", "CONTACT US"].map((text, index) => (
              <div
                key={index}
                className="relative flex-1 flex justify-center items-center font-[500] mainTitle text-[1.5dvh]"
              >
                <div className="BuyMe border border-[#59270E] cursor-pointer relative text-[#59270E]  px-3 py-1.5 rounded-full overflow-hidden ">
                  <span className="relative z-2 md:text-[3vh]">{text}</span>
                </div>
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
