import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper grey-darken-3">
        <div className='container'>
          <Link to='/' className='brand-logo' > Task Planner </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar