import React, { useEffect, useState } from "react";

import Title from "../Shared/Title/Title";
import Lightbox from "../Shared/LightBox/LightBox";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import { imagesList, projectList } from "../../Utlits/projectList";
import { Link } from "react-router-dom";

const categoryList = [
  {
    id: 1,
    categoryName: "All",
    value: "all",
  },
  {
    id: 2,
    categoryName: "UI/UX",
    value: "ui_ux",
  },
  {
    id: 3,
    categoryName: "ICON",
    value: "icon",
  },
  {
    id: 4,
    categoryName: "ILLUSTRATION",
    value: "illustration",
  },
  {
    id: 5,
    categoryName: "ANIMATION",
    value: "animation",
  },
];

const Projects = () => {
  const [currentId, setCurrentId] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };
  let filterProject = [];

  for (const iterator of projectList) {
    for (const cet of iterator.category) {
      if (cet === currentCategory) {
        filterProject.push(iterator);
      }
    }
  }
  return (
    <section className="project__section pt-120 pb-120" id="projects">
      <div className="container">
        <Title
          // mainTitle={"Look at my portfolio and give me your feedback"}
          sortTitle={"Portfolio"}
        />
        <ul
              className="tablinks"
              data-aos="fade-down"
              data-aos-duration="2000"
              style={{margin: '0 auto 20px'}}
            >
              {categoryList.map(({ id, categoryName, value }) => (
                <li
                  key={id}
                  className={`nav-links ${
                    currentCategory === value ? "active" : ""
                  } `}
                >
                  <button
                    className="tablink"
                    onClick={() => setCurrentCategory(value)}
                  >
                    {categoryName}
                  </button>
                </li>
              ))}
            </ul>
        <div className={`project__wrapone`}>
          {filterProject.map(({ heading, id, image, subHeading }, index) => (
            <Link to={`/design-code?id=${id}`} key={id}>
              <ProjectCard
                image={image}
                heading={heading}
                subHeading={subHeading}
                openLightbox={openLightbox}
                index={index}
                navigate={`/design-code?id=${id}`}
                // navigate="/protfolio"
              />
            </Link>
          ))}
        </div>

        {/* <div className="custom__hover">
          <Link to={"/protfolio"}
            className="hover__circle mauto"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          >
            <span className="box">
              <i className="bi bi-arrow-up-right"></i>
              <span className="textmore"> Click More Work </span>
            </span>
          </Link>
        </div> */}
      </div>
      {/* {lightboxOpen && (
        <Lightbox
          images={imagesList}
          setLightboxOpen={setLightboxOpen}
          currentId={currentId}
        />
      )} */}
    </section>
  );
};

export default Projects;
