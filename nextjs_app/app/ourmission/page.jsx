'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const TeamMember = {
  name: "Harrison Chong",
  slug: "harrisonchong",
  position: "Co-Founder & CEO",
  imgSrc: "Harrison.png",
  description: [
    "Harrison is a rising Sophomore at the University of Pennsylvania where he’s studying Mechanical Engineering. Apart from Jalan Journey, he is the cofounder of Comm.UnitySG, Singapore’s largest student volunteer organisation for homelessness, winner of the National Youth Entrepreneurship Award Bronze and also the VP of the Wharton Undergraduate Entrepreneurship Club.",
    "In his spare time, Harrison enjoys playing basketball with friends."
  ],
  linkedin: "linkedin.com"
};

export default function OurMission() {
  const router = useRouter();

  return (
    <main className="w-full pt-8 flex flex-col bg-gradient-to-r from-light-violet to-extra-light-violet min-h-screen">
      <section className="bg-[url('/images/AboutUs/OurVisionMasthead.jpg')] bg-cover bg-center relative">
        <div className='bg-[#674C93AD] absolute top-0 bottom-0 right-0 left-0 z-20'></div>
        <div className='max-w-6xl mx-auto relative z-30 min-h-[350px] flex flex-col justify-center px-5'>
          <h2 className='font-bold text-white text-5xl md:text-7xl'>Our Mission:</h2>
          <h1 className='font-bold text-white text-3xl md:text-5xl mt-3'>To create a safe space for youths to discuss social issues</h1>
        </div>
      </section>

      <section className='max-w-6xl mx-auto pt-2 px-5'>
        <div className='flex gap-1 pb-4'>
          <a href='/about' className='text-white text-base text-center py-1.5 px-3 font-bold'>About Us</a>
          <span className='font-bold text-lg pt-0.5'>{`>`}</span>
          <a href='/about' className='text-white text-base text-center py-1.5 px-3 font-bold'>Team</a>
          <span className='font-bold text-lg pt-0.5'>{`>`}</span>
          <a href={`/ourmission`} className='text-[#306054] text-base text-center py-1.5 px-3 font-bold'>{TeamMember.name}</a>
        </div>
        <div className='md:flex gap-10 items-start pb-6'>
          <div className='flex flex-col items-center gap-2.5'>
            <Image alt="About Us Image" src={`/images/AboutUs/${TeamMember.imgSrc}`} width={350} height={350} />
            <a href="http://www.linkedin.com" target='_blank'><Image alt="LinkedIn Image" src={`/images/AboutUs/LinkedIn.png`} width={40} height={40} /></a>
          </div>
          <div className='font-normal text-black text-base flex flex-col gap-5 w-full md:w-[60%] pt-6'>
            <p className='font-semibold text-[#674C93] text-[36px] pb-3'>{TeamMember.name}</p>
            <p className='text-[#494747]'>{TeamMember.position}</p>
            {TeamMember.description.map((item, index) => {
              return (<p index={index}>{item}</p>)
            })}
            <Button onClick={() => router.push("/about")} className="bg-transparent border-white border-2 self-start hover:border-white hover:bg-white/10">Browse The Full Team</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
