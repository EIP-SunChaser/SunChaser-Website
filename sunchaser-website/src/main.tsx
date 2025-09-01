import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

/* English pages */
import Home from './pages/home/'
import AboutUs from './pages/aboutUs'
import Download from './pages/download'
import News from './pages/news'

import NotFoundPage from './components/notFoundPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/footer.tsx'


const router = createBrowserRouter([
  /* Pages */
  { path: "/", element:<Home />},
  { path: "/home", element:<Home />},
  { path: "/aboutus", element:<AboutUs />},
  { path: "/download", element:<Download />},
  { path: "/news", element:<News />},

  /* other */
  { path: "*", element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
