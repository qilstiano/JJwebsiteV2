'use client';
import Image from 'next/image';

export default function ServerError() {
  return (
    <main className="w-full bg-[#BBAFCB]">
      <section className="max-w-6xl mx-auto flex gap-3 pt-16">
        <div className='flex flex-col gap-5 pt-8'>
          <p className='font-bold text-[#267A6D] text-[72px] relative'>
            Uh oh!
            <span className='text-white absolute -top-0.5 -left-0.5'>Uh oh!</span>
          </p>
          <p className='text-black text-[24px] uppercase'>Server Error</p>
          <p className='text-black text-[18px]'>Error code: 500</p>
          <p className='text-black text-[18px]'>There seems to be an issue with either our server or your connection. Please try again soon.</p>
          <p className='font-bold text-[#267A6D] text-[32px] relative'>
            Please refresh your page
            <span className='text-white absolute -top-0.5 -left-0.5'>Please refresh your page</span>
          </p>
        </div>
        <Image alt="Join Us Image" className='self-center -mb-20' src={`/images/Misc/Error.png`} width={700} height={700} />
      </section>
    </main>
  );
}
