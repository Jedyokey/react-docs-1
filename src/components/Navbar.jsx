import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='nav-link' to="/">Homepage</Link> 
        <Link className='nav-link' to="/mockup(json)">Mockup</Link> 
        <Link className='nav-link' to="/describing-the-UI">The UI</Link> 
        <Link className='nav-link' to="/describing-the-UI/your-first-component">Props(The UI)</Link> 
    </div>
  )
}

export default Navbar
