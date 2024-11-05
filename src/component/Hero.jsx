import React from 'react'
// import './hero.css'
import herobg from '../assets/img/Background Hero.svg'

function Hero() {
    return (
        <section className='hero-container'>
            <img src={herobg} className='hero-bg' alt='hero bg' />
            <div className='hero-content'>
                <div className='desc-container'>
                    <h1 className='hero-intro'>Learn from the best, be your best..</h1>
                    <p className='hero-desc'>Give yourself an upgrade with our inspiring online courses and join a global community of learners</p>
                    <a className='hero-btn'>Get Started</a>
                </div>
            </div>
        </section>
    )
}

export default Hero