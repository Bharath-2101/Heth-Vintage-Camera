import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import HeroContent from "../Animations/HeroContent";

const Hero = () => {
  const heroImage = useRef(null);
  const heroTagCon = useRef(null);
  const buyMeRef = useRef(null);
  const buyMeSpan = useRef(null);

  useGSAP(() => {
    HeroContent(heroImage, heroTagCon, buyMeRef, buyMeSpan);

    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        if (isDesktop) {
          gsap.to(heroImage.current, {
            scrollTrigger: {
              trigger: "#VARIANTS",
              start: "top bottom",
              end: "top 40%",
              scrub: true,
            },
            y: "345dvh",
            scale: 0.86,
            ease: "cubic-bezier(0.76, 0, 0.24, 1)",
          });
        } else if (isMobile) {
          gsap.to(heroImage.current, {
            scrollTrigger: {
              trigger: "#VARIANTS",
              start: "top 100%",
              end: "center 60%",
              scrub: true,
            },
            y: "283vh",
            scale: 0.7,
            rotate: 0,
            ease: "cubic-bezier(0.76, 0, 0.24, 1)",
          });
        }
      }
    );
  }, []);

  return (
    <div
      id="HOME"
      className="relative h-[100dvh] w-[100dvw] pt-[10dvh] flex flex-col justify-end items-center"
    >
      <div
        ref={heroTagCon}
        style={{
          clipPath: "  polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        }}
        className="flex flex-col items-center justify-center text-center text-[clamp(6vh,10vw,24vh)] leading-13 md:-rotate-3 md:leading-35  absolute left-3/5 top-3/5 transform -translate-x-3/5 -translate-y-3/5 md:top-1/2 md:left-4/7"
      >
        <span className="HeroTag w-full ">SHOOT</span>
        <span className="HeroTag w-full  ">PERFECTION</span>
      </div>
      <img
        ref={heroImage}
        style={{ clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)" }}
        src="/images/BrownCamera.png"
        alt=""
        className=" w-full md:w-[40%] z-20 absolute left-3/10 top-2/10 transform -translate-x-3/10 -translate-y-3/10 origin-center md:left-3/6 md:top-1/5 md:-translate-x-1/2 md:-translate-y-1/2"
      />
      <div className="w-full h-[40%] flex justify-center items-center">
        <div
          ref={buyMeRef}
          style={{
            clipPath: "polygon(100% 100%, 0% 100%, 0% 100%, 100% 100%)",
          }}
          className="BuyMe text-[clamp(3vh,4vw,4vh)] group relative border-2 border-[#59270e] px-[10dvw] py-[0.5dvh] md:py-[1vh] md:px-[3dvw] rounded-full text-[#993e05] font-bold overflow-hidden"
        >
          <span
            ref={buyMeSpan}
            style={{ clipPath: "polygon(100% 0%, 0% 0%, 0% 0%, 100% 0%)" }}
            className="absolute top-0 left-0 w-full h-full bg-[#993e05] md:hidden"
          />
          <span className="relative z-10 origin-left text-[#f1e1d1] md:text-[#59270e] md:group-hover:text-[#f1e1d1]">
            Buy Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
