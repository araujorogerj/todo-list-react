import React from "react";

const Navbar = ()  => {
    return(
        <nav className="navbar">
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt="logo" className="logo-img"></img>

            </div>
            <div className="routes">
                <ul>
                    <li><a href="#">todo list</a></li>
                    <li><a href="#">my profile</a></li>
                </ul>
            </div>
            <div className="login-route">
                <div className="login-btn">
                    <li><a href="#">login</a></li>
                </div>
            </div>
        </nav>
    );
}

export default Navbar