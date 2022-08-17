import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About'
import Home from '../pages/home/Home'
import Services from '../pages/services/Services'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter