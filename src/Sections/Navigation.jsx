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
      className="h-[100dvh] w-[100dvw] bg-[#59270e] py-[2.5dvh] px-[5dvw] md:px-[2.5dvw] overflow-hidden flex flex-col gap-[6dvh] fixed z-30 top-0 left-0"
    >
      <div className="h-[5%] w-full flex items-center justify-between">
        <img src="/images/HethLogo.svg" alt="" className="w-[10%] md:w-[3%]" />
        <div className="w-[20%] h-full md:w-[5%]">
          <Hamburger />
        </div>
      </div>
      <span className="w-full h-1 bg-[#f1e1d188] rounded-full" />

      <div className="flex-1 py-[3dvh]">
        <ul className="w-full h-full grid">
          {[
            { title: "HOME", color: "#b2f851" },
            { title: "ABOUT", color: "#51f8d4" },
            { title: "VARIANTS", color: "#5178f8" },
            { title: "CONTACT", color: "#e751f8" },
          ].map((nav, index) => (
            <li key={index} className="flex items-center md:justify-center">
              <a
                href={`#${nav.title}`}
                className="navLinks text-[6dvh] md:text-[11dvh] flex flex-col overflow-hidden h-[17vh] text-center w-[100%] md:w-[35%]"
              >
                <span className="text-[#f1e1d1]">{nav.title}</span>
                <span style={{ color: nav.color }}>{nav.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
