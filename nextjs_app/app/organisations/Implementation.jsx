import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Implementation = () => {
  return (
    <Accordion className="px-5 lg:max-w-[80%] mx-auto py-8" type="single" collapsible>
      <AccordionItem value="usage-scenarios" className="border-none bg-[#517C72] rounded-sm">
        <AccordionTrigger className="text-white text-3xl md:text-4xl md:py-5 hover:no-underline px-10 text-left">Usage Scenarios</AccordionTrigger>
        <AccordionContent className="pb-0 text-white text-lg bg-[#6C8B84] px-8 py-4">
          <h3 className='text-xl font-bold mt-8 mb-2'>1. Character Education Modules</h3>
          <p className='text-lg mb-5'>Every youth should learn these vital life lessons but making the lessons engaging shouldn't solely fall on the teacher. Use our modules to teach Character Education content in a fun and interactive way.</p>
          <video width="100%" controls>
            <source src="path_to_your_video_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <h3 className='text-xl font-bold mt-8 mb-2'>2. Topical Teaching Aids</h3>
          <p className='text-lg mb-5'>Enhance your lessons with teaching aids that illustrate key concepts clearly or give teachers a much-needed break. For instance, use tools to help students grasp social inequality in social studies or play our recycling game to teach chemistry concepts.</p>
          <video width="100%" controls>
            <source src="path_to_your_video_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <h3 className='text-xl font-bold mt-8 mb-2'>3. Volunteer/Community Project Identification Tool</h3>
          <p className='text-lg mb-5'>Worried that students may not be fully committed to a project? Let them explore and understand the cause beforehand. Our games can provide the necessary theory and context in a safe virtual environment, preparing students in a mature and informed manner. It could even assist in their ideation!</p>
          
          <h3 className='text-xl font-bold mt-8 mb-2'>4. Learning Journey Supplement/Replacement</h3>
          <p className='text-lg mb-5'>Sometimes it's a hassle to visit a location in person. Use our time-effective and cost-effective service to bring the event experience directly to your classroom. Save time and money, all while in the comfort of your classroom.</p>
          
          <h3 className='text-xl font-bold mt-8 mb-2'>5. Post-Exam Enrichment Activity</h3>
          <p className='text-lg mb-5'>Waiting for the school holidays? Develop your students holistically with activities that are both fun and educational.</p>
          
          <h3 className='text-xl font-bold mt-8 mb-2'>6. School Events</h3>
          <p className='text-lg mb-5'>Celebrate occasions like Youth Environment Day with recycling games that promote environmental awareness.</p>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="step-by-step-guide" className="border-none bg-[#517C72] rounded-sm">
        <AccordionTrigger className="text-white text-3xl md:text-4xl md:py-5 hover:no-underline px-10 text-left">Step-by-Step Guide</AccordionTrigger>
        <AccordionContent className="pb-0">
          
          <Accordion className="bg-[#5A7771]" type="multiple" collapsible>
            <AccordionItem value="self-operated" className="border-none">
              <AccordionTrigger className="text-white text-2xl hover:no-underline px-10 font-bold text-left">Self-Operated (Without Facilitator)</AccordionTrigger>
              <AccordionContent className="pb-0 text-white text-lg bg-[#6C8B84] px-8 py-4">
                <video width="100%" controls>
                  <source src="path_to_your_video_1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <h3 className='text-xl font-bold mt-8 mb-2'>Step 1: Purchase the Game</h3>
                <ul className="ml-4">
                  <li className='text-lg list-disc'>
                    Visit the Jalan Journey website.
                  </li>
                  <li className='text-lg list-disc'>
                    Navigate to the "Games" section.
                  </li>
                  <li className='text-lg list-disc'>
                    Select the desired game and complete the online purchase or contact us.
                  </li>
                </ul>
                
                <h3 className='text-xl font-bold mt-8 mb-2'>Step 2: Receive the Game Link and Materials</h3>
                <ul className="ml-4">
                  <li className='text-lg list-disc'>
                  After purchase, you will receive a unique link to access the game.
                  </li>
                  <li className='text-lg list-disc'>
                  An instruction manual and troubleshooting guide will be provided.
                  </li>
                  <li className='text-lg list-disc'>
                  Optionally, you can schedule a short and easy platform training session with our team, though it is not necessary due to the intuitive design of the games.
                  </li>
                </ul>
                
                <h3 className='text-xl font-bold mt-8 mb-2'>Step 3: Integrate into Your Curriculum</h3>
                <ul className="ml-4">
                  <li className='text-lg list-disc'>
                  Review the instruction manual to understand the game’s mechanics and educational objectives.
                  </li>
                  <li className='text-lg list-disc'>
                  Plan how to incorporate the game into your lesson plans to complement your teaching aids.
                  </li>
                  <li className='text-lg list-disc'>
                  Prepare any additional materials or activities that will accompany the game. We are more than happy to assist you on this matter, feel free to ask!
                  </li>
                </ul>
                
                <h3 className='text-xl font-bold mt-8 mb-2'>Step 4: Use the Game in the Classroom</h3>
                <ul className="ml-4">
                  <li className='text-lg list-disc'>
                  Access the game using the provided link.
                  </li>
                  <li className='text-lg list-disc'>
                  Guide your students through the game, following the planned integration.
                  </li>
                  <li className='text-lg list-disc'>
                  Enjoy the interactive learning experience!
                  </li>
                </ul>
                
                <h3 className='text-xl font-bold mt-8 mb-2'>Additional Support:</h3>
                <ul className="ml-4">
                  <li className='text-lg list-disc'>
                  If you encounter any issues, refer to the troubleshooting guide.
                  </li>
                  <li className='text-lg list-disc'>
                  For further assistance, contact our support staff who are ready to help.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="facilitator-run" className="border-none">
              <AccordionTrigger className="text-white text-2xl hover:no-underline px-10 font-bold text-left">Facilitator Run</AccordionTrigger>
              <AccordionContent className="pb-0 text-white text-lg bg-[#6C8B84] px-8 py-4">
              <video width="100%" controls>
                  <source src="path_to_your_video_1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <h3 className='text-xl font-bold mt-8 mb-2'>Step 1: Contact Us and Arrange a Date</h3>
                <ul className="ml-4">
                  <li className='text-lg list-disc'>
                  <a href="/contactus">Contact us</a> to express your interest in a facilitator-run programme.
                  </li>
                  <li className='text-lg list-disc'>
                  Arrange a suitable date for the programme with our team. Preferably, at least two months in advance!
                  </li>
                </ul>
                
                <h3 className='text-xl font-bold mt-8 mb-2'>Step 2: Confirm Logistics</h3>
                <ul className="ml-4">
                  <li className='text-lg list-disc'>
                  Provide the number of classes and students participating.
                  </li>
                  <li className='text-lg list-disc'>
                  Confirm logistical arrangements with our team, such as the provision of:
                    <ul className="ml-4">
                      <li className='text-lg list-disc'>
                        HDMI cables
                      </li>
                      <li className='text-lg list-disc'>
                      Microphones/Audio Equipment
                      </li>
                      <li className='text-lg list-disc'>
                      Laptops with internet-access
                      </li>
                      <li className='text-lg list-disc'>
                      WiFi Passwords
                      </li>
                    </ul>
                  </li>
                </ul>
                
                <h3 className='text-xl font-bold mt-8 mb-2'>Step 3: Integrate into Your Curriculum</h3>
                <ul className="ml-4">
                  <li className='text-lg list-disc'>
                  Review the instruction manual to understand the game’s mechanics and educational objectives.
                  </li>
                  <li className='text-lg list-disc'>
                  Plan how to incorporate the game into your lesson plans to complement your teaching aids.
                  </li>
                  <li className='text-lg list-disc'>
                  Prepare any additional materials or activities that will accompany the game. We are more than happy to assist you on this matter, feel free to ask!
                  </li>
                </ul>
                
                <h3 className='text-xl font-bold mt-8 mb-2'>Step 3: Preparation on the Day</h3>
                <ul className="ml-4">
                  <li className='text-lg list-disc'>
                  On the day of the programme, our facilitators will arrive 45 minutes before the start time.
                  </li>
                  <li className='text-lg list-disc'>
                  Facilitators will handle the setup of all necessary equipment and materials.
                  </li>
                </ul>
                
                <h3 className='text-xl font-bold mt-8 mb-2'>Step 4: Programme Execution</h3>
                <ul className="ml-4">
                  <li className='text-lg list-disc'>
                  Teachers can sit back while our facilitators manage the setup and arrangement of students.
                  </li>
                  <li className='text-lg list-disc'>
                  Teachers are only required to assist with general classroom management.
                  </li>
                  <li className='text-lg list-disc'>
                  Facilitators will lead the entire programme, using facilitation materials such as slides and reflection questions to engage students.
                  </li>
                </ul>
                
                <h3 className='text-xl font-bold mt-8 mb-2'>Step 5: Wrap Up</h3>
                <ul className="ml-4">
                  <li className='text-lg list-disc'>
                  At the end of the programme, facilitators will pack up the equipment.
                  </li>
                  <li className='text-lg list-disc'>
                  Facilitators will wrap up the session and hand over control back to the teachers.
                  </li>
                  <li className='text-lg list-disc'>
                  As always, the process is designed to be hassle-free for the teachers.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Implementation;
