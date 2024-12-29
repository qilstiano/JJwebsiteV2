import { games_info } from "@/public/data/games_info";
import GameCard from "../components/homepage/GameCard";

const GameGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-8">
      {games_info.map((game, gindex) => {
        if(game.category.includes("individuals"))
          return (
            <div key={gindex} className="w-full pr-4 mt-8 flex flex-col space-y-7">
              <GameCard
                index={gindex}
                imgSrc={game.imgSrc}
                title={game.title}
                description={game.description}
                values={game.values}
                dialog={true}>
              </GameCard>
            </div>
          )
        }
      )}
    </div>
  )
}

export default GameGrid;
