import React from 'react'

const Navbar = (props) => {
    return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
        <div className="navbar-brand">
            GitHub Search
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="/" className="nav-link">Homepage</a>
            </li>
            <li className="nav-item">
                <a href="/about" className="nav-link">About</a>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar