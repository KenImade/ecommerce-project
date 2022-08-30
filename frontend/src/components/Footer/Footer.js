import {Link} from "react-router-dom";

import logo from "../../assets/shared/desktop/logo.svg";
import twitter from "./assets/icon-twitter.svg";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import "./assets/Footer.css";

const Footer = () => {
  return (
    <footer>
        <div className="first-column">
            <img src={logo} alt="logo" />

            <p className="body">
                Audiophile is an all in one stop to fulfill your audio needs. 
                We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
                Come and visit our demo facility - we’re open 7 days a week.
            </p>

            <div className="body">
                Copyright 2021. All Rights Reserved
            </div>
        </div>
        
        <div className="second-column">
            <nav className="footer--links">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/headphones" className="footer-link">Headphones</Link>
                <Link to="/speakers" className="footer-link">Speakers</Link>
                <Link to="/earphones" className="footer-link">Earphones</Link>
            </nav>

            <div className="social--links">
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
            </div>

        </div>

    </footer>
  )
}

export default Footer