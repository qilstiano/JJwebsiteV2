'use client'
import { useState } from 'react'
import Head from 'next/head'
import GameGrid from './GameGrid'
import Implementation from './Implementation'
import GettingStarted from './GettingStarted'

const Nav = [
  {
    label: "Games",
    slug: "games",
  },
  {
    label: "Implementation",
    slug: "implementation",
  },
  {
    label: "Getting Started",
    slug: "gettingStarted",
  },
]

const Home = () => {
  const [activeSegment, setActiveSegment] = useState('games')

  const renderSegment = () => {
    switch (activeSegment) {
      case 'games':
        return <GameGrid />
      case 'implementation':
        return <Implementation />
      case 'gettingStarted':
        return <GettingStarted />
      default:
        return <GameGrid />
    }
  }

  return (
    <main className="w-full pt-8 flex flex-col bg-[#367084] min-h-screen">
      <Head>
        <title>Individuals - Unlock the potential of personalised education</title>
        <meta name="description" content="Unlock the potential of personalised education" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section className="bg-[url('/images/Catalogue/InstitutionsMasthead.jpg')] bg-cover bg-center relative">
        <div className='bg-[#674C93AD] absolute top-0 bottom-0 right-0 left-0 z-20'></div>
        <div className='max-w-6xl mx-auto relative z-30 min-h-[350px] flex flex-col justify-center px-5'>
          <h2 className='font-normal text-white text-5xl md:text-7xl'>Individuals</h2>
          <h2 className='font-bold text-white text-5xl md:text-7xl mt-3'>Unlock the potential of personalised education</h2>
        </div>
        <div className='max-w-6xl mx-auto flex relative z-30 gap-1 w-full px-5'>
          {Nav.map((item, index) => {
            if(activeSegment === item.slug) {
              return (
                <button index={index}
                  onClick={() => setActiveSegment(item.slug)}
                  className='text-white text-base text-center bg-[#674C93] hover:bg-[#7A5BAD] py-1.5 px-3 border-2 border-white rounded-lg grow'>
                    {item.label}
                </button>
              )
            }
            return (
              <button index={index}
                onClick={() => setActiveSegment(item.slug)}
                className='text-[#2B2936] text-base text-center bg-[#8F8F8F] hover:bg-[#A6A6A6] py-1.5 px-3 border-2 border-[#4A4854] rounded-lg grow'>
                  {item.label}
              </button>
            )
          })}
        </div>
      </section>
      
      <section className='bg-[#367084] pt-5 pb-10'>
        {renderSegment()}
      </section>
    </main>
  )
}

export default Home;