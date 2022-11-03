import React from "react";

import "./home.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";


function Home() {

    return (
        <div id="home">
            <div id="home_title_container">
                <h4 id="home_title_introduction">Hi, my name is</h4>
                <h1 id="home_title_name">Maxence Bonamy.</h1>
                <h1 id="home_title_subtitle">I'm a Software Engineer.</h1>
            </div>

            <a href="#about" id="home_arrow">
                <h1>
                    <FontAwesomeIcon icon={faChevronDown} />
                </h1>
            </a>
        </div>
    );

}


export default Home;