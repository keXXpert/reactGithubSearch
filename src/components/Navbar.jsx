import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <div className="navbar-brand">
                GitHub Search
        </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to='/' exact className="nav-link">Homepage</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' className="nav-link">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar