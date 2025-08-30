import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

/* English pages */
import HomeEN from './pages/english/home/index.tsx'
import AboutUsEN from './pages/english/aboutUs'
import DownloadEN from './pages/english/download'
import NewsEN from './pages/english/news'

/* French pages */
import HomeFR from './pages/french/home/index.tsx'
import AboutUsFR from './pages/french/aboutUs'
import DownloadFR from './pages/french/download'
import NewsFR from './pages/french/news'

/* Japanese pages */
import HomeJP from './pages/japanese/home/index.tsx'
import AboutUsJP from './pages/japanese/aboutUs'
import DownloadJP from './pages/japanese/download'
import NewsJP from './pages/japanese/news'

import NotFoundPage from './components/notFoundPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  /* English pages */
  { path: "/en/home", element:<HomeEN />},
  { path: "/en/aboutus", element:<AboutUsEN />},
  { path: "/en/download", element:<DownloadEN />},
  { path: "/en/news", element:<NewsEN />},

  /* French pages */
  { path: "/fr/home", element:<HomeFR />},
  { path: "/fr/aboutus", element:<AboutUsFR />},
  { path: "/fr/download", element:<DownloadFR />},
  { path: "/fr/news", element:<NewsFR />},

  /* Japanese pages */
  { path: "/jp/home", element:<HomeJP />},
  { path: "/jp/aboutus", element:<AboutUsJP />},
  { path: "/jp/download", element:<DownloadJP />},
  { path: "/jp/news", element:<NewsJP />},

  /* other */
  { path: "*", element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
