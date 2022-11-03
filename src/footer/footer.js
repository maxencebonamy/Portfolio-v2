import React from "react";

import "./footer.css";


function Footer() {

    return (
        <div id="footer">
            <div id="footer_github">
                <a href="#"><p>© 2022 Maxence Bonamy MIT license</p></a>
                <a href="#"><p>See the repository on GitHub</p></a>
            </div>
            <p id="footer_text">
                Built by Maxence Bonamy using ReactJS and CSS.
                <br />
                Thank you for reading to the end, I hope you enjoyed this website.
            </p>
        </div>
    );

}


export default Footer;