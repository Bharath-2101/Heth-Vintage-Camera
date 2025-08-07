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
      className="h-[100dvh] w-[100dvw] grid grid-rows-[1fr_9fr]"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-full text-center cartoonText">Models</div>
        <div className="text-[4vh] mainTitle text-[#993e05] w-full text-center font-black">
          COLLECTIONS
        </div>
      </div>
      <div className="grid grid-rows-3">
        <div className="grid grid-rows-[4fr_1fr]">
          <div className="flex justify-center items-center">
            <img src="/images/CharcolCamera.png" alt="" className="h-45" />
          </div>
          <div className="flex justify-center  font-black cartoonText text-[2.5vh]">
            BROWN VARIANT
          </div>
        </div>
        <div className="grid grid-rows-[4fr_1fr]">
          <div className="flex justify-center items-center"></div>
          <div className="flex justify-center items-center font-black cartoonText text-[2.5vh]">
            THE OG
          </div>
        </div>
        <div className="grid grid-rows-[4fr_1fr]">
          <div className="flex justify-center items-center">
            <img src="/images/GreenCamera.png" alt="" className="h-45" />
          </div>
          <div className="flex justify-center  font-black cartoonText text-[2.5vh]">
            GREEN VARIANT
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherModels;
