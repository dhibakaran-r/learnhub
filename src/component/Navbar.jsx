import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='nav-container'>
        
        <nav className='navbar'>
            <Link to='/' className='logo'>SkillHub</Link>
            <Link to='/form' className='admin'>Admin</Link>
        </nav>

    </header>
  )
}

export default Navbar