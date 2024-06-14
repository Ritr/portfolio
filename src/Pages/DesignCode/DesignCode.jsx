import { useState } from "react";

// import { imagesList, projectList } from "../../Utlits/projectList";
import WorkeProcess from "../../Components/WorkeProcess/WorkeProcess";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { ScrollRestoration, useLocation } from "react-router-dom";
// import png1 from "../../assets/img/yomi/1.png";
// import png2 from "../../assets/img/yomi/2.png";
// import png3 from "../../assets/img/yomi/3.png";
// import png4 from "../../assets/img/yomi/4.png";
// import png5 from "../../assets/img/yomi/5.png";
// import png6 from "../../assets/img/yomi/6.png";
// import png7 from "../../assets/img/yomi/7.png";
// import png8 from "../../assets/img/yomi/8.png";
// import png9 from "../../assets/img/yomi/9.png";
// import png10 from "../../assets/img/yomi/10.png";
// const imagesList = [png1, png2, png3, png4, png5, png6, png7, png8, png9, png10];
import png1 from "../../assets/img/newYomi/1.png";
import png2 from "../../assets/img/newYomi/2.png";
import png3 from "../../assets/img/newYomi/3.png";
import png4 from "../../assets/img/newYomi/4.png";
import png5 from "../../assets/img/newYomi/5.png";
import png6 from "../../assets/img/newYomi/6.png";
import png7 from "../../assets/img/newYomi/7.png";
import png8 from "../../assets/img/newYomi/8.png";
import gif9 from "../../assets/img/newYomi/9-GIF.gif";
import png9 from "../../assets/img/newYomi/9.png";
import png10 from "../../assets/img/newYomi/10.png";
import png11 from "../../assets/img/newYomi/11.png";
import png12 from "../../assets/img/newYomi/12.png";
import png13 from "../../assets/img/newYomi/13.png";
import png14 from "../../assets/img/newYomi/14.png";
import png15 from "../../assets/img/newYomi/15.png";
import png16 from "../../assets/img/newYomi/16.png";
import png17 from "../../assets/img/newYomi/17.png";
import png18 from "../../assets/img/newYomi/18.png";
import png19 from "../../assets/img/newYomi/19.png";
import png20 from "../../assets/img/newYomi/20.png";
import png21 from "../../assets/img/newYomi/21.png";
import png22 from "../../assets/img/newYomi/22.png";
import png23 from "../../assets/img/newYomi/23.png";
const imagesList = [png1, png2, png3, png4, png5, png6, png7, png8, gif9, png9, png10,
  png11, png12, png13, png14, png15, png16, png17, png18, png19, png20, png21, png22, png23];

import towgif1 from "../../assets/img/2/1.gif";
import towpng1 from "../../assets/img/2/1.png";
import towgif2 from "../../assets/img/2/2.gif";
import towpng2 from "../../assets/img/2/2.png";
import towgif3 from "../../assets/img/2/3.gif";
import towpng3 from "../../assets/img/2/3.png";
import towgif4 from "../../assets/img/2/4.gif";
import towpng4 from "../../assets/img/2/4.png";
import towpng5 from "../../assets/img/2/5.png";
import towpng6 from "../../assets/img/2/6.png";
import towpng7 from "../../assets/img/2/7.png";
import towpng8 from "../../assets/img/2/8.png";
const imagesList2 = [towgif1, towpng1, towgif2, towpng2, towgif3, towpng3, towgif4, towpng4, towpng5, towpng6, towpng7, towpng8];
import threepng1 from "../../assets/img/3/1.jpg";
import threepng2 from "../../assets/img/3/2.png";
const imagesList3 = [threepng1, threepng2];
import fourpng1 from "../../assets/img/4/1.png";
import fourpng2 from "../../assets/img/4/2.png";
import fourpng3 from "../../assets/img/4/3.png";
import fourpng4 from "../../assets/img/4/4.png";
import fourpng5 from "../../assets/img/4/5.png";
import fourpng6 from "../../assets/img/4/6.png";
import fourpng7 from "../../assets/img/4/7.png";
import fourpng8 from "../../assets/img/4/8.png";
import fourpng9 from "../../assets/img/4/9.png";
import fourpng10 from "../../assets/img/4/10.png";
const imagesList4 = [fourpng1, fourpng2, fourpng3, fourpng4, fourpng5, fourpng6, fourpng7, fourpng8, fourpng9, fourpng10];
import fivepng1 from "../../assets/img/5/1.jpg";
import fivepng2 from "../../assets/img/5/2.png";
const imagesList5 = [fivepng1, fivepng2];
import sixpng1 from "../../assets/img/6/1.jpg";
import sixpng2 from "../../assets/img/6/2.png";
const imagesList6 = [sixpng1, sixpng2];
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
  const search = useLocation().search;
  let id = search.replace("?id=", "");
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
                id == 1 ? imagesList.map(item => {
                  return <img src={item} key={item} style={{ width: "100%", marginTop: "20px" }}></img>
                }) : null
              }
              {
                id == 2 ? imagesList2.map(item => {
                  return <img src={item} key={item} style={{ width: "100%", marginTop: "20px" }}></img>
                }) : null
              }
              {
                id == 3 ? imagesList3.map(item => {
                  return <img src={item} key={item} style={{ width: "100%", marginTop: "20px" }}></img>
                }) : null
              }
              {
                id == 4 ? imagesList4.map(item => {
                  return <img src={item} key={item} style={{ width: "100%", marginTop: "20px" }}></img>
                }) : null
              }
              {
                id == 5 ? imagesList5.map(item => {
                  return <img src={item} key={item} style={{ width: "100%", marginTop: "20px" }}></img>
                }) : null
              }
              {
                id == 6 ? imagesList6.map(item => {
                  return <img src={item} key={item} style={{ width: "100%", marginTop: "20px" }}></img>
                }) : null
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
