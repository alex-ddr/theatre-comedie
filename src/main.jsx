// site-auteur #3
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import App from './App'
import Home from './pages/Home'
import Plays from './pages/Plays'
import PlayDetail from './pages/PlayDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import TheyPlayed from './pages/TheyPlayed'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pieces', element: <Plays /> },
      { path: 'pieces/:slug', element: <PlayDetail /> },
      { path: 'a-propos', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'ils-ont-joue', element: <TheyPlayed /> },
      { path: '*', element: <NotFound /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
