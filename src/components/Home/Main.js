import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { Redirect } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Career from './Career'
import Header from './Header'

function Main() {
    const [isLoggedIn, setIsloggedIn] = useState(false)
    return (
        <div>
            <BrowserRouter>
                <Header isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    {isLoggedIn ?
                        <Route path='/about' element={<About />} />
                        : <Route path="/" element={<Navigate to="/" />} />
                    }
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/career' element={<Career />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main