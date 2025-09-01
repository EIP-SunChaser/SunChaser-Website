import HeaderBar from '../../components/headerBar.tsx'

function Home() {
  return (
    <div>
      <HeaderBar />
      <section className="bg-[url(./campScreen.png)] bg-position-[center_bottom_-350px] h-150 grid place-items-center bg-lime-100 text-white">
        <div className="text-center space-y-2">
          <p className="text-5xl font-bold">SunChaser</p>
          <p className="text-xl ">SunChaser, a game where you can save the world in a solarpunk universe !</p>
        </div>
      </section>
      <section className="bg-position-[center_bottom_-350px] h-150 grid place-items-center bg-white text-black">
        <div className="text-center space-y-2">
          <p className="text-5xl font-bold">Zones</p>
          <p className="text-xl ">noms des zones</p>
        </div>
      </section>
    </div>
  )
}

export default Home
