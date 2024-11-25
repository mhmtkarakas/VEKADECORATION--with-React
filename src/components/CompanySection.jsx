import React from "react";
import "./CompanySection.css";

import sirket from "../utils/img/sirketbolumu.jpg";
import sirket1 from "../utils/img/sirketbolumu1.jpg";

const CompanySection = () => {
  return (
    <div className="company-section">
    <div className="text-section">
      <h1>Veka Dekorasyon MİMARLIK</h1>
      <p>
        Veka Dekorasyon Mimarlık olarak modern seramik tasarımları ve kaliteli
        ürünlerimizle mekanlarınıza değer katıyoruz. Geniş ürün yelpazemizle
        projelerinizi hayata geçiriyoruz.
      </p>
    </div>
    <div className="images-section">
      <img src={sirket} alt="Seramik Ürün 1" className="image" />
      <img src={sirket1} alt="Seramik Ürün 2" className="image" />
    </div>
  </div>
  );
};

export default CompanySection;

