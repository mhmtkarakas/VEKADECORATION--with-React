import React from "react";
import Pagination from "react-bootstrap/Pagination";
import kutahyaimg from "../utils/img/kutahyaimg.jpg";
import dukaimg from "../utils/img/dukaimg.png";
import creavitimg from "../utils/img/creavitimg.png";
import rocaimg from "../utils/img/rocaimg.png";
import groheimg from "../utils/img/groheimg.png";
import nskimg from "../utils/img/nskimg.png";
import pentaimg from "../utils/img/pentaimg.png";
import artemisimg from "../utils/img/artemisimg.png";
import orkaimg from "../utils/img/orkaimg.svg";
import belinzaimg from "../utils/img/belinzaimg.png";
import evaimg from "../utils/img/evaimg.jpg";
import realstone from "../utils/img/realstoneimg.png";
import blanco from "../utils/img/blancoimg.png";

import "./Markalar.css";

const Markalar = () => {
  const handleClick = () => {
    window.open("https://ngkutahyaseramik.com.tr/", "_blank");
  };
  const handleClick1 = () => {
    window.open("https://www.yasham.com.tr/", "_blank");
  };
  const handleClick2 = () => {
    window.open("	https://www.dukaduvarkagidi.com/", "_blank");
  };
  const handleClick3 = () => {
    window.open("https://www.creavit.com.tr/", "_blank");
  };
  const handleClick4 = () => {
    window.open("https://www.roca.com.tr/", "_blank");
  };
  const handleClick5 = () => {
    window.open("https://www.grohe.com.tr/tr_tr/", "_blank");
  };
  const handleClick6 = () => {
    window.open("https://www.nskbathandkitchen.com/tr//", "_blank");
  };
  const handleClick7 = () => {
    window.open("https://www.nskbathandkitchen.com/tr//", "_blank");
  };
  const handleClick8 = () => {
    window.open("https://www.artemis.com.tr/", "_blank");
  };
  const handleClick9 = () => {
    window.open("https://www.artemis.com.tr/", "_blank");
  };
  const handleClick10 = () => {
    window.open("https://belinza.com/tr/kategori/banyo-mobilyalari", "_blank");
  };
  const handleClick11 = () => {
    window.open("https://belinza.com/tr/kategori/banyo-mobilyalari", "_blank");
  };
  const handleClick12 = () => {
    window.open("https://realstone.com.tr/", "_blank");
  };
  const handleClick13 = () => {
    window.open("https://www.peramutfak.com.tr/blanco/", "_blank");
  };

  return (
    <div className="container my-5 ">
      <div className="row markalar">
        <div className="col-md-12 d-flex justify-content-center d-lg-flex ">
          <Pagination border="none">
            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick}
                target="_blank"
                src={kutahyaimg}
                alt="kutahyaseramik"
              />
            </Pagination.Item>

            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick1}
                target="_blank"
                src="https://www.yasham.com.tr/assets/image/logo.png"
                alt="yasham"
              />
            </Pagination.Item>

            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick2}
                src={dukaimg}
                alt="duka"
              />
            </Pagination.Item>
            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick3}
                src={creavitimg}
                alt="creavit"
              />
            </Pagination.Item>
            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick4}
                src={rocaimg}
                alt="roca"
              />
            </Pagination.Item>

            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick5}
                src={groheimg}
                alt="grohe"
              />
            </Pagination.Item>
            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick6}
                src={nskimg}
                alt="nsk"
              />
            </Pagination.Item>
          </Pagination>
        </div>
      </div>
      <div className="row markalar my-3">
        <div className="col-md-12 d-flex justify-content-center d-lg-flex ">
          <Pagination border="none">
            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick7}
                target="_blank"
                src={pentaimg}
                alt="penta"
              />
            </Pagination.Item>

            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick8}
                target="_blank"
                src={artemisimg}
                alt="Artemis"
              />
            </Pagination.Item>

            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick9}
                src={orkaimg}
                alt="duka"
              />
            </Pagination.Item>
            <Pagination.Item>
              <img
                className="bg-dark img-fluid"
                onClick={handleClick10}
                src={belinzaimg}
                alt="belinza"
              />
            </Pagination.Item>
            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick11}
                src={evaimg}
                alt="evabanyo"
              />
            </Pagination.Item>

            <Pagination.Item>
              <img
                className="bg-dark img-fluid"
                onClick={handleClick12}
                src={realstone}
                alt="realstone"
              />
            </Pagination.Item>
            <Pagination.Item>
              <img
                className="img-fluid"
                onClick={handleClick13}
                src={blanco}
                alt="blanco"
              />
            </Pagination.Item>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Markalar;
