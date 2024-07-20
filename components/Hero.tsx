import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Magicbutton from "./ui/Magicbutton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-7 lg:pt-10 xl:pt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 
            md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-32 z-10">
         <div className="max-w-[80%] flex flex-col items-center justify-center">
           <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dyanamic Web Magic with Next.js
           </h2>
           <TextGenerateEffect 
           className="text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl "
           words="Transforming Ideas into Effective Software Solutions"
           />
           <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Arman, a Software Developer based in India.
           </p>
           <a href="#about">
            <Magicbutton title="Show My Work" icon={<FaLocationArrow/>} position="right"/>
           </a>
         </div>
      </div>
    </div>
  );
};

export default Hero;
