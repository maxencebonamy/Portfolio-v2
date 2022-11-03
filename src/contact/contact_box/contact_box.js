import React from "react";

import "./contact_box.css";
import contact_icons from "../icons/contact_icons";


function ContactBox({contact}) {

    return (
        <a href={contact.link} className="contact_box_link" target="_blank">
            <img className="contact_box_icon" src={contact_icons[contact.icon]} alt={contact.text} />
            <div className="contact_box_text" id={"contact_box_text_" + contact.icon}>
                <span><h4>{contact.text}</h4></span>
            </div>
        </a>
    );

}


export default ContactBox;