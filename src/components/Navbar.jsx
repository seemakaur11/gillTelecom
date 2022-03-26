import React from "react";
import logo from '../images/cropped-gill-logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <section>
            <nav
                className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand logo" href="/">
                        <img src={logo} alt="logo" height="70px"></img>
                    </a>
                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" color="white" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="/" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href='/about' className="nav-link">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="/services" className="nav-link dropdown-toggle" data-toggle="dropdown">Services</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Complete Website Development
                                        <br></br>and Website Designing</a></li>
                                    <li><a className="dropdown-item" href="/">Creative Web Design</a></li>
                                    <li><a className="dropdown-item" href="/">Custom Web Development</a></li>
                                    <li><a className="dropdown-item" href="/">Multimedia Presentation</a></li>
                                    <li><a className="dropdown-item" href="/">Search Engine Optimization</a></li>
                                    <li><a className="dropdown-item" href="/">E-Buisness</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href='/clients' className="nav-link">Clients</a>
                            </li>

                            <li className="nav-item">
                                <a href='/contact' className="nav-link">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;
