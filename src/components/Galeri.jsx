import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import kutahyaimg1 from "../utils/img/kutahyaimg1.jpg";
import kutahyaimg2 from "../utils/img/kutahyaimg2.jpg";
import kutahyaimg3 from "../utils/img/kutahyaimg3.jpg";
import creavitimg from "../utils/img/creavitimg.jpg";
import rocaimg from "../utils/img/rocaimg.jpg";
import duvarkagidi from "../utils/img/duvarkagidi.jpg";
import artemisimg from "../utils/img/artemisimg.jpg";
import orkaimg from "../utils/img/orkaimg.jpg";
import blancoimg from "../utils/img/blancoimg.jpg";
import creavitimg1 from "../utils/img/creavitimg1.jpg";

import "./Galeri.css";

const Galeri = () => {
  return (
    <Container className="tanitimresimleri">
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">GALERI</h2>
      <Row className="my-3">
        <Col>
          <img className=" img-fluid" src={kutahyaimg1} alt="" />
        </Col>
        <Col>
          <img className=" img-fluid " src={kutahyaimg2} alt="" />
        </Col>
        <Col>
          <img className="img-fluid " src={kutahyaimg3} alt="" />
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <img className=" img-fluid" src={creavitimg} alt="" />
        </Col>
        <Col>
          <img className="  img-fluid" src={rocaimg} alt="" />
        </Col>
        <Col>
          <img className=" img-fluid " src={duvarkagidi} alt="" />
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <img className=" img-fluid" src={artemisimg} alt="" />
        </Col>
        <Col>
          
          <img className=" img-fluid" src={creavitimg1} alt="" />
        </Col>
        <Col>
          <img className=" img-fluid" src={blancoimg} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Galeri;
