import React from "react";
import "./CeramicAnimation.css";

import image1 from "../utils/img/adelbeyaz.jpeg";
import image2 from "../utils/img/atlantisantrasit.jpeg";
import image3 from "../utils/img/atlantisbeyaz.jpeg";
import image4 from "../utils/img/avend.jpeg";
import image5 from "../utils/img/barbados.jpeg";
import image6 from "../utils/img/blackcalacatta.jpeg";
import image7 from "../utils/img/elegantgri.jpeg";
import image8 from "../utils/img/mareakgri.jpeg";
import image9 from "../utils/img/narsistlatte.jpeg";
import image10 from "../utils/img/rainforest.jpeg";
import image11 from "../utils/img/pulpisprimeagri.jpeg";
import image12 from "../utils/img/valerya.jpeg";

const CeramicAnimation = () => {
  // Örnek resimler
  const ceramicImages = [
    image1,
    image2,
    image3 ,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9 ,
    image10 ,
    image11,
    image12,
  ];

  return (
    <div className="ceramic-animation">
      <div className="circle">
        {ceramicImages.map((image, index) => (
          <div
            className="ceramic-tile"
            style={{
              transform: `rotateY(${index * 30}deg) translateZ(300px) translateY(-60px) translateX(-20px)`,
            }}
            key={index}
          >
            <img src={image} alt={`Ceramic ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CeramicAnimation;
