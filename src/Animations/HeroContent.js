import gsap from "gsap";

const HeroContent = (heroImage, heroTagCon, buyMeRef, buyMeSpan) => {
  const tl = gsap.timeline({
    defaults: { ease: "cubic-bezier(0.85, 0, 0.15, 1)" },
  });
  tl.from(heroImage.current, {
    clipPath: "  polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    duration: 0.5,
  })
    .to(heroTagCon.current, {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 0.5,
    })
    .to(buyMeRef.current, {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 0.5,
    })
    .to(buyMeSpan.current, {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 0.5,
    });
};

export default HeroContent;
