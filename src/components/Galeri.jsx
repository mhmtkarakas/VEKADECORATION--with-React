import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import kutahyaimg1 from "../utils/img/kutahyaimg1.jpg";
import kutahyaimg2 from "../utils/img/kutahyaimg2.jpg";
import kutahyaimg3 from "../utils/img/kutahyaimg3.jpg";
import yashamduvarkagidi1 from "../utils/img/yashamduvarkagidi-1.jpg";
import yashamduvarkagidi2 from "../utils/img/yashamduvarkagidi-2.jpg";
import yashamduvarkagidi3 from "../utils/img/yashamduvarkagidi-3.jpg";
import artemisimg from "../utils/img/artemisimg.jpg";
import blancoimg from "../utils/img/blancoimg.jpg";
import creavitimg1 from "../utils/img/creavitimg1.jpg";

import "./Galeri.css";

const Galeri = () => {
  return (
    <Container className="tanitimresimleri">
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">GALERI</h2>
      <Row className="my-3 justify-content-center">
        <Col s={12} md={4}>
          <img  className="img-fluid"  src={kutahyaimg1} alt="veka mimarlık dekorasyon 6.resim" />
        </Col>
        <Col s={12} md={4}>
          <img x className="img-fluid"  src={kutahyaimg2} alt="veka mimarlık dekorasyon 7.resim" />
        </Col>
        <Col s={12} md={4}>
          <img className="img-fluid" src={kutahyaimg3} alt="veka mimarlık dekorasyon 8.resim" />
        </Col>
      </Row>
      <Row className="my-3   justify-content-center">
        <Col s={12} md={4}>
          <img  className="img-fluid" src={yashamduvarkagidi1} alt="veka mimarlık dekorasyon 9.resim" />
        </Col>
        <Col s={12} md={4}>
          <img  className="img-fluid" src={yashamduvarkagidi2} alt="veka mimarlık dekorasyon 10.resim" />
        </Col>
        <Col s={12} md={4}>
          <img  className="img-fluid"  src={yashamduvarkagidi3} alt="veka mimarlık dekorasyon 11.resim" />
        </Col>
      </Row>
      <Row className="my-3   justify-content-center">
        <Col s={12} md={4}>
          <img  className="img-fluid"  src={artemisimg} alt="veka mimarlık dekorasyon 12.resim" />
        </Col>
        <Col s={12} md={4}>
          
          <img  className="img-fluid"  src={creavitimg1} alt="veka mimarlık dekorasyon 13.resim" />
        </Col>
        <Col s={12} md={4}>
          <img className="img-fluid"  src={blancoimg} alt="veka mimarlık dekorasyon 14.resim" />
        </Col>
      </Row>
    </Container>
  );
};

export default Galeri;
