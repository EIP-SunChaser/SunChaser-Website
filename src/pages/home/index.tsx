import ZoneItem from "../../components/zoneItem.tsx"
import Autoplay from "embla-carousel-autoplay"
import { useTranslation } from 'react-i18next';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[95vh] grid place-items-center text-white">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/campVideo.mp4" autoPlay loop muted playsInline></video>
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="relative text-center space-y-3 px-4">
          <p className="font-oswald-bold text-4xl sm:text-5xl md:text-6xl transition-transform duration-300 hover:scale-110 cursor-default">{t('home.title')}</p>
          <p className="font-oswald text-base sm:text-lg md:text-xl max-w-3xl mx-auto cursor-default">
            {t('home.description')}
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
            <CarouselItem key="solar zone">
              <ZoneItem
                titre={t('zone.solar.title')} 
                description={t('zone.solar.description')}
                image="/solarZone.png" />
            </CarouselItem>
            <CarouselItem key="wind zone">
              <ZoneItem
                titre={t('zone.wind.title')} 
                description={t('zone.wind.description')}
                image="/windZone.png" />
            </CarouselItem>
            <CarouselItem key="thermo zone">
              <ZoneItem
                titre={t('zone.thermo.title')} 
                description={t('zone.thermo.description')}
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
