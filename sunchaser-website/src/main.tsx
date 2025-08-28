import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AboutUs from './pages/aboutUs'
import Download from './pages/download'
import News from './pages/news' 
import NotFoundPage from './pages/notFoundPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: "/", element:<App />},
  { path: "/aboutus", element:<AboutUs />},
  { path: "/download", element:<Download />},
  { path: "/news", element:<News />},
  { path: "*", element: <NotFoundPage />}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
