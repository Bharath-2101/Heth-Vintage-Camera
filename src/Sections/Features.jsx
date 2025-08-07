import React, { useEffect, useRef } from "react";
import useRefStore from "../Stores/useRefStore";

const Features = () => {
  const featureRef = useRef(null);

  const Features = [
    {
      efficency: 95,
      title: "Design Aesthetic",
      desc: "The camera boasts a luxurious brown leather texture combined with brushed silver metallic housing, giving it a premium vintage appeal.",
    },
    {
      efficency: 90,
      title: "Lens Build Quality",
      desc: "The large central lens is surrounded by a multi-layered metallic ring with deep shadows, suggesting a high-end manual or prime lens.",
    },
    {
      efficency: 85,
      title: "User Control Dials",
      desc: "With clearly defined manual knobs and dials on the top section, it reflects a camera designed for photographers who value tactile control. ",
    },
  ];
  return (
    <div
      ref={featureRef}
      id="featureSection"
      className="featureCon h-[100dvh] w-[100dvw] grid grid-rows-[1fr_2fr]"
    >
      <div className="p-3">
        <div className="border p-2 h-full w-full">
          <div id="limitEd">limited edition</div>
          <div className="mainTitle text-[3.5vh] font-black mb-3">
            AURELUX 35 Classic
          </div>
          <div className="leading-5 p-2 text-[1.6vh]">
            Introducing the AURELUX 35 Classic — a limited-edition masterpiece
            born from a love of timeless design and mechanical precision. With
            only a select number ever made, this collector’s gem blends
            luxurious brown leather, satin-finished silver metal, and a finely
            engineered lens to offer an experience that’s as tactile as it is
            visual.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[2fr_3fr]">
        <div />
        <div className="grid grid-rows-3 p-2 gap-2">
          {Features.map((Feature, index) => (
            <div key={index} className="border grid grid-rows-[2fr_3fr] ">
              <div className="grid grid-cols-[1fr_2fr]">
                <span className="text-[3vh]  flex justify-center items-center font-black">
                  {Feature.efficency + "%"}
                </span>
                <span className="flex justify-center items-center font-medium text-[1.8vh]">
                  {Feature.title}
                </span>
              </div>
              <div className="text-[1.5vh] px-2 leading-4 border-t-1">
                {Feature.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
