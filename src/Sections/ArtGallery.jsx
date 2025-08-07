import React, { useEffect, useRef } from "react";
import useRefStore from "../Stores/useRefStore";

const ArtGallery = () => {
  const galleryRef = useRef(null);
  const setRef = useRefStore((state) => state.setRef);

  useEffect(() => {
    if (galleryRef.current) {
      setRef("gallery", galleryRef);
    }
  }, []);
  return (
    <div ref={galleryRef} className="h-[100dvh] w-[100dvw]">
      ArtGallery
    </div>
  );
};

export default ArtGallery;
