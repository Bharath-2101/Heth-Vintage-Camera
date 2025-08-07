import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { use, useRef } from "react";
import useRefStore from "../Stores/useRefStore";
import HeroContent from "../Animations/HeroContent";

const Hero = () => {
  const heroImage = useRef(null);
  const heroTagCon = useRef(null);
  const buyMeRef = useRef(null);
  const buyMeSpan = useRef(null);

  useGSAP(() => {
    HeroContent(heroImage, heroTagCon, buyMeRef, buyMeSpan);
    gsap.to(heroImage.current, {
      scrollTrigger: {
        trigger: "#featureSection",
        start: "top bottom",
        end: "top 5%",
        scrub: true,
      },
      y: "130vh",
      x: "-60vw",
      scale: 0.8,
      rotate: -90,
      ease: "cubic-bezier(0.76, 0, 0.24, 1)",
    });
  }, []);

  return (
    <div className="relative h-[100dvh] w-[100dvw] pt-[10dvh] flex flex-col justify-end items-center">
      <div
        ref={heroTagCon}
        style={{
          clipPath: "  polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        }}
        className="flex flex-col items-center justify-center text-center leading-13 text-[6vh] absolute left-3/5 top-3/5 transform -translate-x-3/5 -translate-y-3/5"
      >
        <span className="HeroTag w-full ">SHOOT</span>
        <span className="HeroTag w-full  ">PERFECTION</span>
      </div>
      <img
        ref={heroImage}
        style={{ clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)" }}
        src="/images/BrownCamera.png"
        alt=""
        className=" w-full absolute left-3/10 top-2/10 transform -translate-x-3/10 -translate-y-3/10 origin-center"
      />
      <div className="w-full h-[50%] flex justify-center items-center">
        <div
          ref={buyMeRef}
          style={{
            clipPath: "polygon(100% 100%, 0% 100%, 0% 100%, 100% 100%)",
          }}
          className="relative border-2 border-[#993e05] px-[10dvw] py-[0.5dvh] text-[3vh] rounded-full text-[#993e05] font-bold overflow-hidden"
        >
          <span
            ref={buyMeSpan}
            style={{ clipPath: "polygon(100% 0%, 0% 0%, 0% 0%, 100% 0%)" }}
            className="absolute top-0 left-0 w-full h-full bg-[#993e05]"
          />
          <span className="relative z-2 origin-left text-[#f1e1d1]">
            Buy Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
