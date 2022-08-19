import React from 'react'
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg text-white" style={{ backgroundColor: "#35414A", borderBottom: '2px solid green' }}>
            <div className="container-fluid">
                <Link className="navbar-brand text-success" to={{ pathname: 'https://clarusway.com/' }} target="_blank"><h2>Clarusway <span className='text-white'>Web Design</span></h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className='nav-item'><NavLink className="nav-link active" aria-current="page" to="/" style={({ isActive }) => ({
                            color: isActive ? "yellow" : "white"
                        })}>Home</NavLink></li>
                        <li className='nav-item'><NavLink className="nav-link mx-5" to="/about" style={({ isActive }) => ({
                            color: isActive ? "yellow" : "white"
                        })}>About</NavLink></li>
                        <li className='nav-item'><NavLink className="nav-link" to="/services" style={({ isActive }) => ({
                            color: isActive ? "yellow" : "white"
                        })}>Services</NavLink></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar