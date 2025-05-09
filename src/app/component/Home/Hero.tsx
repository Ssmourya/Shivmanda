"use client";
import React from "react"; 

const Hero = () => {
  return (
    <div>
      <section className="relative w-full h-[600px]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            preload="auto"
            poster="/images/bg_poster.png"
            muted
            playsInline
            src="/images/hero_bg.mp4" 
          />
        </div>

        <div className="container h-full mx-auto relative z-10 text-white">
          <div className="w-full md:w-8/12 lg:w-6/12 mx-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl xl:text-[56px] xl:leading-[60px] pb-8">
              Transforming Spaces
              <span className="font-semibold block"> Shaping Futures.</span>
            </h1>
            <div className="text-lg">
              <p>
                Inspiring People to Build Better. The world needs new solutions
                for the way we live and move, making it a better place for
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
