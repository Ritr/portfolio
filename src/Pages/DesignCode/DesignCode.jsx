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

import tow1 from "../../assets/img/2/01.png";
import tow2 from "../../assets/img/2/02.png";
import tow3 from "../../assets/img/2/03.png";
import tow4 from "../../assets/img/2/04.png";
import tow5 from "../../assets/img/2/05.png";
import tow6 from "../../assets/img/2/06.png";
import tow7 from "../../assets/img/2/07.png";
import tow8 from "../../assets/img/2/08.png";
import tow9 from "../../assets/img/2/09.png";
import tow10 from "../../assets/img/2/10.png";
const imagesList2 = [tow1, tow2, tow3, tow4, tow5, tow6, tow7, tow8, tow9, tow10];
import threepng1 from "../../assets/img/3/1.gif";
import threepng2 from "../../assets/img/3/1.png";
import threepng3 from "../../assets/img/3/2.gif";
import threepng4 from "../../assets/img/3/2.png";
import threepng5 from "../../assets/img/3/3.gif";
import threepng6 from "../../assets/img/3/3.png";
import threepng7 from "../../assets/img/3/4.gif";
import threepng8 from "../../assets/img/3/4.png";
import threepng9 from "../../assets/img/3/5.png";
import threepng10 from "../../assets/img/3/6.png";
import threepng11 from "../../assets/img/3/7.png";
import threepng12 from "../../assets/img/3/8.png";
const imagesList3 = [threepng1, threepng2,threepng3,threepng4,threepng5,threepng6,threepng7,threepng8,threepng9,threepng10,threepng11,threepng12];
import fourpng1 from "../../assets/img/4/1.jpg";
import fourpng2 from "../../assets/img/4/2.png";
const imagesList4 = [fourpng1, fourpng2];
import fivepng1 from "../../assets/img/5/1.jpg";
import fivepng2 from "../../assets/img/5/2.png";
const imagesList5 = [fivepng1, fivepng2];
import sixpng1 from "../../assets/img/6/1.jpg";
import sixpng2 from "../../assets/img/6/2.png";
const imagesList6 = [sixpng1, sixpng2];
import seven1 from "../../assets/img/7/1.png";
import seven2 from "../../assets/img/7/2.gif";
import seven3 from "../../assets/img/7/3.png";
import seven4 from "../../assets/img/7/4.png";
import seven5 from "../../assets/img/7/5.gif";
import seven6 from "../../assets/img/7/6.gif";
import seven7 from "../../assets/img/7/7.gif";
import seven8 from "../../assets/img/7/8.png";
import seven9 from "../../assets/img/7/9.png";
import seven10 from "../../assets/img/7/10.png";
const imagesList7 = [seven1, seven2, seven3, seven4, seven5, seven6, seven7, seven8, seven9, seven10];
import eight1 from "../../assets/img/8/1.png";
import eight2 from "../../assets/img/8/2.gif";
import eight3 from "../../assets/img/8/3.png";
import eight4 from "../../assets/img/8/4.gif";
import eight5 from "../../assets/img/8/5.png";
import eight6 from "../../assets/img/8/6.gif";
import eight7 from "../../assets/img/8/7.png";
import eight8 from "../../assets/img/8/8.gif";
const imagesList8 = [eight1, eight2, eight3, eight4, eight5, eight6, eight7, eight8];
import nine1 from "../../assets/img/9/1.gif";
import nine2 from "../../assets/img/9/2.gif";
import nine3 from "../../assets/img/9/3.gif";
import nine4 from "../../assets/img/9/4.gif";
import nine5 from "../../assets/img/9/5.gif";
import nine6 from "../../assets/img/9/6.gif";
import nine7 from "../../assets/img/9/7.gif";
import nine8 from "../../assets/img/9/8.gif";
import nine9 from "../../assets/img/9/9.gif";
import nine10 from "../../assets/img/9/10.gif";
import nine11 from "../../assets/img/9/11.gif";
import nine12 from "../../assets/img/9/12.gif";
import nine13 from "../../assets/img/9/13.gif";
import nine14 from "../../assets/img/9/14.gif";
import nine15 from "../../assets/img/9/15.gif";
import nine16 from "../../assets/img/9/16.gif";
import nine17 from "../../assets/img/9/17.gif";
const imagesList9 = [nine1, nine2, nine3, nine4, nine5, nine6, nine7, nine8,nine9,nine10,nine11,nine12,nine13,nine14,nine15,nine16,nine17];
import animation1 from "../../assets/img/10/1.gif";
import animation2 from "../../assets/img/10/2.gif";
import animation3 from "../../assets/img/10/3.gif";
import animation4 from "../../assets/img/10/4.gif";
import animation5 from "../../assets/img/10/5.gif";
import animation6 from "../../assets/img/10/6.gif";
import animation7 from "../../assets/img/10/7.gif";
import animation8 from "../../assets/img/10/8.gif";
import animation9 from "../../assets/img/10/9.gif";
import animation10 from "../../assets/img/10/10.gif";
import animation11 from "../../assets/img/10/11.gif";
import animation12 from "../../assets/img/10/12.gif";
import animation13 from "../../assets/img/10/13.gif";
import animation14 from "../../assets/img/10/14.gif";
import animation15 from "../../assets/img/10/15.gif";
import animation16 from "../../assets/img/10/16.gif";
const imagesList10 = [animation1, animation2,animation3,animation4,animation5,animation6,animation7,animation8,animation9,animation10,
  animation11,animation12,animation13,animation14,animation15,animation16];
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
              {
                id == 7 ? imagesList7.map(item => {
                  return <img src={item} key={item} style={{ width: "100%", marginTop: "20px" }}></img>
                }) : null
              }
              {
                id == 8 ? imagesList8.map(item => {
                  return <img src={item} key={item} style={{ width: "100%", marginTop: "20px" }}></img>
                }) : null
              }
              {
                id == 10 ? imagesList10.map(item => {
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
      {/* <WorkeProcess /> */}
      <ScrollRestoration />
    </>
  );
};

export default DesignCode;
