import React, { useEffect, useRef } from "react";
import useRefStore from "../Stores/useRefStore";
import GalleryStack from "../Components/GalleryStack";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ArtGallery = () => {
  const galleryRef = useRef(null);
  const GalleryStack1 = useRef(null);
  const GalleryStack2 = useRef(null);

  useGSAP(() => {
    const tl1 = gsap.from(GalleryStack1.current, {
      xPercent: 68,
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 75%",
        end: "top 25%",
        scrub: true,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    });

    gsap.to(GalleryStack2.current, {
      xPercent: 68,
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 75%",
        end: "top 25%",
        scrub: true,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    });
  }, []);
  return (
    <div
      ref={galleryRef}
      className="h-[60dvh] w-[100dvw] grid grid-rows-2 gap-2 py-2 bg-[#1b1b1b]"
    >
      <div className="flex justify-center items-center">
        <GalleryStack ref={GalleryStack1} />
      </div>
      <div className="flex justify-center items-center">
        <GalleryStack ref={GalleryStack2} />
      </div>
    </div>
  );
};

export default ArtGallery;
