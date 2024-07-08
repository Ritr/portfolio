import React from "react";
import gif1 from "../../assets/gif/1.gif";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Partner = () => {
  return (
    <>
      <div className="sponsor__area">
        <div className="swiper sponsor__wrap">
          <img src={gif1} alt="img" style={{width: "100%", objectFit: "contain"}} />
        </div>
      </div>
    </>
  );
};

export default Partner;
