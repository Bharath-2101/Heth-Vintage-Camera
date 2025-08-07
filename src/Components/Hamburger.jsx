import React, { useRef } from "react";
import useCloseStore from "../Stores/useCloseStore";
import gsap from "gsap";

const Hamburger = () => {
  const { close, changeClose } = useCloseStore();
  const topLine = useRef(null);
  const bottomLine = useRef(null);

  const handleMenuClick = () => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "cubic-bezier(0.87, 0, 0.13, 1)" },
    });

    if (close) {
      tl.to(topLine.current, { rotate: 45, y: -20 }, 0).to(
        bottomLine.current,
        { rotate: -45, y: 20 },
        0
      );
    } else {
      tl.to(topLine.current, { rotate: 0, y: 0 }, 0).to(
        bottomLine.current,
        { rotate: 0, y: 0 },
        0
      );
    }

    changeClose();
  };

  return (
    <svg
      onClick={handleMenuClick}
      className="h-full w-full cursor-pointer"
      viewBox="0 0 100 100"
    >
      <path
        ref={topLine}
        d="M0 30 L100 30"
        stroke="#f1e1d1"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <path
        ref={bottomLine}
        d="M0 60 L100 60"
        stroke="#f1e1d1"
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Hamburger;
