function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="mx-auto max-w-7xl sm:py-8">

                <p className="text-center text-sm sm:text-base font-oswald cursor-default">A futur indie game studio</p>

                <div className="flex items-center justify-center gap-10 py-5">
                    <a href='https://discord.gg/h63gQUYfcA' target="_blank">
                        <img className="w-5 h-auto cursor-pointer" src='/discordLogo.png'></img>
                    </a>
                    <a href='https://www.reddit.com/user/Sea-Principle6716/' target="_blank">
                        <img className="w-5 h-auto cursor-pointer" src='/redditLogo.png'></img>
                    </a>
                    <a href='https://bsky.app/profile/sunchasergame.bsky.social' target="_blank">
                        <img className="w-5 h-auto cursor-pointer" src='/blueskyLogo.png'></img>
                    </a>
                </div>

                <div className="flex items-center justify-center gap-10">
                    <a href='https://godotengine.org/fr/' target="_blank">
                        <img className="w-auto h-12 cursor-pointer" src='/godotLogo.png'></img>
                    </a>
                    <a href='https://kenney.nl' target="_blank">
                        <img className="w-auto h-10 cursor-pointer" src='/kenneyLogo.png'></img>
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer