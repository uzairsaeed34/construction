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
              <a href="#projects">Projects</a>
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
              <i className="fas fa-map-marker-alt"></i> Wapda Town, Multan
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> +92 303 7017060
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@meymarbuilders.com
            </li>
          </ul>
        </div>

        <div className="footer__section social">
          <h2 className="footer__title">Follow Us</h2>
          <div className="footer__social-icons">
            <a href="#">
              <i className="fab fa-facebook-f">
                <FaFacebookF />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-twitter">
                <FaTwitter />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram">
                <FaInstagram />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in">
                <FaLinkedinIn />
              </i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2024 Meymar Builders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
