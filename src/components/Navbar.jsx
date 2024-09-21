import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='nav-link' to="/">Homepage</Link> 
        <Link className='nav-link' to="/mockup(json)">Mockup</Link> 
        <Link className='nav-link' to="/describing-the-UI">The UI</Link> 
        <Link className='nav-link' to="/describing-the-UI/passing-props-to-a-component">Props(The UI)</Link> 
        <Link className='nav-link' to="/describing-the-UI/conditional-rendering">Conditional(The UI)</Link> 
        <Link className='nav-link' to="/describing-the-UI/rendering-list">RenderingList</Link> 
    </div>
  )
}

export default Navbar
