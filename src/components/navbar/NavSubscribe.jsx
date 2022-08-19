import React from 'react'

const NavSubscribe = () => {
    return (
        <nav className="navbar" style={{ backgroundColor: "#35414A" }}>
            <div className="container-fluid justify-content-around">
                <h3 className="navbar-brand text-white">Subscribe To Our Newsletter</h3>
                <form className="d-flex">
                    <input className="form-control me-2" type="email" placeholder="Enter email..." aria-label="email" />
                    <button className="btn btn-outline-success bg-warning text-white" type="submit">Subscribe</button>
                </form>
            </div>
        </nav>
    )
}

export default NavSubscribe