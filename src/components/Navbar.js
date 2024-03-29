import React, { Component } from 'react'
import logo from './logo.jpg';
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark  ">
                    <div className="container-fluid " >
                    <img style={{width: "40px", height: "35px", borderRadius: "50%"}} src={logo} alt='logo'></img>
                        <a className="navbar-brand mx-2" href="/">Taaza Khabar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/technology">Technology</a></li>
                                        <li><a className="dropdown-item" href="/business">Business</a></li>
                                        <li><a className="dropdown-item" href="/entertainment">Entertainment</a></li>
                                        <li><a className="dropdown-item" href="/general">General</a></li>
                                        <li><a className="dropdown-item" href="/health">Health</a></li>
                                        <li><a className="dropdown-item" href="/science">Science</a></li>
                                        <li><a className="dropdown-item" href="/sports">Sports</a></li>
                                    </ul>
                                </li>
                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar
