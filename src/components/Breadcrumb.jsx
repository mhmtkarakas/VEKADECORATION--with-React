import React from "react";

import "./Breadcrumb.css";

const Breadcrumb = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="breadcrumb-container">
  
      <button className="scroll-to-top" onClick={scrollToTop}>
        &uarr;
      </button>
    </div>
  );
};

export default Breadcrumb;
