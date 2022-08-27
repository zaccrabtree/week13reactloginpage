import React from "react";

export default function Navbar(){
    return (
        <nav className="nav">
            <a href="#" className="site-title">Log In Page</a>
            <ul>
                <li className="active">
                    <a href="#">About Us</a>
                </li>
                <li className="active">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}