import HeaderBar from '../../../components/headerBar.tsx'

function HomeEN() {
  return (
    <div>
      <HeaderBar language="en" />
      <section className="bg-[url(./assets/campScreen.png)] bg-position-[center_bottom_-350px] h-150 grid place-items-center bg-lime-100 text-white">
        <div className="text-center space-y-2">
          <p className="text-5xl font-bold">SunChaser</p>
          <p className="text-xl ">SunChaser, a game where you can save the world in a solarpunk universe !</p>
        </div>
      </section>
    </div>
  )
}

export default HomeEN
