'use client';
import Image from 'next/image';

export default function Loading() {
  return (
    <main className="w-full bg-gradient-to-r from-[#66538C] to-[#B3A7C5] min-h-screen">
      <section className="flex flex-col items-center justify-end pt-24 min-h-screen">
        <p className='font-bold text-white text-[72px] text-center'>We will be with you in a bit!</p>
        <Image alt="Join Us Image" className='' src={`/images/Misc/Loading.png`} width={700} height={700} />
      </section>
    </main>
  );
}
