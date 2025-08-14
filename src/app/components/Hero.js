import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Light circle with text */}
      <div
        className="absolute rounded-full bg-[#F1F2F6] flex items-center justify-center text-center"
        style={{
          width: "2235px",
          height: "1712px",
          top: "-1313px",
          left: "-165px",
          zIndex: 3,
        }}
      >
        <div className="px-6">
          <h1 className="text-6xl font-bold text-[#005AAA]">Welcome to Our Site</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-md mx-auto">
            We deliver excellence through innovation and design.
          </p>
        </div>
      </div>

      {/* Blue circle with centered image */}
      <div
        className="absolute rounded-full bg-[#005AAA] flex items-center justify-center"
        style={{
          width: "2235px",
          height: "1712px",
          top: "400px",
          left: "-165px",
          zIndex: 2,
        }}
      >
        <div className="relative w-64 h-64">
  <Image
    src="/groupMockUp.png"
    alt="Inside Blue Circle"
    fill
    className="object-contain"
  />
</div>
        <Image
          src="/groupMockUp.png" // replace with your image in public folder
          alt="Inside Blue Circle"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Button between circles */}
      <div className="absolute inset-0 flex items-center justify-center z-[4]">
        <button className="flex items-center gap-4 px-8 py-4 bg-[#005AAA] text-white font-semibold rounded-full shadow-2xl transition">
          <Image src="/leafIcon.svg" alt="Icon" width={45} height={37} />
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
