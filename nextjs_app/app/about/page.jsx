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

export default function AboutUs() {
  return (
    <main className="w-full pt-8 flex flex-col bg-gradient-to-r from-light-violet to-extra-light-violet min-h-screen">
      <section className="bg-[url('/images/AboutUs/OurVisionMasthead.jpg')] bg-cover bg-center relative">
        <div className='bg-[#674C93AD] absolute top-0 bottom-0 right-0 left-0 z-20'></div>
        <div className='max-w-6xl mx-auto relative z-30 min-h-[350px] flex flex-col justify-center px-5'>
          <h2 className='font-bold text-white text-5xl md:text-7xl'>Our Vision:</h2>
          <h1 className='font-bold text-white text-3xl md:text-5xl mt-3'>A Catalyst for the Empowerment of changemakers</h1>
        </div>
        <div className='max-w-6xl mx-auto flex flex-wrap relative z-30 gap-1 w-full px-5'>
          {Nav.map((item, index) => {
            return (
              <a index={index} href={`#${item}`} className='text-white text-base text-center bg-[#674C93] hover:bg-[#7A5BAD] py-1.5 px-3 border-2 border-white rounded-lg grow'>{item}</a>
            )
          })}
        </div>
      </section>

      <section className='max-w-6xl mx-auto lg:flex gap-10 items-start pt-8 pb-6 px-5'>
        <Image alt="About Us Image" className='w-[80%] mx-auto mb-8 lg:m-0 lg:w-[40%]' src={`/images/AboutUs/AboutUs.png`} width={500} height={500} />
        <div className='font-normal text-white text-base flex flex-col gap-5 w-full lg:w-[60%]'>
          <p className='font-semibold text-white text-4xl pb-3'>A message from our Founders,</p>
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
        <div className='max-w-6xl mx-auto text-center pt-16 pb-6 px-5'>
          <h6 className='text-white text-3xl lg:text-5xl font-bold'>Meet the Team</h6>
          <p className='text-white text-2xl mt-2 font-normal'>For Students, by Students</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-16'>
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
        <div className='max-w-6xl mx-auto text-center pt-16 pb-6 px-5'>
          <h6 className='text-white text-3xl lg:text-5xl font-bold'>Meet Our Advisors</h6>
          <p className='text-white text-2xl mt-2 font-normal'>A wealth of experience and subject matter expertise</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-16'>
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
        <div className='max-w-6xl mx-auto text-center pt-16 px-5 px-5'>
          <h6 className='text-white text-3xl lg:text-5xl font-bold pb-8'>Our Values</h6>
          <Image alt="Our Values Image" className='w-full' src={`/images/AboutUs/OurValues.png`} width={1000} height={500} />
        </div>
      </section>

      <section className='bg-gradient-to-b to-[#674C93] from-[#B8ACC8]'>
        <div className='max-w-6xl mx-auto text-center pt-16 px-5'>
          <h6 className='text-white text-3xl lg:text-5xl font-bold pb-8'>Our Journey</h6>
        </div>
        <Carousel className="max-w-3xl w-2/3 mx-auto">
          <CarouselContent className="ml-0">
            <CarouselItem className="w-full mx-auto bg-[#F1E8DB] md:flex gap-5 rounded-md p-5 border-[#306054] border-l-8 border-b-8 mb-10 relative">
              <Image alt="Our Journey Image" className='w-full md:w-1/2 self-center' src={`/images/AboutUs/OurJourneyImage.jpg`} width={400} height={250} />
              <div className='w-full flex flex-col relative pb-12 pt-5 md:pt-0'>
                <p className='font-bold text-[28px] text-white rounded-md bg-[#306054] px-4 py-1 self-center'>2022</p>
                <ul className='text-black flex flex-col gap-2 ml-5 uppercase mt-5'>
                  <li className='list-disc font-bold'>Founded in October 2022</li>
                  <li className='list-disc'>CYZ</li>
                  <li className='list-disc'>CYZ</li>
                </ul>
                <CarouselPrevious className="top-20 left-0 top-full -translate-y-full bg-[#306054] text-white hover:bg-[#306054]/80 hover:text-white" />
                <CarouselNext className="top-20 right-10 top-full -translate-y-full bg-[#306054] text-white hover:bg-[#306054]/80 hover:text-white" />
              </div>
              <div className='absolute top-full left-0 border-[#306054] border-t-[40px] border-x-[10px] border-x-transparent translate-x-2.5'></div>
            </CarouselItem>

            <CarouselItem className="w-full mx-auto bg-[#F1E8DB] md:flex gap-5 rounded-md p-5 border-[#306054] border-l-8 border-b-8 mb-10 relative">
              <Image alt="Our Journey Image" className='w-full md:w-1/2 self-center' src={`/images/AboutUs/OurJourneyImage.jpg`} width={400} height={250} />
              <div className='w-full flex flex-col relative pb-12 pt-5 md:pt-0'>
                <p className='font-bold text-[28px] text-white rounded-md bg-[#306054] px-4 py-1 self-center'>2023</p>
                <ul className='text-black flex flex-col gap-2 ml-5 uppercase mt-5'>
                  <li className='list-disc font-bold'>CYZ</li>
                  <li className='list-disc'>CYZ</li>
                  <li className='list-disc'>CYZ</li>
                </ul>
                <CarouselPrevious className="top-20 left-0 top-full -translate-y-full bg-[#306054] text-white hover:bg-[#306054]/80 hover:text-white" />
                <CarouselNext className="top-20 right-10 top-full -translate-y-full bg-[#306054] text-white hover:bg-[#306054]/80 hover:text-white" />
              </div>
              <div className='absolute top-full left-1/3 -translate-x-1 border-[#306054] border-t-[40px] border-x-[10px] border-x-transparent translate-x-2.5'></div>
            </CarouselItem>

            <CarouselItem className="w-full mx-auto bg-[#F1E8DB] md:flex gap-5 rounded-md p-5 border-[#306054] border-l-8 border-b-8 mb-10 relative">
              <Image alt="Our Journey Image" className='w-full md:w-1/2 self-center' src={`/images/AboutUs/OurJourneyImage.jpg`} width={400} height={250} />
              <div className='w-full flex flex-col relative pb-12 pt-5 md:pt-0'>
                <p className='font-bold text-[28px] text-white rounded-md bg-[#306054] px-4 py-1 self-center'>2024</p>
                <ul className='text-black flex flex-col gap-2 ml-5 uppercase mt-5'>
                  <li className='list-disc font-bold'>CYZ</li>
                  <li className='list-disc'>CYZ</li>
                  <li className='list-disc'>CYZ</li>
                </ul>
                <CarouselPrevious className="top-20 left-0 top-full -translate-y-full bg-[#306054] text-white hover:bg-[#306054]/80 hover:text-white" />
                <CarouselNext className="top-20 right-10 top-full -translate-y-full bg-[#306054] text-white hover:bg-[#306054]/80 hover:text-white" />
              </div>
              <div className='absolute top-full left-2/3 -translate-x-2 border-[#306054] border-t-[40px] border-x-[10px] border-x-transparent translate-x-2.5'></div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className='max-w-3xl w-2/3 mx-auto mt-4 relative'>
          <div className='absolute w-full top-1/2 -translate-y-1/2 translate-x-1 h-2 bg-white rounded-lg'></div>
          <div className='flex justify-between'>
            <div className='bg-[#306054] rounded-full w-10 h-10 border-4 relative'>
              <p className='text-white text-[24px] absolute top-full left-0 -translate-x-1/4 translate-y-2'>2022</p>
            </div>
            <div className='bg-[#306054] rounded-full w-10 h-10 border-4 relative'>
              <p className='text-white text-[24px] absolute top-full left-0 -translate-x-1/4 translate-y-2'>2023</p>
            </div>
            <div className='bg-[#306054] rounded-full w-10 h-10 border-4 relative'>
              <p className='text-white text-[24px] absolute top-full left-0 -translate-x-1/4 translate-y-2'>2024</p>
            </div>
            <div className='relative'>
              <div className='border-white border-l-[25px] border-y-[25px] border-y-transparent rounded-lg translate-x-2.5'></div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#674C93]'>
        <div className='max-w-6xl mx-auto text-center pt-28 pb-10 px-5'>
          <h6 className='text-white text-3xl lg:text-5xl font-bold'>Our Supporters</h6>
          <p className='text-white text-2xl mt-2 font-normal'>Those who make it all possible!</p>
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
        <div className='max-w-6xl mx-auto text-center pt-16 pb-10 px-5'>
          <h6 className='text-white text-3xl lg:text-5xl font-bold'>Our Partners</h6>
          <p className='text-white text-2xl mt-2 font-normal'>Charities & Organisations we work with</p>
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
