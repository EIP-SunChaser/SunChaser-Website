import { useTranslation } from 'react-i18next';

function News() {
    const { t } = useTranslation();
    
    return (
        <div className='h-screen'>
            <div>
                <p>{t('news.title')}</p>
            </div>
        </div>
    )
}

export default News