import React from "react";
import {Envelope, GeoAlt, Telephone, Send, TelephoneOutbound} from "react-bootstrap-icons";
import Title from "../Shared/Title/Title";
import mettingImag from "../../assets/img/project/project-need.png";
import png1 from "../../assets/img/4.jpeg";
import png2 from "../../assets/img/5.jpeg";
const Metting = () => {
  return (
    <section className="project__metting overhid pt-120 pb-120" id="metting">
      <div className="container">
        <Title
              mainTitle="Let's work together. fixed a meeting"
              sortTitle="Need a Project?"
              styles={{fontSize: 16, fontWeight: 400}}
        />
        <div className="row g-4 align-items-center" style={{marginTop: 20, position: "relative"}}>
          <div className="col-lg-6">
            <div className="pro__metting__content">
              <div className="project__head" style={{display: 'none'}}>
                <span
                  className="common__sub"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Need a Project?
                </span>
                <h2
                  className="fw-500"
                  data-aos="fade-down"
                  data-aos-duration="1600"
                >
                  Let's work together. fixed a meeting
                </h2>
              </div>
              <div
                className="about__contbox__item pb-30"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="icon">
                  <Envelope className="i"/>
                </span>
                <span className="box">
                  <span className="ptext fz-18 mb-1 d-block"> Email </span>
                  <a style={{textTransform: "none"}}> wen.b2019@gmail.com </a>
                </span>
              </div>
              <div
                className="about__contbox__item pb-30 pt-30"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="icon">
                  <TelephoneOutbound className="i"/>
                </span>
                <span className="box">
                  <span className="ptext fz-18 mb-1 d-block"> WhatsApp </span>
                  <a> +86 18675804029 </a>
                  <img src={png1} style={{marginTop:12, height: 280, borderRadius: 10, padding: 0, margin: 0 }}></img>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pro__metting__content">
              <div
                className="about__contbox__item pb-30"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="icon">
                  <Telephone className="i"/>
                </span>
                <span className="box">
                  <span className="ptext fz-18 mb-1 d-block"> Telephone </span>
                  <a> +86 18675804029 </a>
                </span>
              </div>
              <div
                className="about__contbox__item pb-30 pt-30"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="icon">
                  <Send className="i"/>
                </span>
                <span className="box">
                  <span className="ptext fz-18 mb-1 d-block"> Telegram </span>
                  <a> +86 18675804029 </a>
                  <img src={png2} style={{ marginTop:12, height: 280, borderRadius: 10, padding: 0, margin: 0 }}></img>
                </span>
              </div>
            </div>
            <div
              className="pro__mettingthumb"
              data-aos="zoom-in"
              data-aos-duration="2000"
              style={{display: 'none'}}
            >
              <img src={mettingImag} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metting;
