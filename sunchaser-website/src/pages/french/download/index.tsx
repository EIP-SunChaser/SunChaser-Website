import HeaderBar from '../../../components/headerBar.tsx'

function DownloadFR() {
    return (
        <div>
            <HeaderBar language="fr" />
            <section className="h-150 grid place-items-center bg-lime-100 text-lime-400">
                <div className="text-center space-y-2">
                    <p className="text-5xl font-bold">Téléchargez l'alpha de notre jeu gratuitement</p>
                    <div>
                        <button>Windows</button>
                        <button className="mx-5">Linux</button>
                        <button>MacOs</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DownloadFR