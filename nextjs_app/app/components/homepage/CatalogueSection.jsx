import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious, CarouselItem } from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { games_info } from "@/public/data/games_info";
import GameCard from "./GameCard";

const CatalogueSection = () => {
    const info = games_info;
    return (
        <div className='w-full px-8 pt-36 relative z-20'>
            <h2 className='text-2xl text-center text-white font-bold'>Explore Our Catalogue</h2>
            <Tabs defaultValue={info[0].slug} className="w-full flex items-center flex-col p-4">
                <TabsList className="w-full sm:w-3/4 xl:w-[900px] flex items-center space-x-8 mb-4 bg-transparent">
                    {info.map((cat, index) => {
                        return (
                            <TabsTrigger key={index} value={cat.slug} className="block text-white font-light data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:font-bold">
                                <p className='text-lg'>{cat.category}</p>
                                <div className='h-0.5 w-full md:w-44 bg-white mx-auto'></div>
                            </TabsTrigger>
                        )
                    })}
                </TabsList>

                {info.map((cat, index) => {
                    return (
                        <TabsContent key={index} value={cat.slug} className="w-11/12 md:w-11/12 lg:w-10/12 xl:w-[800px] mt-0">
                            <Carousel className="w-full rounded-sm">
                                <CarouselContent>
                                    {cat.data.map((game, gindex) => {
                                        return (
                                            <CarouselItem className="sm:basis-1/2 md:basis-1/3 mb-5" key={gindex}>
                                                <GameCard 
                                                    image={game.image}
                                                    title={game.title}
                                                    description={game.description}
                                                    values={game.values}
                                                    button={game.button}
                                                />
                                            </CarouselItem>
                                        )
                                    })}
                                </CarouselContent>
                                <CarouselPrevious className="bg-dark-green text-slate-100 hover:bg-extra-dark-green hover:text-slate-100" />
                                <CarouselNext className="bg-dark-green text-slate-100 hover:bg-extra-dark-green hover:text-slate-100" />
                            </Carousel>
                            <div className='flex justify-center my-3'>
                                <Button className='text-lg font-light text-center border-white border-2 rounded-lg bg-transparent text-white hover:border-white hover:text-white hover:bg-transparent'><p>See all for <span className='font-bold'>{cat.category}</span></p></Button>
                            </div>
                        </TabsContent>
                    )
                })}
            </Tabs>
        </div>
    )
}

export default CatalogueSection;
