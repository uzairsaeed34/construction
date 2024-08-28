import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section about">
          <h2 className="footer__title">
            <Logo />
          </h2>
          <p className="footer__description">
            At Meymar Builders, we turn your visions into reality with our
            expert construction services. Quality and client satisfaction are
            our top priorities.
          </p>
        </div>

        <div className="footer__section links">
          <h2 className="footer__title">Quick Links</h2>
          <ul className="footer__list">
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__section contact">
          <h2 className="footer__title">Contact Us</h2>
          <ul className="footer__contact">
            <li>
              <FaMapMarkerAlt /> Wapda Town, Multan
            </li>
            <li>
              <FaPhoneAlt /> +92 303 7017060
            </li>
            <li>
              <FaEnvelope /> info@meymarbuilders.com
            </li>
          </ul>
        </div>

        <div className="footer__section social">
          <h2 className="footer__title">Follow Us</h2>
          <div className="footer__social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom fb_t">
        <p>&copy; 2024 Meymar Builders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
