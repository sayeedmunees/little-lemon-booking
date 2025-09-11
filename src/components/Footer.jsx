import React from "react"
import small_logo from "../assets/images/littlelemon_logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
    return(
        <footer className="">
            <section>
            <div className="company-info">
                <img src={small_logo} alt=""/>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            </div>
            <div>
                <h3>Important Links</h3>
            <ul>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            <li>Address: <br/> 123 Town Street, Chicago</li>
                <li>Phone: <br/> +00 123 456 789</li>
                <li>Email: <br/> little@lemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="/"><FaFacebook /> Facebook</a></li>
                <li><a href="/"><FaInstagram /> Instagram</a></li>
                <li><a href="/"><FaTwitter /> Twitter</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;