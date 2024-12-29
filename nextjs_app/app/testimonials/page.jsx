'use client';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const ClientsTestimonials = [
  {
    name: "Harrison Chong",
    position: "Teacher at ACS",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Netus aenean sed luctus varius. Velit viverra varius quis libero. Id aliquam adipiscing posuere gravida.",
    imgSrc: "SchoolLogo.png",
  },
  {
    name: "Harrison Chong",
    position: "Teacher at ACS",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Netus aenean sed luctus varius. Velit viverra varius quis libero. Id aliquam adipiscing posuere gravida.",
    imgSrc: "SchoolLogo.png",
  },
  {
    name: "Harrison Chong",
    position: "Teacher at ACS",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Netus aenean sed luctus varius. Velit viverra varius quis libero. Id aliquam adipiscing posuere gravida.",
    imgSrc: "SchoolLogo.png",
  },
  {
    name: "Harrison Chong",
    position: "Teacher at ACS",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Netus aenean sed luctus varius. Velit viverra varius quis libero. Id aliquam adipiscing posuere gravida.",
    imgSrc: "SchoolLogo.png",
  },
  {
    name: "Harrison Chong",
    position: "Teacher at ACS",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Netus aenean sed luctus varius. Velit viverra varius quis libero. Id aliquam adipiscing posuere gravida.",
    imgSrc: "SchoolLogo.png",
  },
  {
    name: "Harrison Chong",
    position: "Teacher at ACS",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Netus aenean sed luctus varius. Velit viverra varius quis libero. Id aliquam adipiscing posuere gravida.",
    imgSrc: "SchoolLogo.png",
  },
];

const PastExperiences = [
  "PastExperiences_1.jpg",
  "PastExperiences_2.jpg",
  "PastExperiences_3.jpg",
]

export default function Testimonials() {
  return (
    <main className="w-full pt-8 flex flex-col bg-[#4B3372] min-h-screen">
      <section className="bg-[url('/images/Testimonials/TestimonialsMasthead.jpg')] bg-cover bg-center relative">
        <div className='bg-[#674C93AD] absolute top-0 bottom-0 right-0 left-0 z-20'></div>
        <div className='max-w-6xl mx-auto relative z-30 min-h-[350px] flex flex-col justify-center px-5'>
          <h2 className='font-bold text-white text-5xl md:text-7xl'>Testimonials</h2>
        </div>
      </section>
      
      <section className='bg-[#4B3372]'>
        <div className='max-w-6xl mx-auto text-center pt-16 pb-10'>
          <h6 className='text-white text-3xl lg:text-5xl font-bold'>Some of Our Past Clients</h6>
        </div>
        <div className="bg-[#BBAFCB]">
          <div className="max-w-6xl mx-auto">
            <Carousel className="max-w-[80%] mx-auto">
              <CarouselContent className="my-5 pl-4 text-center gap-4">
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Logo Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Logo Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Logo Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Logo Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Logo Here
                </CarouselItem>
                <CarouselItem className="sm:basis-1/3 lg:basis-1/6 pl-0 h-[200px] flex items-center justify-center text-black font-semibold text-xl bg-white rounded-lg uppercase">
                  Logo Here
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section className='bg-[#4B3372] pb-14'>
        <div className='max-w-6xl mx-auto text-center pt-16 pb-10 px-5'>
          <h6 className='text-white text-3xl lg:text-5xl font-bold'>See What They Say</h6>
          <div className='w-[157px] h-1 bg-[#FFFFFF] mx-auto mt-2 mb-5'></div>
          <p className='text-white text-2xl font-normal'>Our success is built on strong relationships with our clients, whose feedback is crucial for us to continually improve and innovate. Here’s what our partners and learners have to say about their experiences with us.</p>
        </div>
        <div className="bg-[url('/images/Testimonials/TestimonialsBackground.jpg')] bg-cover bg-center relative">
          <div className='bg-[#1F0B3F]/85 absolute top-0 bottom-0 right-0 left-0 z-20'></div>
          <div className="max-w-6xl mx-auto relative z-30">
            <Carousel className="max-w-[80%] mx-auto">
              <CarouselContent className="my-10 pl-10 text-center gap-10">
                {ClientsTestimonials.map((item, index) => {
                  //  items-center justify-center
                  return (
                    <CarouselItem index={index} className="md:basis-1/2 lg:basis-1/3 pl-0 bg-white rounded-md p-5 text-center flex flex-col gap-4 relative">
                      <div className='bg-[#674C93] rounded-full absolute -top-5 -left-5 z-30 h-12 w-12 flex justify-center items-center'>
                        <Image alt="School Logo" src={`/images/Testimonials/Quotations.png`} width={30} height={30} />
                      </div>
                      <Image alt="School Logo" className='w-1/3 mx-auto' src={`/images/Testimonials/${item.imgSrc}`} width={100} height={100} />
                      <p className='text-[#111111] font-normal text-xl'>{item.testimonial}</p>
                      <p className='text-[#111111] font-bold text-xl uppercase mt-5'>{item.name}</p>
                      <p className='text-[#111111] font-normal text-xl uppercase'>{item.position}</p>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section className='bg-[#4B3372]'>
        <div className='max-w-6xl mx-auto text-center pb-10'>
          <h6 className='text-white text-3xl lg:text-5xl font-bold'>Past Experiences</h6>
        </div>
        <div className="bg-[#BBAFCB]">
          <div className="max-w-6xl mx-auto relative z-30">
            <Carousel className="max-w-[80%] mx-auto">
              <CarouselContent className="my-3 pl-10 gap-3">
                {PastExperiences.map((imgSrc, index) => {
                  return (
                    <CarouselItem index={index} className="basis-auto pl-0 w-auto">
                      <Image alt="Experience Image" className='w-auto h-[300px]' src={`/images/Testimonials/${imgSrc}`} width={300} height={300} />
                    </CarouselItem>
                  )
                })}
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
