import HeaderBar from '../../components/headerBar.tsx'

function Home() {
  return (
    <div>
      <HeaderBar />
      <section className="bg-[url(/campScreen.png)] bg-position-[center_bottom_-350px] h-150 grid place-items-center bg-lime-100 text-white">
        <div className="text-center space-y-2">
          <p className="font-oswald-bold text-5xl">SunChaser</p>
          <p className="font-oswald text-xl">SunChaser, a game where you can save the world in a solarpunk universe !</p>
        </div>
      </section>
      <section className="bg-position-[center_bottom_-350px] h-150 grid place-items-center bg-white text-black">
        <div className="text-center space-y-2">
          <p className="font-oswald-bold text-5xl font-bold">Zones</p>
          <p className="font-oswald text-xl">noms des zones</p>
        </div>
      </section>
    </div>
  )
}

export default Home
