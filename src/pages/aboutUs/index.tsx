import HeaderBar from '../../components/headerBar.tsx'

function AboutUs() {
    return (
        <div>
            <HeaderBar />
            <section className="h-150 flex items-center justify-center bg-white text-black gap-10 px-10">
                <img src="/sacabam.png" alt="Logo" className="w-60 h-auto object-contain" />
                <div className="space-y-6 max-w-xl">
                    <p className="font-oswald-bold text-5xl">Who are we ?</p>
                    <p className="font-oswald text-xl">
                        Sacabam studio was founded in 2024 by four friends to create one game.
                        Our objective is to create a game that can send a message for the planet
                        and build a fun and interesting universe for all the players.
                    </p>
                </div>
            </section>
            <section className="h-150 grid place-items-center bg-lime-100 text-lime-400">
                <div className="text-center space-y-2">
                <p className="font-oswald-bold text-5xl">SunChaser</p>
                <p className="font-oswald text-xl ">SunChaser, a game where you can save the world in a solarpunk universe !</p>
                </div>
            </section>
            <section className="h-100 grid place-items-center bg-white text-black">
                <div className="text-center space-y-2">
                    <p className="font-oswald-bold text-5xl py-10">Socials</p>
                    <div className="flex items-center justify-center gap-10">
                        <a href='https://discord.gg/h63gQUYfcA' target="_blank">
                            <img className="w-15 h-auto" src='/discordLogo.png'></img>
                        </a>
                        <a href='https://www.reddit.com/user/Sea-Principle6716/' target="_blank">
                            <img className="w-15 h-auto" src='/redditLogo.png'></img>
                        </a>
                        <a href='https://bsky.app/profile/sunchasergame.bsky.social' target="_blank">
                            <img className="w-15 h-auto" src='/blueskyLogo.png'></img>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs