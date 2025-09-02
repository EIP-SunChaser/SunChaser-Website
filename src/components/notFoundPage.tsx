import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

function NotFoundPage() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('notFound.title')}</h1>
            <Link to={"/home"}>
                <button>{t('notFound.backHome')}</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;