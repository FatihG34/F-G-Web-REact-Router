import React from 'react'
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark text-white">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to={{ pathname: 'https://clarusway.com/' }} target="_blank">Clarusway</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-white" aria-current="page" to="/" style={isActive => ({
                                bgColor: isActive ? "green" : "blue"
                            })}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/about" style={isActive => ({
                                bgColor: isActive ? "green" : "blue"
                            })}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/services" style={isActive => ({
                                bgColor: isActive ? "green" : "blue"
                            })}>Services</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar