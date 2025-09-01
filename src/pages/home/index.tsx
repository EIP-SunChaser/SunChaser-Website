import HeaderBar from '../../components/headerBar.tsx'

function Home() {
  return (
    <div>
      <HeaderBar />
      <section className="relative h-170 grid place-items-center text-white">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/campVideo.mp4" autoPlay loop muted playsInline></video>
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="relative text-center space-y-2">
          <p className="font-oswald-bold text-5xl">SunChaser</p>
          <p className="font-oswald text-xl">
            SunChaser, a game where you can save the world in a solarpunk universe !
          </p>
        </div>
      </section>

      <section className="h-150 grid place-items-center bg-white text-black">
        <div className="text-center space-y-2">
          <p className="font-oswald-bold text-5xl font-bold">Zones</p>
          <p className="font-oswald text-xl">noms des zones</p>
        </div>
      </section>

    </div>
  )
}

export default Home
