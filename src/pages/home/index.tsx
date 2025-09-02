import HeaderBar from '../../components/headerBar.tsx'
import ZoneItem from "../../components/zoneItem.tsx"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Home() {
  return (
    <div>
      <HeaderBar />
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] grid place-items-center text-white">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/campVideo.mp4" autoPlay loop muted playsInline></video>
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="relative text-center space-y-3 px-4">
          <p className="font-oswald-bold text-4xl sm:text-5xl md:text-6xl transition-transform duration-300 hover:scale-110 cursor-default">SunChaser</p>
          <p className="font-oswald text-base sm:text-lg md:text-xl max-w-3xl mx-auto cursor-default">
            SunChaser, a game where you can save the world in a solarpunk universe !
          </p>
        </div>
      </section>

      <section className="h-150 flex items-center bg-white text-black px-10">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {/* --- Solar zone --- */}
            <CarouselItem key="solar zone">
              <ZoneItem
                titre="Solar Zone" 
                description="Sacabam studio was founded in 2024 by four friends to create one game.
                  Our objective is to create a game that can send a message for the planet
                  and build a fun and interesting universe for all the players."
                image="/solarZone.png" />
            </CarouselItem>

            {/* --- Wind zone --- */}
            <CarouselItem key="wind zone">
              <ZoneItem
                titre="Wind Zone" 
                description="Sacabam studio was founded in 2024 by four friends to create one game.
                  Our objective is to create a game that can send a message for the planet
                  and build a fun and interesting universe for all the players."
                image="/windZone.png" />
            </CarouselItem>

            {/* --- Thermo zone --- */}
            <CarouselItem key="thermo zone">
              <ZoneItem
                titre="Thermo Zone" 
                description="Sacabam studio was founded in 2024 by four friends to create one game.
                  Our objective is to create a game that can send a message for the planet
                  and build a fun and interesting universe for all the players."
                image="/thermoZone.png" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  )
}

export default Home
