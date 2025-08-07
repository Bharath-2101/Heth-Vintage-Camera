import React, { useEffect } from "react";
import Navigation from "./Sections/Navigation";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import ArtGallery from "./Sections/ArtGallery";
import OtherModels from "./Sections/OtherModels";
import Footer from "./Sections/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="min-h-screen w-[100dvw] relative bg-[#f1e1d1]">
      <Navigation />
      <Hero />
      <Features />
      <ArtGallery />
      <OtherModels />
      <Footer />
    </main>
  );
};

export default App;
