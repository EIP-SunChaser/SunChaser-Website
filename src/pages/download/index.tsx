import { useTranslation } from 'react-i18next';

function Download() {
    const { t } = useTranslation();
    
    return (
        <div className='h-screen'>
            <section className="h-screen grid place-items-center bg-white text-lime-400">
                <div className="text-center space-y-6">
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