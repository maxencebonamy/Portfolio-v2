import React from "react";

import "./navbar.css";
import profile from "../_utils/images/profile.webp"


function NavBar() {

    return (
        <div id="navbar">
            <div id="navbar_left_container">
                <a href="#"><img src={profile} alt="profile" id="navbar_profile" /></a>
            </div>

            <div id="navbar_right_container">
                <a href="#" className="navbar_link"><p>Home</p></a>
                <a href="#about" className="navbar_link"><p>About</p></a>
                <a href="#projects" className="navbar_link"><p>Projects</p></a>
                <a href="#skills" className="navbar_link"><p>Skills</p></a>
                <a href="#contact" className="navbar_button"><p>Contact</p></a>
            </div>
        </div>
    );

}


export default NavBar;