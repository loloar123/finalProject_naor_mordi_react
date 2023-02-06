import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Gallery from './components/gallery'
import Products from './components/products'
import Events from './components/events'
import Login from './components/login'


export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/products" element={<Products />} />
                <Route path="/events" element={<Events />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
