'use client';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <div className='max-w-6xl mx-auto relative z-30 min-h-[350px] flex flex-col justify-center'>
          <h2 className='font-normal text-white text-[72px]'>FAQ</h2>
          <h2 className='font-bold text-white text-[72px]'>Frequently Asked Questions</h2>
        </div>
      </section>
      
      <section className='bg-[#674C93] pt-16 pb-10'>
        <Accordion className="max-w-[80%] mx-auto" type="single" collapsible>
          <AccordionItem value="institutions" className="border-none bg-[#8A74A5] rounded-sm">
            <AccordionTrigger className="text-white text-[46px] hover:no-underline px-10">For Institutions</AccordionTrigger>
            <AccordionContent className="pb-0">
              <Accordion className="bg-[#967BC2]" type="multiple" collapsible>
                <AccordionItem className="border-none" value="institutions-1">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">How long does it take to set up?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                    Setup is instantaneous. No downloads are required—players simply use their personal learning devices and join via the provided link.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-2">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Do I need to download anything to use the game?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  We recommend using a laptop or tablet with a stable internet connection for the best experience.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-3">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">What devices can I use?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  No downloads are necessary. It is a web browser plug-and-play game.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-4">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Do I need to be tech-savvy to use the games?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  No, the games and instructions are intuitive and self-explanatory. Most students can navigate them independently. Additional support is available if needed.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-5">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Do my students need to be tech-savvy?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  No, students generally find the games easy to use due to their digital literacy. They can typically navigate the games without assistance.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-6">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">How many players can play at once?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  Our games are designed to accommodate 1-5 players on a single device. Each device can be thought of as a single team sharing control of one player. Game modes are specified as either single device (one team playing alone) or multi-device (multiple teams interacting together in the game).
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-7">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">How many connections should I get, and for how many students?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  We recommend grouping students into groups of 3-5, sharing one learning device. This promotes collaborative learning and peer reflection as they make collective decisions before taking action.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-8">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Is there a minimum or maximum number of connections?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  Except for multi-device games, which require at least two (2) connections, our games can support from one (1) to an unlimited number of connections.Except for multi-device games, which require at least two (2) connections, our games can support from one (1) to an unlimited number of connections.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </AccordionContent>
          </AccordionItem>
        
          <AccordionItem value="organisations" className="border-none bg-[#306054] rounded-sm">
            <AccordionTrigger className="text-white text-[46px] hover:no-underline px-10">For Organisations</AccordionTrigger>
            <AccordionContent className="pb-0">
              <Accordion className="bg-[#517C72]" type="multiple" collapsible>
                <AccordionItem className="border-none" value="organisations-1">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">How long does it take to set up?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#6C8B84] px-8 py-4">
                  Setup is instantaneous. No downloads are required—players simply use their personal learning devices and join via the provided link.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="organisations-2">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Do I need to download anything to use the game?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#6C8B84] px-8 py-4">
                  We recommend using a laptop or tablet with a stable internet connection for the best experience.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="organisations-3">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">What devices can I use?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#6C8B84] px-8 py-4">
                  No downloads are necessary. It is a web browser plug-and-play game.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="organisations-4">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Do I need to be tech-savvy to use the games?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#6C8B84] px-8 py-4">
                  No, the games and instructions are intuitive and self-explanatory. Most students can navigate them independently. Additional support is available if needed.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="organisations-5">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Do my students need to be tech-savvy?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#6C8B84] px-8 py-4">
                  No, students generally find the games easy to use due to their digital literacy. They can typically navigate the games without assistance.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="organisations-6">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">How many players can play at once?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#6C8B84] px-8 py-4">
                  Our games are designed to accommodate 1-5 players on a single device. Each device can be thought of as a single team sharing control of one player. Game modes are specified as either single device (one team playing alone) or multi-device (multiple teams interacting together in the game).
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="organisations-7">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">How many connections should I get, and for how many students?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#6C8B84] px-8 py-4">
                  We recommend grouping students into groups of 3-5, sharing one learning device. This promotes collaborative learning and peer reflection as they make collective decisions before taking action.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="organisations-8">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Is there a minimum or maximum number of connections?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#6C8B84] px-8 py-4">
                  Except for multi-device games, which require at least two (2) connections, our games can support from one (1) to an unlimited number of connections.Except for multi-device games, which require at least two (2) connections, our games can support from one (1) to an unlimited number of connections.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="individuals" className="border-none bg-[#347184] rounded-sm">
            <AccordionTrigger className="text-white text-[46px] hover:no-underline px-10">For Individuals</AccordionTrigger>
            <AccordionContent className="pb-0">
              <Accordion className="bg-[#6B8690]" type="multiple" collapsible>
                <AccordionItem className="border-none" value="individuals-1">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">How long does it take to set up?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#88A7B1] px-8 py-4">
                  Setup is instantaneous. No downloads are required—players simply use their personal learning devices and join via the provided link.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="individuals-2">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Do I need to download anything to use the game?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#88A7B1] px-8 py-4">
                  We recommend using a laptop or tablet with a stable internet connection for the best experience.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="individuals-3">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">What devices can I use?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#88A7B1] px-8 py-4">
                  No downloads are necessary. It is a web browser plug-and-play game.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="individuals-4">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Do I need to be tech-savvy to use the games?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#88A7B1] px-8 py-4">
                  No, the games and instructions are intuitive and self-explanatory. Most students can navigate them independently. Additional support is available if needed.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="individuals-5">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Do my students need to be tech-savvy?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#88A7B1] px-8 py-4">
                  No, students generally find the games easy to use due to their digital literacy. They can typically navigate the games without assistance.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="individuals-6">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">How many players can play at once?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#88A7B1] px-8 py-4">
                  Our games are designed to accommodate 1-5 players on a single device. Each device can be thought of as a single team sharing control of one player. Game modes are specified as either single device (one team playing alone) or multi-device (multiple teams interacting together in the game).
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="individuals-7">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">How many connections should I get, and for how many students?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#88A7B1] px-8 py-4">
                  We recommend grouping students into groups of 3-5, sharing one learning device. This promotes collaborative learning and peer reflection as they make collective decisions before taking action.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="individuals-8">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Is there a minimum or maximum number of connections?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#88A7B1] px-8 py-4">
                  Except for multi-device games, which require at least two (2) connections, our games can support from one (1) to an unlimited number of connections.Except for multi-device games, which require at least two (2) connections, our games can support from one (1) to an unlimited number of connections.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="account-management" className="border-none bg-[#73717D] rounded-sm">
            <AccordionTrigger className="text-white text-[46px] hover:no-underline px-10">Account Management</AccordionTrigger>
            <AccordionContent className="pb-0">
              <Accordion className="bg-[#908E9C]" type="multiple" collapsible>
                <AccordionItem className="border-none" value="account-management-1">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">How long does it take to set up?</AccordionTrigger>
                  <AccordionContent className="text-[#56555E] text-lg bg-[#B7B4C8] px-8 py-4">
                  Setup is instantaneous. No downloads are required—players simply use their personal learning devices and join via the provided link.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="account-management-2">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Do I need to download anything to use the game?</AccordionTrigger>
                  <AccordionContent className="text-[#56555E] text-lg bg-[#B7B4C8] px-8 py-4">
                  We recommend using a laptop or tablet with a stable internet connection for the best experience.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="account-management-3">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">What devices can I use?</AccordionTrigger>
                  <AccordionContent className="text-[#56555E] text-lg bg-[#B7B4C8] px-8 py-4">
                  No downloads are necessary. It is a web browser plug-and-play game.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="payment" className="border-none bg-[#73717D] rounded-sm">
            <AccordionTrigger className="text-white text-[46px] hover:no-underline px-10">Payment</AccordionTrigger>
            <AccordionContent className="pb-0">
              <Accordion className="bg-[#908E9C]" type="multiple" collapsible>
                <AccordionItem className="border-none" value="payment-1">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">How long does it take to set up?</AccordionTrigger>
                  <AccordionContent className="text-[#56555E] text-lg bg-[#B7B4C8] px-8 py-4">
                  Setup is instantaneous. No downloads are required—players simply use their personal learning devices and join via the provided link.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="payment-2">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">Do I need to download anything to use the game?</AccordionTrigger>
                  <AccordionContent className="text-[#56555E] text-lg bg-[#B7B4C8] px-8 py-4">
                  We recommend using a laptop or tablet with a stable internet connection for the best experience.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="payment-3">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold">What devices can I use?</AccordionTrigger>
                  <AccordionContent className="text-[#56555E] text-lg bg-[#B7B4C8] px-8 py-4">
                  No downloads are necessary. It is a web browser plug-and-play game.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
