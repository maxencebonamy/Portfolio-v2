import React from "react";

import "./contact.css";
import contacts from "./contact.json"
import ContactBox from "./contact_box/contact_box";


function Contact() {

    return (
        <div id="contact">
            <h2>How to contact me?</h2>
            <div id="contact_container">
                {
                    contacts.map(contact => <ContactBox contact={contact} />)
                }
            </div>
        </div>
    );

}


export default Contact;