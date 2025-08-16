import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover fixed"
      />

      {/* Light oval with text */}
      <div
       className="absolute bg-[#F1F2F6] flex items-center justify-center text-center
  w-[100vw] h-[100vh] rounded-full
  -top-[40vh] left-1/2 -translate-x-1/2 z-30"
      >
        <div className="px-4 sm:px-6">
          <h1 className="mt-32 text-2xl sm:text-4xl lg:text-6xl font-bold text-[#005AAA]">
            Welcome to Our Site
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 mt-4 max-w-md mx-auto">
            We deliver excellence through innovation and design.
          </p>
        </div>
      </div>

      {/* Blue circle with centered image */}
      <div
        className="absolute rounded-full bg-[#005AAA] flex items-center justify-center
        w-[500px] aspect-square sm:w-[800px] lg:w-full
        top-[200px] sm:top-[400px] lg:top-[380px]
        left-1/2 -translate-x-1/2 z-20"
      >
        <div className="relative w-24 h-24 sm:w-40 sm:h-40 lg:w-64 lg:h-64">
          <Image
            src="/groupMockUp.png"
            alt="Inside Blue Circle"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Button between circles */}
      <div className="absolute inset-0 flex items-center justify-center z-[40] px-4">
        <button className="flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-[#005AAA] text-white text-sm sm:text-base font-semibold rounded-full shadow-2xl transition hover:bg-[#004080]">
          <Image
            src="/leafIcon.svg"
            alt="Icon"
            width={30}
            height={25}
            className="sm:w-[45px] sm:h-[37px]"
          />
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
