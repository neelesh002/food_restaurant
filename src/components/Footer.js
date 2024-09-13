import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter,FaLinkedinIn,FaInstagram,FaPinterest } from "react-icons/fa";
import "./Footer.css";


const Footer=()=>{
    return (
    <footer className="footer">
        <div className="footer-section">
            <h3>Contact Us</h3>
            <p><FaMapMarkerAlt/>Location</p>
            <p><FaPhone/>Call +91 8109080649</p>
            <p><FaEnvelope/>xyz@gmail.com</p>
            </div>

            <div className="footer-section">
                <h3>Chapter One Cafe And Restaurant</h3>
                <p>The aroma of freshly ground coffee beans mingled with the tantalizing scent of sizzling bacon, inviting patrons into the cozy embrace of Chapter One Café. 
                    Soft jazz played in the background as the café’s warm, ambient lighting created an inviting atmosphere for both early risers and afternoon regulars.</p>
                    </div>
           <div className="social-icons">
            <FaFacebook/>
            <FaTwitter/>
            <FaLinkedinIn/>
            <FaInstagram/>
            <FaPinterest/>
            </div>
            <div className=" footer-section">
             <h3>Opening Hours</h3>
             <p>Everyday</p>
             <p>10.00am to 10.00pm</p>

            </div>
            <div className="footer-bottom">
                <p>@ 2024 All right Reserved by Free Neelesh kumar</p>
                <p>@ distributed by Neelesh kumar</p>
            </div>
           
            
    </footer>

    );
}

export default Footer;
