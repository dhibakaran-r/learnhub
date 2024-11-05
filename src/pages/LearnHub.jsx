import React from 'react'
import '../App.css'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Partners from '../component/Partners'
import About from '../component/About'
import Users from '../component/Users'
import Footer from '../component/Footer'

function LearnHub() {
    return (
        <>
            <Navbar />
            <Hero />
            <Partners />
            <About />
            <Users />
            <Footer />
        </>
    )
}

export default LearnHub