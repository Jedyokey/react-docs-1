import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='nav-link' to="/">Homepage</Link> 
        <Link className='nav-link' to="/mockup(json)">Mockup</Link> 
    </div>
  )
}

export default Navbar
