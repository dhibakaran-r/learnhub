import React from 'react'
import img1 from '../assets/logo/medal.png'
import img2 from '../assets/logo/thought.png'
import img3 from '../assets/logo/training.png'
import banner from '../assets/img/AboutDashboard.png'

function About() {

  const about = [
    {
      img : img1,
      heading : 'Certificate Distribution',
      desc : 'We offer certificates to validate and recognize your achievement.'
    },
    {
      img : img2,
      heading : 'Knowledge',
      desc : 'We deliver transformative knowledge that empowers and inspires.'
    },
    {
      img : img3,
      heading : 'Hands-on Experience',
      desc : 'We provide hands-on experience for real-world learning. You learn best by doing.'
    },
  ]

  return (
    <section className='about-container'>
      <div className='about-head'>
        <p>Open Source Theme and UI Components</p>
        <h1>Geaux Astro helps you craft beautiful websites efficiently</h1>
      </div>
      <div className='about-body'>
        <div className='about-block'>
          {
            about.map((about, index) =>{return(
              <div className='about-list' key={index}>
                <img src={about.img} className='about-icon' alt='about icon' />
                <div className='about-desc'>
                  <h3>{about.heading}</h3>
                  <p>{about.desc}</p>
                </div>
              </div>
            )})
          }
        </div>
        <div className='about-banner'>
          <img src={banner} alt='about banner' />
        </div>
      </div>
    </section>
  )
}

export default About