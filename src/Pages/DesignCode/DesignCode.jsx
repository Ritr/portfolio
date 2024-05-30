import { useState } from "react";

// import { imagesList, projectList } from "../../Utlits/projectList";
import WorkeProcess from "../../Components/WorkeProcess/WorkeProcess";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { ScrollRestoration } from "react-router-dom";
import png1 from "../../assets/img/yomi/1.png";
import png2 from "../../assets/img/yomi/2.png";
import png3 from "../../assets/img/yomi/3.png";
import png4 from "../../assets/img/yomi/4.png";
import png5 from "../../assets/img/yomi/5.png";
import png6 from "../../assets/img/yomi/6.png";
import png7 from "../../assets/img/yomi/7.png";
import png8 from "../../assets/img/yomi/8.png";
import png9 from "../../assets/img/yomi/9.png";
import png10 from "../../assets/img/yomi/10.png";
const imagesList = [png1, png2, png3, png4, png5, png6, png7, png8, png9, png10];
const categoryList = [
  {
    id: 1,
    categoryName: "All",
    value: "all",
  },
  {
    id: 2,
    categoryName: "Branding-app",
    value: "branding_app",
  },
  {
    id: 3,
    categoryName: "Los-App",
    value: "los_app",
  },
  {
    id: 4,
    categoryName: "Landing Page",
    value: "landing_page",
  },
  {
    id: 5,
    categoryName: "Website",
    value: "website",
  },
];
const DesignCode = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("all");

  // ---------- Filer project by category
  let filterProject = [];

  // for (const iterator of projectList) {
  //   for (const cet of iterator.category) {
  //     if (cet === currentCategory) {
  //       filterProject.push(iterator);
  //     }
  //   }
  // }

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="project__section pb-120">

        <div className="container">
          <div className="mt-60 mb-60">
            <p className="mb-20"  style={{ color: "#ffffff",fontSize:"36px",fontWeight:"bold" }}>Cerebellum X Eggy Party Part three</p>
            <p  style={{ color: "#ffffff",fontSize:"16px" }}>The following is the recent cooperation between cerebellum and Egg party visual works, there are a lot of style exploration in the process,
              and the finalizing of the details of the style, are inseparable from the Egg video project team's great kind guidance,
              thank you very much for the trust and support of the NetEase Egg Party project team! </p>
          </div>
          <div className="singletab protfolio__filter">
            {/* <ul
              className="tablinks"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              {categoryList.map(({ id, categoryName, value }) => (
                <li
                  key={id}
                  className={`nav-links ${currentCategory === value ? "active" : ""
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
            </ul> */}
            <div className="">
              {
                imagesList.map(item => {
                  return <img src={item} key={item} style={{ width: "100%", marginTop: "20px" }}></img>
                })
              }
            </div>
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            images={imagesList}
            setLightboxOpen={setLightboxOpen}
            currentId={currentId}
          />
        )}
      </section>
      <WorkeProcess />
      <ScrollRestoration />
    </>
  );
};

export default DesignCode;
