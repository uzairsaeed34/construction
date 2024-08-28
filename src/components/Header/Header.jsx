import React, { useRef } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import Achievement from "../Achievement/Achievement";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const timeline = gsap.timeline({ delay: 1, stagger: 1 });
      timeline
        .fromTo(
          ".header__content",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, ease: "sine.in" }
        )
        .from(".title", { opacity: 0, y: -30 })
        .from(".description", { opacity: 0, y: -30 })
        .from(".buttons__container", { opacity: 0, y: 40 });
    },
    { scope: container }
  );

  return (
    <header id="header" ref={container}>
      <div className="header__content container full__height">
        <div className="row">
          <div className="column">
            <h1 className="title">
              Building Dreams, <span className="g-text">Creating Reality</span>
            </h1>
            <p className="text__muted description hero_text">
              We are dedicated to turning your visions into tangible
              masterpieces. With years of experience and a team of skilled
              professionals, we specialize in delivering high-quality
              construction services tailored to meet the unique needs of each
              client.
            </p>
            <div className="buttons__container">
              <Link to="services" smooth={true} className="btn">
                Our Services
              </Link>
              <Link to="contact" smooth={true} className="btn btn__primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <Achievement />
      </div>
    </header>
  );
};

export default Header;
