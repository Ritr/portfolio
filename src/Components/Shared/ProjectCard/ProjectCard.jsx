import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import url2 from "../../../assets/img/2.png";
import url3 from "../../../assets/img/3.png";

const ProjectCard = ({
  image,
  heading,
  subHeading,
  index,
  openLightbox,
  navigate,
}) => {
  return (
    <div
      className={`project__item  ${index !== 2 && "cus__mb60"}`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div onClick={() => openLightbox(index)} className="thumb mb-30 imgc">
        <img src={image} alt="img" />
      </div>
      <div className="content d-flex align-items-center justify-content-between gap-2">
        <Link to={navigate} className="left__cont">
          <span className="base mb-2 mb-xxl-3 d-block text-uppercase">
            {heading}
          </span>
          <h3>{subHeading}</h3>
        </Link>
        <div onClick={() => openLightbox(index)} className="common__icon imgc" style={{borderRadius: 8}}>
          {/* <ArrowUpRight className="icon" /> */}
          <img src={url3} className="icon" style={{}}></img>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
