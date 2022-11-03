import React from "react";

import "./about.css";
import profile from "../_utils/images/profile.webp"


function About() {

    return (
        <div id="about">
            <h2>Who I am?</h2>
            <div id="about_content_container">
                <p id="about_text">
                    Being passionate about programming since the age of 11, I quickly found what I wanted to do in life. I consider myself specialized in software, but I also have a lot of knowledge and skills in the web.
                    <br /><br />
                    In addition, I'm currently studying engineering in the fields of electronics and computer science, which allows me to improve my already acquired skills, but also to develop new ones, especially in hardware.
                </p>
                <img src={profile} alt="profile" id="about_profile" />
            </div>
        </div>
    );

}


export default About;