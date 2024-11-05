import React from 'react'
// import './partner.css'
import logo1 from '../assets/img/airbnb.png'
import logo2 from '../assets/logo/client-8.png'
import logo3 from '../assets/logo/Lifegroups.png'
import logo4 from '../assets/logo/myob.png'
import logo5 from '../assets/img/tailus.png'
import logo6 from '../assets/img/microsoft.png'
import logo7 from '../assets/img/coty.png'
import logo8 from '../assets/img/lilly.png'

function Partners() {

    const partners = [
        {
            logo : logo1,
        },
        {
            logo : logo2,
        },
        {
            logo : logo3,
        },
        {
            logo : logo4,
        },
        {
            logo : logo5,
        },
        {
            logo : logo6,
        },
        {
            logo : logo7,
        },
        {
            logo : logo8,
        },
    ]

  return (
    <section className='partners-container'>
        <div className='partners-block'>
            <h1>Our Placement Partners</h1>
            <div className='partners-logo'>
                {
                    partners.map((logo, index) => { return(
                        <div key={index} className='logo-li'><img src={logo.logo} className='logos' alt='partener logo' /></div>
                    )})
                }
            </div>
            <a className='partners-btn'><span>and, more companies</span></a>
        </div>
    </section>
  )
}

export default Partners