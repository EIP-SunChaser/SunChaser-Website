import HeaderBar from '../../components/headerBar.tsx'

function Home() {
  return (
    <div>
      <HeaderBar />
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] grid place-items-center text-white">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/campVideo.mp4" autoPlay loop muted playsInline></video>
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="relative text-center space-y-3 px-4">
          <p className="font-oswald-bold text-4xl sm:text-5xl md:text-6xl">SunChaser</p>
          <p className="font-oswald text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            SunChaser, a game where you can save the world in a solarpunk universe !
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 grid place-items-center bg-white text-black">
        <div className="text-center space-y-3 px-4">
          <p className="font-oswald-bold text-3xl sm:text-4xl md:text-5xl font-bold">Zones</p>
          <p className="font-oswald text-base sm:text-lg md:text-xl">noms des zones</p>
        </div>
      </section>

    </div>
  )
}

export default Home
