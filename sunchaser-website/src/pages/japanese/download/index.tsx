import HeaderBar from '../../../components/headerBar.tsx'

function DownloadJP() {
    return (
        <div>
            <HeaderBar language="jp" />
            <section className="h-150 grid place-items-center bg-lime-100 text-lime-400">
                <div className="text-center space-y-2">
                    <p className="text-5xl font-bold">Dowload the alpha for free</p>
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

export default DownloadJP