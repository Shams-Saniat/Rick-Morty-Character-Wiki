import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import "../../App.css"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <Link to="/" className="fs-3 ubuntu navbar-brand">Rick and Morty <span className="greeenColor">Wiki</span></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"                    
                    aria-label="Toggle navigation">

                    <style jsx>
                    {`
                    button[aria-expanded="false"] > .close{
                        display: none;
                    }

                    button[aria-expanded="true"] > .open{
                        display: none;
                    }
                    `}
                    </style> 

                    <i class="fa-solid fa-bars open f-bold text-dark"></i>
                    <i class="fa-solid fa-x close f-bold text-dark"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeClassName="active" to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/characters" className="nav-link">Characters</NavLink>
                        <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
                        <NavLink to="/location" className="nav-link">Location</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;