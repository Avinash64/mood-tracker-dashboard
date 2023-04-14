import React from 'react'
import "./Header.css"
import {useNavigate} from "react-router-dom"

function Header() {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Mood Tracker</a>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Input</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="moods">View All</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    Text
                </span>
            </div>
        </nav>
    )
}

export default Header