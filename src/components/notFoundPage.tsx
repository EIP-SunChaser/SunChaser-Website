import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { Button } from "./ui/button";

function NotFoundPage() {
    const { t } = useTranslation();
    
    return (
        <div className="min-h-screen">
            <section className="relative min-h-screen flex items-center justify-center text-white">
                <video 
                    className="absolute top-0 left-0 w-full h-full object-cover" 
                    src="/campVideo.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
                <div className="relative text-center space-y-8 max-w-4xl mx-auto px-4">
                    <div className="space-y-4">
                        <h1 className="font-oswald-bold text-6xl sm:text-7xl md:text-8xl text-white">
                            404
                        </h1>
                        <h2 className="font-oswald-bold text-3xl md:text-4xl text-white">
                            {t('notFound.title')}
                        </h2>
                        <p className="font-oswald text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                            {t('notFound.description')}
                        </p>
                    </div>

                    <div className="pt-8">
                        <Link to="/home">
                            <Button 
                                size="lg" 
                                className="font-oswald-bold text-lg px-8 py-3 bg-lime-500 hover:bg-lime-600 text-white transition-all duration-300 hover:scale-105"
                            >
                                {t('notFound.backHome')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFoundPage;