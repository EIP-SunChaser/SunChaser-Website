import HeaderBar from '../../components/headerBar.tsx'

function Home() {
  return (
    <div>
      <HeaderBar />
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] grid place-items-center text-white">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/campVideo.mp4" autoPlay loop muted playsInline></video>
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="relative text-center space-y-3 px-4">
          <p className="font-oswald-bold text-4xl sm:text-5xl md:text-6xl transition-transform duration-300 hover:scale-110">SunChaser</p>
          <p className="font-oswald text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            SunChaser, a game where you can save the world in a solarpunk universe !
          </p>
        </div>
      </section>

      <section className="h-150 flex items-center justify-center bg-white text-black gap-10 px-10">
        <div className="space-y-6 max-w-xl">
          <p className="font-oswald-bold text-5xl">Solar zone</p>
          <p className="font-oswald text-xl">
            Sacabam studio was founded in 2024 by four friends to create one game.
            Our objective is to create a game that can send a message for the planet
            and build a fun and interesting universe for all the players.
          </p>
        </div>
        <img src="/solarZone.png" alt="Logo" className="w-75 h-auto object-contain rounded-full" />
      </section>
    </div>
  )
}

export default Home
