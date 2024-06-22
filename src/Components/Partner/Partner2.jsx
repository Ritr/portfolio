import React from "react";
import gif1 from "../../assets/gif/1.gif";
import gif2 from "../../assets/gif/2.gif";
import gif3 from "../../assets/gif/3.gif";
import gif4 from "../../assets/gif/4.gif";
import gif5 from "../../assets/gif/5.gif";
import gif6 from "../../assets/gif/6.gif";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const partnerList = [
  {
    id: 1,
    image: gif1,
  },
  {
    id: 2,
    image: gif2,
  },
  {
    id: 3,
    image: gif3,
  },
  {
    id: 4,
    image: gif4,
  },
  {
    id: 5,
    image: gif5,
  },
  {
    id: 6,
    image: gif6,
  },
  {
    id: 1,
    image: gif1,
  }
];
const Partner = () => {
  return (
    <>
      <div className="sponsor__area">
        <div className="swiper sponsor__wrap">
          <Swiper
            autoplay={{delay: 4000}}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            modules={[Pagination, Autoplay, Navigation]}
          >
            {partnerList.map(({ id, image }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="swiper-wrapper">
                    <div key={id} className="sponsor__slide swiper-slide">
                      <img src={image} alt="img" style={{width: "100%", objectFit: "contain"}} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
