import React, { useRef } from "react";
import Hamburger from "../Components/Hamburger";
import useCloseStore from "../Stores/useCloseStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navigation = () => {
  const navContainer = useRef(null);
  const { close } = useCloseStore();

  useGSAP(
    () => {
      gsap.to(navContainer.current, {
        clipPath: close
          ? "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)"
          : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "cubic-bezier(0.85, 0, 0.15, 1)",
      });
    },
    { dependencies: [close], scope: navContainer }
  );

  return (
    <div
      ref={navContainer}
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)",
      }}
      className="h-[100dvh] w-[100dvw] bg-[#803101] py-[2.5dvh] px-[5vw] overflow-hidden flex flex-col gap-[6vh] fixed z-10 top-0 left-0"
    >
      <div className="h-[5%] w-full flex items-center justify-between">
        <div className="text-white font-semibold text-lg"></div>
        <div className="w-[20%] h-full">
          <Hamburger />
        </div>
      </div>
      <span className="w-full h-1 bg-[#f1e1d188] rounded-full" />

      <div className="flex-1 py-[3vh]">
        <ul className="w-full h-full grid">
          {["HOME", "ABOUT", "VARIANTS", "CONTACT"].map((nav, index) => (
            <li key={index} className=" flex items-center ">
              <a href="" className="navLinks text-[6vh]">
                {nav}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
