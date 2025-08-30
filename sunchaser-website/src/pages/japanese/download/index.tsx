import HeaderBar from '../../../components/headerBar.tsx'

function DownloadJP() {
    return (
        <div>
            <HeaderBar language="jp" />
            <section className="h-150 grid place-items-center bg-lime-100 text-lime-400">
                <div className="text-center space-y-2">
                    <p className="text-5xl font-bold">Dowload the alpha for free</p>
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

export default DownloadJP