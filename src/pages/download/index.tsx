import { useTranslation } from 'react-i18next';

function Download() {
    const { t } = useTranslation();

    return (
        <div className='h-screen overflow-hidden'>
            <section className="relative h-screen grid place-items-center text-lime-400 overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover blur-md scale-110"
                    src="/campVideo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                <div className="relative text-center space-y-6">
                    <p className="font-oswald-bold text-5xl">{t('download.title')}</p>
                    <div className="flex justify-center gap-4">
                        <button>
                            <a href='https://github.com/EIP-SunChaser/SunChaser-Releases/releases/download/v0.0.7/SunChaser-v0.0.7-windows.zip'>Windows</a>
                        </button>
                        <button>
                            <a href='https://github.com/EIP-SunChaser/SunChaser-Releases/releases/download/v0.0.7/SunChaser-v0.0.7-linux.zip'>Linux</a>
                        </button>
                        <button>MacOS</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Download