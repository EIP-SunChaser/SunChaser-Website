import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/english/home/index.tsx'
import AboutUs from './pages/english/aboutUs'
import Download from './pages/english/download'
import News from './pages/english/news' 
import NotFoundPage from './pages/english/notFoundPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  /* English pages */
  { path: "/en/home", element:<App />},
  { path: "/en/aboutus", element:<AboutUs />},
  { path: "/en/download", element:<Download />},
  { path: "/en/news", element:<News />},
  { path: "*", element: <NotFoundPage />},

  /* French pages */
  { path: "/fr/home", element:<App />},
  { path: "/fr/aboutus", element:<AboutUs />},
  { path: "/fr/download", element:<Download />},
  { path: "/fr/news", element:<News />},
  { path: "*", element: <NotFoundPage />},

  /* Japanese pages */
  { path: "/jp/home", element:<App />},
  { path: "/jp/aboutus", element:<AboutUs />},
  { path: "/jp/download", element:<Download />},
  { path: "/jp/news", element:<News />},
  { path: "*", element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
