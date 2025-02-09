import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Anasayfa.css";
import { useState } from "react";
import Hakimizda from "./../components/Hakimizda";

import slider_1 from "./../utils/img/slider_1.jpg";
import slider_2 from "./../utils/img/slider_2.jpg";
import slider_4 from "./../utils/img/slider_4.jpg";
import slider_5 from "./../utils/img/slider_5.jpg";
import slider_6 from "./../utils/img/slider_6.jpg";
import ParentComponent from "../components/ParentComponent";
import MultipleItemsSlider from "../components/MultipleItemsSlider";
import Main from "../components/Main";
import AnimatedText from "../components/AnimatedText";
import Bathroom from "../components/Bathroom";

const Anasayfa = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home-page">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 "
            src={slider_1}
            alt="Kutahya Seramik 120*240 Delmar"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>VEKA DEKORASYON</h3>
            <p>NG Kütahya Seramik</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 "
            src={slider_2}
            alt="Kutahya Seramik 120*240 Tropikal"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>VEKA DEKORASYON</h3>
            <p>NG Kütahya Seramik</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 "
            src={slider_4}
            alt="Creavit Vitrifiye"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>VEKA DEKORASYON</h3>
            <p>Creavit Vitrifiye</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100 " src={slider_5} alt="Etili Seramik" />
          <Carousel.Caption className="carousel-caption">
            <h3>VEKA DEKORASYON</h3>
            <p>Etili Seramik</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 "
            src={slider_6}
            alt="Yurtbay Seramik Prestij Beyaz"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>VEKA DEKORASYON</h3>
            <p>Yurtbay Seramik</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ParentComponent />
      <Hakimizda />
      <Main />
      <MultipleItemsSlider />
      <Bathroom />
      <AnimatedText />
    </div>
  );
};

export default Anasayfa;



//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };
//   return (
//     <div className="home-page">

//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//           <img
//             style={{ objectFit: "cover", height: "100vh" }}
//             className="d-block w-100 img-fluid"
//             src="https://i0.wp.com/bi-ozet.com/wp-content/uploads/2022/12/1670918790_DELMAR_120X240_MEKAN__1_.jpg?fit=2953%2C1925&ssl=1"
//             alt="veka mimarlık dekorasyon 1.resim"
//           />
//           <Carousel.Caption>
//             <h3>VEKA DEKORASYON</h3>
//             <p>Hos Geldiniz.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             style={{ objectFit: "cover", height: "100vh" }}
//             className="d-block w-100 img-fluid"
//             src="https://ngkutahyaseramik.com.tr/uploads/Categories/fusion/FUSION_120X240_MEKAN_REVIZE_1__w637_h343_op.jpg"
//             alt="veka mimarlık dekorasyon 2.resim"
//           />
//           <Carousel.Caption>
//             <h3>VEKA DEKORASYON</h3>
//             <p>Hos Geldiniz.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             style={{ objectFit: "cover", height: "100vh" }}
//             className="d-block w-100 img-fluid"
//             src="https://ngkutahyaseramik.com.tr/uploads/Categories/amazonit/AMAZONIT_120X240_MEKAN_w637_h343_op.jpg"
//             alt="veka mimarlık dekorasyon 3.resim"
//           />
//           <Carousel.Caption>
//             <h3>VEKA DEKORASYON</h3>
//             <p>Hos Geldiniz.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             style={{ objectFit: "cover", height: "100vh" }}
//             className="d-block w-100 img-fluid"
//             src="https://ngkutahyaseramik.com.tr/uploads/Categories/garden/GARDEN_120X240_MEKAN_w637_h343_op.jpg"
//             alt="veka mimarlık dekorasyon 4.resim"
//           />
//           <Carousel.Caption>
//             <h3>VEKA DEKORASYON</h3>
//             <p>Hos Geldiniz.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             style={{ objectFit: "cover", height: "100vh" }}
//             className="d-block w-100 img-fluid"
//             src="https://ngkutahyaseramik.com.tr/uploads/Categories/tosca/TOSCA_120X240_MEKAN_w637_h343_op.jpg"
//             alt="veka mimarlık dekorasyon 5.resim"
//           />
//           <Carousel.Caption>
//             <h3>VEKA DEKORASYON</h3>
//             <p>Hos Geldiniz.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//       <Hakimizda />
//       <Markalar />
//       <Galeri />
//     </div>
//   );
// };

// export default Anasayfa;
