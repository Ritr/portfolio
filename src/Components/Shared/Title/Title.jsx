import React from "react";

const Title = ({ mainTitle, sortTitle, styles = {} }) => {
  return (
    <div className="project__head text-center" style={{margin: '0 auto 20px'}}>
      <span
        className="common__sub"
        data-aos="fade-down"
        data-aos-duration="1000"
        style={{fontWeight: 'bold', display: 'inline-flex', padding: '0px 20px'}}
      >
        {sortTitle}
      </span>
      <h2 style={styles} className="fw-500" data-aos="fade-up" data-aos-duration="1200">
        {mainTitle}
      </h2>
    </div>
  );
};

export default Title;
