import React from "react";
import "./CeramicAnimation.css";

const CeramicAnimation = () => {
  // Örnek resimler
  const ceramicImages = [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
    "/path/to/image4.jpg",
    "/path/to/image5.jpg",
    "/path/to/image6.jpg",
    "/path/to/image7.jpg",
    "/path/to/image8.jpg",
    "/path/to/image9.jpg",
    "/path/to/image10.jpg",
    "/path/to/image11.jpg",
    "/path/to/image12.jpg",
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
