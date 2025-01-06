import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RecycleMePage = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#5C477E,#8D77A7)] min-h-screen flex flex-col items-center px-6 py-12">
      {/* Header Section */}
      <div className="w-full max-w-5xl">
        <div className="flex lg:flex-row">
          {/* Left Column */}
          <div className="flex-1 lg:mr-8 lg:pl-0">
            <h1 className="text-6xl font-bold mb-4 text-left text-white">RecycleMe</h1>
            <p className="text-3xl mb-6 text-left text-white">
              Learn to recycle in a competitive "Overcooked" style game
            </p>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 text-left">Learning Outcomes:</h2>
              <ul className="list-disc list-inside text-white space-y-1 pl-3 text-left text-xl">
                <li>Recycling Literacy</li>
                <li>Materials Identification</li>
                <li>Environmental Stewardship</li>
              </ul>
            </div>

            {/* Icons and Details */}
            <div className="flex flex-row items-start mt-10 space-x-10">
              <div className="mt-2 space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src="images/Games/Clock.png" alt="Timer Icon" />
                  </div>
                  <div>
                    <span className="pl-2 text-white font-bold">Learning Time:</span>
                    <br />
                    <span className="pl-2 text-white"> ~10 minutes</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src="images/Games/MonitorMobile.png" alt="Game Mode Icon" />
                  </div>
                  <div>
                    <span className="pl-2 text-white font-bold">Game Mode:</span>
                    <br />
                    <span className="pl-2 text-white"> Single Device</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src="images/Games/AgeRange.png" alt="Age Range Icon" />
                  </div>
                  <div>
                    <span className="pl-2 text-white font-bold">Age Range:</span>
                    <br />
                    <span className="pl-2 text-white"> 10 to 18 Years Old</span>
                  </div>
                </div>
              </div>

              {/* Author and Advisor */}
              <div className="ml-2 mt-2 space-y-4">
                <span className="text-white font-bold">Authored by:</span>
                <br />
                <span className="text-white"> Sricharan Bala</span>
                <br />
                <span className="text-white"> Harrison</span>
                <br />
                <span className="text-white"> Chong Sean Lee</span>
                <br />
                <div className="mt-12 flex-col items-left">
                  <span className="text-white font-bold">Advised by:</span>
                  <br />
                  <span className="text-white"> Sricharan Bala</span>
                </div>
              </div>

              {/* Author and Advisor */}
              <div className="ml-2 mt-2 space-y-4">
                <span className="text-white font-bold">Created by:</span>
                <br />
                <span className="text-white"> Saiful Haque</span>
              </div>
              
            </div>
          </div>

          {/* Right Column */}
          <div className="ml-2 flex flex-col items-left justify-center">
            <div className="bg-gray-300 w-32 h-32 mb-4 rounded"></div>
            {/* Mini Game Button */}
            <div className="bg-[#A2C17C] w-32 h-8 text-center text-xs text-[#306054] outline-2 outline-offset-2 outline-green-200 uppercase font-bold py-2 rounded-lg shadow-md flex items-center justify-center">
              Mini Game
            </div>

            {/* Video Element */}
            <video
              controls
              className="bg-gray-300 w-full h-60 rounded-lg mt-4"
              src="/path/to/your/video.mp4" // Replace with your actual video source
              poster="/path/to/your/video-poster.jpg" // Optional: Replace with a poster image
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-12 w-full max-w-5xl p-4 text-white">
        <h2 className="text-2xl font-bold mb-4">About RecycleMe</h2>
        <p className="text-white mb-6">
          Advised by local experts, RecycleMe teaches students to recycle household items according to
          government standards. Players process items on a conveyor belt through a wash bin or
          workbench before placing them in the correct recycling or waste bin. Correct actions earn
          10 points, while mistakes deduct 5 points.
        </p>
        <h3 className="text-xl font-bold text-white mb-2">Learning Outcomes</h3>
        <ul className="list-disc list-inside text-white space-y-2">
          <li><strong>Recycling Literacy:</strong> Players learn proper recycling methods by processing household items per government standards.</li>
          <li><strong>Materials Identification:</strong> Players improve their ability to identify and recycle different materials correctly.</li>
          <li><strong>Environmental Stewardship:</strong> Players develop a sense of responsibility for sustainable practices and environmental conservation.</li>
        </ul>
      </div>

      <main className="w-full flex flex-col pb-10 drop-shadow-md">
        <section className="pt-10">
          <Accordion className="px-5 lg:max-w-[80%] mx-auto" type="single" collapsible>
            <AccordionItem value="highlights" className="border-none bg-[#8A74A5] rounded-sm">
              <AccordionTrigger className="text-white md:text-4xl md:py-5 px-10 text-left">
                Highlights
              </AccordionTrigger>
              <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                <ol className="list-decimal ml-6 space-y-8">
                  <li>
                    <strong>Turn Education into Excitement</strong><br />
                    Make learning engaging and memorable. By integrating curriculum with interactive gameplay, we inspire curiosity and active participation.
                  </li>
                  <li>
                    <strong>Enhance Comprehension and Retention</strong><br />
                    Game-based learning isn't just enjoyable—it's effective.
                  </li>
                  <li>
                    <strong>Experience Practical Education</strong><br />
                    Through real-world scenarios, we equip students with actionable and applicable skills crucial for navigating the complexities of the world, which is vital for personal growth.
                  </li>
                  <li>
                    <strong>Simplify Logistics</strong><br />
                    Educators save valuable time with our ready-to-use resources, eliminating the need for extensive preparation of curriculum and logistical arrangements.
                  </li>
                  <li>
                    <strong>Explore Diverse Perspectives Safely</strong><br />
                    Engage in scenarios otherwise impractical or sensitive, promoting empathy and understanding without logistical constraints or risks. Our games can serve as a precursor to on-the-ground learning journeys by preparing students through context setting.
                  </li>
                  <li>
                    <strong>Receive In-depth Learning Insights</strong><br />
                    Actively assess students’ performance with post-programme reports that highlight strengths and gaps in student knowledge.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <main className="w-full flex flex-col pb-10 drop-shadow-md">
      <section className='pb-10'>
        <Accordion className="px-5 lg:max-w-[80%] mx-auto" type="single" collapsible>
          <AccordionItem value="institutions" className="border-none bg-[#8A74A5] rounded-sm">
            <AccordionTrigger className="text-white md:text-4xl md:py-5 px-10 text-left">FAQ</AccordionTrigger>
            <AccordionContent className="pb-0">
              <Accordion className="bg-[#967BC2]" type="multiple" collapsible>
                <AccordionItem className="border-none" value="institutions-1">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold text-left">How long does it take to set up?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                    Setup is instantaneous. No downloads are required—players simply use their personal learning devices and join via the provided link.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-2">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold text-left">Do I need to download anything to use the game?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  We recommend using a laptop or tablet with a stable internet connection for the best experience.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-3">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold text-left">What devices can I use?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  No downloads are necessary. It is a web browser plug-and-play game.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-4">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold text-left">Do I need to be tech-savvy to use the games?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  No, the games and instructions are intuitive and self-explanatory. Most students can navigate them independently. Additional support is available if needed.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-5">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold text-left">Do my students need to be tech-savvy?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  No, students generally find the games easy to use due to their digital literacy. They can typically navigate the games without assistance.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-6">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold text-left">How many players can play at once?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  Our games are designed to accommodate 1-5 players on a single device. Each device can be thought of as a single team sharing control of one player. Game modes are specified as either single device (one team playing alone) or multi-device (multiple teams interacting together in the game).
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-7">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold text-left">How many connections should I get, and for how many students?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  We recommend grouping students into groups of 3-5, sharing one learning device. This promotes collaborative learning and peer reflection as they make collective decisions before taking action.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className="border-none" value="institutions-8">
                  <AccordionTrigger className="text-white text-lg hover:no-underline px-10 font-bold text-left">Is there a minimum or maximum number of connections?</AccordionTrigger>
                  <AccordionContent className="text-white text-lg bg-[#B29FD1] px-8 py-4">
                  Except for multi-device games, which require at least two (2) connections, our games can support from one (1) to an unlimited number of connections.Except for multi-device games, which require at least two (2) connections, our games can support from one (1) to an unlimited number of connections.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          </Accordion>
          </section>
          </main>
    </div>
  );
};

export default RecycleMePage;
