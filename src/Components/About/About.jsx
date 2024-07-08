import React, { useEffect, useState } from "react";

import sectionStar from "../../assets/img/about/section-star.png";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Title from "../Shared/Title/Title";
import url from "../../assets/img/1.png";

import AOS from "aos";
import "aos/dist/aos.css";

const tabList = [
  {
    id: 1,
    name: "About",
    value: "about",
  },
  {
    id: 2,
    name: "Experience",
    value: "experience",
  },
  {
    id: 3,
    name: "Education",
    value: "education",
  },
  {
    id: 4,
    name: "Skills",
    value: "skills",
  },
];

const About = () => {
  const [isTabActive, setIsTabAative] = useState("about");

  useEffect(() => {
    AOS.init();
  }, []);

  const handleTabClick = (e) => {
    setIsTabAative(e);
  };

  return (
    <>
      <section className="about__section pt-120 pb-120" id="about">
        <Title
              mainTitle="We are VIEWX, we do UI/UX with extentsive desing experience and a portfolio of successful projects. VIEWX operates globally and is always ready to take on any design challenge."
              sortTitle="About Us"
              styles={{fontSize: 16, fontWeight: 400}}
        />
        <div className="container">
          <Title
              // mainTitle="More Than 100+ Companies Trusted Us Worldwide"
              sortTitle="Selected Clients"
          />
          <div>
            <img src={url} style={{ width: "100%", marginBottom: 50 }}></img>
          </div>
          {/* <div className="personal__head text-center">
            <img
              src={sectionStar}
              className="mb-30"
              alt="star"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <p className="descrp" data-aos="fade-up" data-aos-duration="1500">
              We are VIEWX, a brand and website design team with extensive design experience and a portfolio of successful projects. VIEWX operates globally and is always ready to take on any design challenge.
            </p>
          </div> */}
          <div className="singletab" style={{display: "none"}}>
            <ul className="tablinks">
              {tabList.map(({ id, name, value }) => (
                <li
                  key={id}
                  className={`nav-links ${isTabActive === value ? "active" : ""} `}
                >
                  <button onClick={() => handleTabClick(value)} className="tablink">
                    {name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tabcontents">
              <AboutMe isTabActive={isTabActive} />
              <Experience isTabActive={isTabActive} />
              <Education isTabActive={isTabActive} />
              <Skills isTabActive={isTabActive} />
            </div>
          </div>
        </div>
      </section>
      {/* <Awards /> */}
    </>
  );
};

export default About;
