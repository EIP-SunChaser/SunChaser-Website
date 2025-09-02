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

      <section className="h-150 flex items-center justify-center bg-white text-black px-10">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-[95%]"
        >
          <CarouselContent>
            {/* --- Solar zone --- */}
            <CarouselItem key="solar zone">
              <ZoneItem
                titre="Sun Forest" 
                description="In this living and fabulous forest, people live by using solar power to create energy.
                  You can find different villages, small forests, and a large power station. But stay alert... bandits lurk in the shadows."
                image="/solarZone.png" />
            </CarouselItem>

            {/* --- Wind zone --- */}
            <CarouselItem key="wind zone">
              <ZoneItem
                titre="Wind Zone" 
                description="A large region focused on wind energy. You will travel between different islands by boat to meet new people and party.
                  Every activity feels like a big celebration!"
                image="/windZone.png" />
            </CarouselItem>

            {/* --- Thermo zone --- */}
            <CarouselItem key="thermo zone">
              <ZoneItem
                titre="Train Valley" 
                description="A hot and dry desert where only robots can work. In this western-style region, your car will be your best friend.
                  Watch out for sunburn!"
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
