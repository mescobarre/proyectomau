import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from'./assets/components/Header.jsx'
import Content from'./assets/components/Content.jsx'
import Footer from './assets/components/Footer.jsx'
import Gallery from './assets/components/Galeria.jsx'
import Aside from './assets/components/Aside.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
    <Footer />
    <Gallery />
    <Aside />
  </StrictMode>,
)
