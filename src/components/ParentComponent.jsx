import React from "react";
import CompanySection from "./CompanySection";
import CeramicAnimation from "./CeramicAnimation";
import "./ParentComponent.css";

const ParentComponent = () => {
  return (
    <div className="parent-container">
      <CompanySection />
      <CeramicAnimation />
    </div>
  );
};

export default ParentComponent;
