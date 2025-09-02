import { useTranslation } from 'react-i18next';

function AboutUs() {
    const { t } = useTranslation();
    return (
        <div>
            <section className="h-150 flex flex-col md:flex-row items-center justify-center bg-white text-black gap-6 md:gap-10 px-4 md:px-10 py-8 md:py-0">
                <img src="/sacabam.svg" alt="Logo" className="w-32 md:w-60 h-auto object-contain rounded-lg" />
                <div className="space-y-4 md:space-y-6 max-w-xl text-center md:text-left">
                    <p className="font-oswald-bold text-3xl md:text-5xl">{t('about.title')}</p>
                    <p className="font-oswald text-lg md:text-xl whitespace-pre-line">
                        {t('about.description')}
                    </p>
                </div>
            </section>
            <section className="h-150 grid place-items-center bg-lime-100 text-lime-400 px-4">
                <div className="text-center space-y-2 max-w-4xl">
                <p className="font-oswald-bold text-3xl md:text-5xl">{t('home.title')}</p>
                <p className="font-oswald text-lg md:text-xl">{t('home.description')}</p>
                </div>
            </section>
            <section className="h-100 grid place-items-center bg-white text-black px-4">
                <div className="text-center space-y-4 md:space-y-2">
                    <p className="font-oswald-bold text-3xl md:text-5xl py-6 md:py-10">{t('footer.social')}</p>
                    <div className="flex items-center justify-center gap-6 md:gap-10">
                        <a href='https://discord.gg/h63gQUYfcA' target="_blank" rel="noopener noreferrer">
                            <img className="w-12 md:w-15 h-auto" src='/discordLogo.png' alt="Discord" />
                        </a>
                        <a href='https://www.reddit.com/user/Sea-Principle6716/' target="_blank" rel="noopener noreferrer">
                            <img className="w-12 md:w-15 h-auto" src='/redditLogo.png' alt="Reddit" />
                        </a>
                        <a href='https://bsky.app/profile/sunchasergame.bsky.social' target="_blank" rel="noopener noreferrer">
                            <img className="w-12 md:w-15 h-auto" src='/blueskyLogo.png' alt="Bluesky" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs