import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About'
import Brush from '../pages/brush/Brush'
import Css from '../pages/css/Css'
import Home from '../pages/home/Home'
import Html from '../pages/html/Html'
import Services from '../pages/services/Services'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/html' element={<Html />} />
                <Route path='/css' element={<Css />} />
                <Route path='/brush' element={<Brush />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter