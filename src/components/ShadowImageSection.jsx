
import img from '.././utils/img/bathroom.jpg'

import React from 'react';
import './ShadowImageSection.css';

const ImageOverlay = () => {
  return (
    <div className="image-overlay-container">
      <div className="image-overlay">
        <img 
          src={img} // Resminizin yolunu buraya yazın
          alt="Seramik Ürün"
          className="image"
        />
        <div className="overlay-content">
          <h2 className="overlay-text">
            Sıklık ve Zerafeti Yakalamak İçin Bizimle İletişime Geçin
          </h2>
          <button
            className="contact-button"
            onClick={() => {
              window.location.href = '/iletisim'; // İletişim sayfasına yönlendirme
            }}
          >
            İletişim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;

