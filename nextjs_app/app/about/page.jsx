'use client';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const Team = [
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  },
  {
    name: "Harrison Chong",
    position: "Co-Founder & CEO",
    imgSrc: "Team.png",
  }
];

const Nav = [
  "Message",
  "Team",
  "Advisors",
  "Values",
  "Our Journey",
  "Supporters",
  "Partners",
]

export default function AboutUS() {
  return (
    <main className="w-full pt-8 flex flex-col bg-gradient-to-r from-light-violet to-extra-light-violet min-h-screen">
      <section className="bg-[url('/images/AboutUs/OurVisionMasthead.jpg')] bg-cover bg-center relative">
        <div className='bg-[#674C93AD] absolute top-0 bottom-0 right-0 left-0 z-20'></div>
        <div className='max-w-6xl mx-auto relative z-30 min-h-[350px] flex flex-col justify-center'>
          <h2 className='font-bold text-white text-[72px]'>Our Vision:</h2>
          <h1 className='font-bold text-white text-[50px]'>A Catalyst for the Empowerment of changemakers</h1>
        </div>
        <div className='max-w-6xl mx-auto flex relative z-30 gap-1 w-full'>
          {Nav.map((item, index) => {
            return (
              <a index={index} href={`#${item}`} className='text-white text-base text-center bg-[#674C93] hover:bg-[#7A5BAD] py-1.5 px-3 border-2 border-white rounded-lg grow'>{item}</a>
            )
          })}
        </div>
      </section>

      <section className='max-w-6xl mx-auto flex gap-10 items-start pt-8'>
        <Image alt="About Us Image" className='' src={`/images/AboutUs/AboutUs.png`} width={500} height={500} />
        <div className='font-normal text-white text-base flex flex-col gap-5 w-[60%]'>
          <p className='font-semibold text-white text-[36px] pb-3'>A message from our Founders,</p>
          <p>We've been driven by a lifelong quest for impactful education and societal change.</p>
          <p>Having dedicated years to volunteering and running Comm.UnitySG, we saw firsthand the transformative power of youth initiatives. However, we recognized a critical gap: many young minds lacked engagement with social issues due to traditional educational barriers.</p>
          <p>That's where Jalan Journey began. Inspired by our experiences, we envisioned a platform where learning about social issues wasn't just educational but also engaging and empowering. By gamifying Citizenship and Character Education (CCE), we've revolutionized how students interact with complex societal challenges.</p>
          <p>Our approach isn't just about teaching facts; it's about storytelling and empathy. Through immersive digital experiences, students delve into the lives of marginalized groups, fostering understanding and empathy that textbooks often miss.</p>
          <p>Teaching about Social Issues isn't easy, Jalan Journey is here to help solve that.</p>
          <p>Warm regards,</p>
          <p>Harrison and Sri Co-founders<br />@JalanJourney</p>
        </div>
      </section>

      <section className='bg-[#836AA4]'>
        <div className='max-w-6xl mx-auto text-center pt-16'>
          <h6 className='text-white text-[46px] font-bold'>Meet the Team</h6>
          <p className='text-white text-[28px] font-normal'>For Students, by Students</p>
          <div className='grid grid-cols-5 gap-8 mt-16'>
            {Team.map((member, index) => {
              return (
                <div index={index} className='flex flex-col items-center'>
                  <Image alt={`${member.name} Image`} className='drop-shadow z-30' src={`/images/AboutUs/${member.imgSrc}`} width={120} height={120} />
                  <p className='drop-shadow bg-[#F1E8DB] w-full p-2 pt-10 -mt-8 rounded-md shadow-[#306054] text-black font-semibold text-lg uppercase'>{member.name}<br />{member.position}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className='bg-[#674C93]'>
        <div className='max-w-6xl mx-auto text-center pt-16'>
          <h6 className='text-white text-[46px] font-bold'>Meet Our Advisors</h6>
          <p className='text-white text-[28px] font-normal'>A wealth of experience and subject matter expertise</p>
          <div className='grid grid-cols-5 gap-8 mt-16'>
            {Team.map((member, index) => {
              return (
                <div index={index} className='flex flex-col items-center'>
                  <Image alt={`${member.name} Image`} className='drop-shadow z-30' src={`/images/AboutUs/${member.imgSrc}`} width={120} height={120} />
                  <p className='drop-shadow bg-[#F1E8DB] w-full p-2 pt-10 -mt-8 rounded-md shadow-[#306054] text-black font-semibold text-lg uppercase'>{member.name}<br />{member.position}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-b from-[#866BB1] to-[#B8ACC8]'>
        <div className='max-w-6xl mx-auto text-center pt-16'>
          <h6 className='text-white text-[46px] font-bold pb-8'>Our Values</h6>
          <Image alt="Our Values Image" className='w-full' src={`/images/AboutUs/OurValues.png`} width={1000} height={500} />
        </div>
      </section>

      <section className='bg-gradient-to-b to-[#674C93] from-[#B8ACC8]'>
        <div className='max-w-6xl mx-auto text-center pt-16'>
          <h6 className='text-white text-[46px] font-bold pb-8'>Our Journey</h6>
        </div>
      </section>

      <section className='bg-[#674C93]'>
        <div className='max-w-6xl mx-auto text-center pt-16 pb-10'>
          <h6 className='text-white text-[46px] font-bold'>Our Supporters</h6>
          <p className='text-white text-[28px] font-normal'>Those who make it all possible!</p>
        </div>
        <div className="bg-[#BBAFCB]">
          <div className="max-w-6xl mx-auto">
            <Carousel className="max-w-[80%] mx-auto">
              <CarouselContent className="my-5 pl-4 text-center gap-4">
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section className='bg-[#674C93] pb-14'>
        <div className='max-w-6xl mx-auto text-center pt-16 pb-10'>
          <h6 className='text-white text-[46px] font-bold'>Our Partners</h6>
          <p className='text-white text-[28px] font-normal'>Charities & Organisations we work with</p>
        </div>
        <div className="bg-[#BBAFCB]">
          <div className="max-w-6xl mx-auto">
            <Carousel className="max-w-[80%] mx-auto">
              <CarouselContent className="my-5 pl-4 text-center gap-4">
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Game Here
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
}
