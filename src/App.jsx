import React from "react";
import Navigation from "./Sections/Navigation";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import ArtGallery from "./Sections/ArtGallery";
import OtherModels from "./Sections/OtherModels";
import Footer from "./Sections/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
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
