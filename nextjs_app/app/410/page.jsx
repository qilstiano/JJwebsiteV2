'use client';
import Image from 'next/image';

export default function LinkExpired() {
  return (
    <main className="w-full bg-[#BBAFCB]">
      <section className="max-w-6xl mx-auto flex gap-3 pt-16">
        <div className='flex flex-col gap-5 pt-8'>
          <p className='font-bold text-[#267A6D] text-[72px] relative'>
            Uh oh!
            <span className='text-white absolute -top-0.5 -left-0.5'>Uh oh!</span>
          </p>
          <p className='text-black text-[24px] uppercase'>LINK EXPIRED</p>
          <p className='text-black text-[18px]'>Error code: 410</p>
          <p className='text-black text-[18px]'>It looks like this game link has expired. Please contact the game organiser</p>
          <a className="text-white text-lg font-bold border-white border-[3px] px-7 rounded-md px-3 py-2 self-start hover:bg-white/20" href='/'>Back To Homepage</a>
        </div>
        <Image alt="Join Us Image" className='self-center -mb-20' src={`/images/Misc/Error.png`} width={700} height={700} />
      </section>
    </main>
  );
}
