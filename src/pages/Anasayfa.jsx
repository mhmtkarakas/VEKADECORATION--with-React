import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Anasayfa.css";
import { useState } from "react";
import Hakimizda from "./../components/Hakimizda";
import Markalar from "../components/Markalar";
import Galeri from './../components/Galeri';

const Anasayfa = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home-page">
    
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            style={{ objectFit: "cover", height: "100vh" }}
            className="d-block w-100 img-fluid"
            src="https://i0.wp.com/bi-ozet.com/wp-content/uploads/2022/12/1670918790_DELMAR_120X240_MEKAN__1_.jpg?fit=2953%2C1925&ssl=1"
            alt="1. resim"
          />
          <Carousel.Caption>
            <h3>VEKA DEKORASYON</h3>
            <p>Hos Geldiniz.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ objectFit: "cover", height: "100vh" }}
            className="d-block w-100 img-fluid"
            src="https://ngkutahyaseramik.com.tr/uploads/Categories/fusion/FUSION_120X240_MEKAN_REVIZE_1__w637_h343_op.jpg"
            alt="2. resim"
          />
          <Carousel.Caption>
            <h3>VEKA DEKORASYON</h3>
            <p>Hos Geldiniz.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ objectFit: "cover", height: "100vh" }}
            className="d-block w-100 img-fluid"
            src="https://ngkutahyaseramik.com.tr/uploads/Categories/amazonit/AMAZONIT_120X240_MEKAN_w637_h343_op.jpg"
            alt="3. resim"
          />
          <Carousel.Caption>
            <h3>VEKA DEKORASYON</h3>
            <p>Hos Geldiniz.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ objectFit: "cover", height: "100vh" }}
            className="d-block w-100 img-fluid"
            src="https://ngkutahyaseramik.com.tr/uploads/Categories/garden/GARDEN_120X240_MEKAN_w637_h343_op.jpg"
            alt="4. resim"
          />
          <Carousel.Caption>
            <h3>VEKA DEKORASYON</h3>
            <p>Hos Geldiniz.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ objectFit: "cover", height: "100vh" }}
            className="d-block w-100 img-fluid"
            src="https://ngkutahyaseramik.com.tr/uploads/Categories/tosca/TOSCA_120X240_MEKAN_w637_h343_op.jpg"
            alt="5. resim"
          />
          <Carousel.Caption>
            <h3>VEKA DEKORASYON</h3>
            <p>Hos Geldiniz.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Hakimizda />
      <Markalar />
      <Galeri />
    </div>
  );
};

export default Anasayfa;
