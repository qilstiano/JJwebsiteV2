"use client"
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from 'next/image';

const HeroSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
 
  return (
    <>
      <Carousel plugins={[plugin.current]} className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
        <CarouselContent className="absolute top-0 bottom-0 left-0 right-0 ml-0">
          <CarouselItem className="w-full bg-cover bg-center" style={{ backgroundImage: `url(/images/Homepage/hero-background.jpg)` }}>
          </CarouselItem>
          <CarouselItem className="w-full bg-cover bg-center" style={{ backgroundImage: `url(/images/Homepage/hero-background.jpg)` }}>
          </CarouselItem>
          <CarouselItem className="w-full bg-cover bg-center" style={{ backgroundImage: `url(/images/Homepage/hero-background.jpg)` }}>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#644C8F]/20 z-10"></div>
      <div className='md:mt-0 mt-6 pt-[20vw] pb-[24vw] text-center mx-auto h-full relative z-20'>
        <Image alt="Jalan Journey Title" className='mx-auto' src={"/images/Homepage/Hero_Title.png"} width={770} height={160}></Image>
        <p className='text-base sm:text-xl md:text-2xl mt-4 text-white font-bold leading-snug'>Cultivate Deeper Empathy through Play</p>
        <p className='text-sm sm:text-base md:text-lg mt-1 text-white leading-snug'>We create games with meaningful social themes</p>
      </div>
      </>
  );
};

export default HeroSection;