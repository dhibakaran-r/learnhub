import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-wrap'>
        <h1>LearnHub</h1>
        <p>&copy; 2022 Tailwind Labs Inc. All rights reserved.</p>
        <div className='footer-nav'>
          <Link to='/form'>Form</Link>
          <div></div>
          <Link to='#'>Notes</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer