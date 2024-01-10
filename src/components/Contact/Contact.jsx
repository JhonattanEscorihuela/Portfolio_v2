// Contact.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import cv from '../../images/cv-EscorihuelaJhonattan.pdf'


function Contact() {

    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyOsdaY8kc4d6wQCLEALze72H7NRn7_dopAD9CNJZfcn5wfv11aAy8FdjlApu5gxuFtIQ/exec';
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(scriptURL, { method: 'POST', body: formData });
            if (response.ok) {
                setMessage('Message sent successfully!');
                form.reset();
                setTimeout(() => {
                    setMessage('');
                }, 5000);
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><FontAwesomeIcon icon={faPaperPlane} /> Jhonattan1410@gmail.com</p>
                        <p><FontAwesomeIcon icon={faWhatsapp} /> +57 350 687 28 29</p>
                        <a href={cv} download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                        <span id="msg">{message}</span>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright <FontAwesomeIcon icon={faCopyright} /> Jhonattan Escorihuela. Made with 💗
                </p>
            </div>
        </div>

    );
}

import './Contact.styles.css'

export default Contact;