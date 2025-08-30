import HeaderBar from '../../../components/headerBar.tsx'

function DownloadFR() {
    return (
        <div>
            <HeaderBar language="fr" />
            <section className="h-150 grid place-items-center bg-lime-100 text-lime-400">
                <div className="text-center space-y-2">
                    <p className="text-5xl font-bold">Téléchargez l'alpha de notre jeu gratuitement</p>
                    <div>
                        <button>
                            <a href='https://github.com/EIP-SunChaser/SunChaser/releases/download/v0.0.7/SunChaser-v0.0.7-windows.zip'>Windows</a>
                        </button>
                        <button>
                            <a href='https://github.com/EIP-SunChaser/SunChaser/releases/download/v0.0.7/SunChaser-v0.0.7-linux.zip'>Linux</a>
                        </button>
                        <button>MacOs</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DownloadFR