import HeaderBar from '../../../components/headerBar.tsx'

function HomeFR() {
  return (
    <>
      <HeaderBar language="fr" />
      <section className="bg-[url(./assets/campScreen.png)] bg-position-[center_bottom_-350px] h-150 grid place-items-center bg-lime-100 text-lime-400">
        <div className="text-center space-y-2">
          <p className="text-5xl font-bold">SunChaser</p>
          <p className="text-xl ">SunChaser, un jeu vidéo dans lequel vous sauvez le monde dans un univers solarpunk !</p>
        </div>
      </section>
    </>
  )
}

export default HomeFR
