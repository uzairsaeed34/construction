import React, { useRef } from "react";
import "./Project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });
      timeline
        .from(".title", { y: -50, opacity: 0 })
        .from(".sub__title", { y: -50, opacity: 0 })
        .fromTo(
          ".slick-slide",
          { x: 100, opacity: 0 },
          { opacity: 1, stagger: 0.5, x: 0 }
        );
    },
    { scope: container }
  );

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint for larger screens
        settings: {
          slidesToShow: 2,
          centerPadding: "40px", // Adjust the padding
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <section id="project" ref={container}>
      <div className="project__top">
        <h1 className="title">
          Our <span className="g-text">Projects</span>
        </h1>
        <h3 className="sub__title">
          Innovative construction projects, exceptional craftsmanship.
        </h3>
      </div>
      <Slider {...settings} className="projects__container">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <div className="image__container img_con">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="details project_card p_det">
              <h3 className="name">{project.title}</h3>
              <p className="text__muted description">{project.description}</p>
            </div>
          </React.Fragment>
        ))}
      </Slider>
    </section>
  );
};

export default Project;
