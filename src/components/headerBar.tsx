import { Link } from "react-router-dom"
import { useState } from "react"
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function HeaderBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { t } = useTranslation();

	return (
		<header className="bg-black">
			<div className="px-3 md:px-3">
				<div className="flex h-18 items-center justify-between md:justify-start">
					<div className="flex items-center">
						<Link to={"/home"}>
							<p className="font-oswald-bold text-3xl py-2 px-1 sm:px-3 md:px-0 text-white">SunChaser</p>
						</Link>
					</div>
					<nav className="hidden md:flex items-center justify-between md:ml-2 w-full">
						<div className="flex items-center gap-3">
							<Link to={"/home"}>
								<p className="font-oswald text-lg lg:text-xl py-2 px-3 text-white">{t('header.home')}</p>
							</Link>
							{/* <Link to={"/news"}>
								<p className="font-oswald text-lg lg:text-xl py-2 px-3 text-white">{t('header.news')}</p>
							</Link> */}
							<Link to={"/download"}>
								<p className="font-oswald text-lg lg:text-xl py-2 px-3 text-white">{t('header.downloads')}</p>
							</Link>
							<Link to={"/about-us"}>
								<p className="font-oswald text-lg lg:text-xl py-2 px-3 text-white">{t('header.aboutUs')}</p>
							</Link>
						</div>
						<LanguageSwitcher />
					</nav>

					<div className="flex items-center md:hidden">
						<button aria-label="Open menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((v) => !v)} className="p-2 text-white bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent border-none hover:border-none focus:outline-none focus:ring-0 shadow-none appearance-none" style={{ backgroundColor: 'transparent' }}>
							{!isMenuOpen ? (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
									<path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
									<path fillRule="evenodd" d="M6.225 4.811a.75.75 0 0 1 1.06 0L12 9.525l4.715-4.714a.75.75 0 1 1 1.06 1.06L13.06 10.586l4.715 4.714a.75.75 0 1 1-1.06 1.06L12 11.646l-4.715 4.714a.75.75 0 0 1-1.06-1.06l4.714-4.714-4.714-4.715a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
			{isMenuOpen && (
				<div className="md:hidden border-t border-white/10">
					<nav className="px-3 py-2 space-y-1">
						<Link onClick={() => setIsMenuOpen(false)} to={"/home"}>
							<p className="font-oswald text-lg py-2 text-white">{t('header.home')}</p>
						</Link>
						{/* <Link onClick={() => setIsMenuOpen(false)} to={"/news"}>
							<p className="font-oswald text-lg py-2 text-white">{t('header.news')}</p>
						</Link> */}
						<Link onClick={() => setIsMenuOpen(false)} to={"/download"}>
							<p className="font-oswald text-lg py-2 text-white">{t('header.downloads')}</p>
						</Link>
						<Link onClick={() => setIsMenuOpen(false)} to={"/aboutus"}>
							<p className="font-oswald text-lg py-2 text-white">{t('header.aboutUs')}</p>
						</Link>
						<div className="py-2">
							<LanguageSwitcher />
						</div>
					</nav>
				</div>
			)}
		</header>
	);
};

export default HeaderBar