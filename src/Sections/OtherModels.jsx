import React, { useEffect, useRef } from "react";
import useRefStore from "../Stores/useRefStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const OtherModels = () => {
  const modelsRef = useRef(null);
  const setRef = useRefStore((state) => state.setRef);

  useEffect(() => {
    if (modelsRef.current) {
      setRef("models", modelsRef);
    }
  }, []);
  return (
    <div
      ref={modelsRef}
      id="VARIANTS"
      className=" h-[100dvh] w-[100dvw] grid grid-rows-[3fr_9fr]"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-full text-center cartoonText md:text-[5vh]">
          Models
        </div>
        <div className="text-[4dvh] mainTitle text-[#59270e] md:text-[8dvh] w-full text-center font-black">
          COLLECTIONS
        </div>
      </div>
      <div className="grid grid-rows-3 md:grid-cols-3">
        <div className="grid grid-rows-[4fr_1fr] md:flex md:items-center md:justify-between md:flex-col">
          <div className="flex justify-center items-center">
            <img
              src="/images/CharcolCamera.png"
              alt=""
              className="h-45 md:w-full md:h-auto"
            />
          </div>
          <div className="flex justify-center md:text-[5dvh]  font-black cartoonText text-[2.5dvh]">
            BROWN VARIANT
          </div>
        </div>
        <div className="grid grid-rows-[4fr_1fr] md:flex md:items-center md:justify-between md:flex-col">
          <div className="flex justify-center items-center"></div>
          <div className="flex justify-center items-center md:text-[5dvh] font-black cartoonText text-[2.5dvh]">
            THE OG
          </div>
        </div>
        <div className="grid grid-rows-[4fr_1fr] md:flex md:items-center md:justify-between md:flex-col">
          <div className="flex justify-center items-center">
            <img
              src="/images/GreenCamera.png"
              alt=""
              className="h-45 md:w-full md:h-auto"
            />
          </div>
          <div className="flex justify-center md:text-[5dvh]  font-black cartoonText text-[2.5dvh]">
            GREEN VARIANT
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherModels;
