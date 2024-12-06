import Image from 'next/image'

const GettingStarted = () => {
  return (
    <section className="max-w-4xl px-8 py-4 mx-auto">
      <h2 className='text-3xl text-white mb-5'>Create an Account</h2>
      <div className="rounded-md bg-[#B29FD1] p-5 md:flex gap-8">
        <Image src="../images/ConfusedFlower.svg" alt="Flower" width={200} height={200} className='mx-auto md:mx-0' />
        <div className='flex flex-col gap-2 w-full md:w-[60%] text-base'>
          <h2 className="text-[#306054] text-3xl font-bold mb-1">What's next?</h2>
          <p className='font-semibold'>
            After creating an account, you will receive a confirmation email. Once confirmed, you can start using our content and gain access to:
          </p>
          <ul className="ml-4 flex flex-col gap-1">
            <li className='list-disc'>Supplementary materials</li>
            <li className='list-disc'>Setting up your own class and inviting learners</li>
            <li className='list-disc'>Managing and launching experiences on your own schedule</li>
            <li className='list-disc'>Monitoring learner progress and performance</li>
          </ul>
          <p className='font-semibold'>
            Still have questions? Check out our <a href="/faq" className='underline underline-offset-2'>FAQs</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default GettingStarted;
