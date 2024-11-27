
import React from "react";
import "./Partners.css";
import { Link } from "react-router-dom";

import mslider_13 from ".././utils/img/mslider_13.png";
import mslider_1 from ".././utils/img/mslider_1.png";
import mslider_2 from ".././utils/img/mslider_2.png";
import mslider_3 from ".././utils/img/mslider_3.png";
import mslider_4 from ".././utils/img/mslider_4.png";
import mslider_5 from ".././utils/img/mslider_5.png";
import mslider_6 from ".././utils/img/mslider_6.png";
import mslider_7 from ".././utils/img/mslider_7.png";
import mslider_8 from ".././utils/img/mslider_8.png";
import mslider_9 from ".././utils/img/mslider_9.png";
import mslider_10 from ".././utils/img/mslider_10.png";
import mslider_11 from ".././utils/img/mslider_11.png";
import mslider_12 from ".././utils/img/mslider_12.png";
import mslider_14 from ".././utils/img/mslider_14.png";
import mslider_15 from ".././utils/img/mslider_15.png";
import mslider_16 from ".././utils/img/mslider_16.png";

const BusinessPartners = () => {
  return (
    <div className="partners-container">
      <div class="header-image">
        <h1>İş Ortaklarımız</h1>
      </div>
      <div className="image-gallery-container">
        <div class="image-gallery">
          <div class="image-item">
            <Link to={"https://etiliseramik.com/"} target="_blank" className="link">
              {" "}
              <img src={mslider_13} alt="Etili Seramik" /> <p className="img-text">Etili Seramik</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.yurtbayseramik.com/"} target="_blank" className="link">
              {" "}
              <img src={mslider_15} alt="Yurtbay Seramik" />{" "}
              <p className="img-text">Yurtbay Seramik</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://ngkutahyaseramik.com.tr/"} target="_blank" className="link">
              {" "}
              <img src={mslider_1} alt="NG Kutahya Seramik" />{" "}
              <p className="img-text">NG Kutahya Seramik</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.creavit.com.tr/"} target="_blank" className="link">
              {" "}
              <img src={mslider_2} alt="CreavitVitrifiye" /> <p className="img-text"> Creavit</p>
            </Link>
          </div>
          <div
            class="image-item"
          
          >
            <Link to={"https://www.roca.com.tr/"} target="_blank" className="link">
              {" "}
              <img src={mslider_3} alt="Roca Banyo" /> <p className="img-text">Roca Banyo</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://pentabanyo.com/"} target="_blank" className="link">
              {" "}
              <img src={mslider_4} alt="Penta Banyo" /> <p className="img-text">Penta Banyo</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.sukar.com.tr/"} target="_blank" className="link">
              {" "}
              <img src={mslider_5} alt="Sukar Su Gideri" />{" "}
              <p className="img-text">Sukar Su Gideri</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.artemis.com.tr/"} target="_blank" className="link">
              {" "}
              <img src={mslider_6} alt="Artemis" /> <p className="img-text">ArtemisDusKabini</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.evabanyo.com.tr/"} target="_blank" className="link">
              {" "}
              <img src={mslider_7} alt="Eva Banyo" /> <p className="img-text">Eva Banyo</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.orkabanyo.com/tr"} target="_blank" className="link">
              {" "}
              <img src={mslider_8} alt="Orka Banyo" /> <p className="img-text">Orka Banyo</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.yasham.com.tr/"} target="_blank" className="link">
              {" "}
              <img src={mslider_9} alt="Yasham Duvar Kağıtları" />{" "}
              <p className="img-text">Yasham Duvar Kağıtları</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://crauf.com/"} target="_blank" className="link">
              {" "}
              <img src={mslider_10} alt="Crauf" /> <p className="img-text">Crauf</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://crauf.com/"} target="_blank" className="link">
              {" "}
              <img src={mslider_16} alt="Franke Ankastre" /> <p className="img-text">Franke</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.kyk.com.tr/"} target="_blank" className="link">
              {" "}
              <img src={mslider_11} alt="KYK Yapı Kimyasalları" />{" "}
              <p className="img-text">KYK Yapı Kimyasalları</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.saint-gobain.com.tr/"} target="_blank" className="link">
              {" "}
              <img src={mslider_12} alt="Weber Yapı Kimyasalları" />{" "}
              <p className="img-text">Weber Yapı Kimyasalları</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.fixa.com.tr/"} target="_blank" className="link">
              {" "}
              <img src={mslider_14} alt="Fixa Yapi Kimyasallari" />
              <p className="img-text">Fixa Yapı Kimyasalları</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;