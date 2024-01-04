import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Ankastre.css";
import franke from "../utils/img/franke.jpg";
import frankeimg from "../utils/img/frankeimg.png";
import blanco from "../utils/img/blanco-ankastre.jpg";
import blancopage from "../utils/img/blancoimg.png";
import realstone from "../utils/img/realstone-img.jpg";
import realstonepage from "../utils/img/realstoneimg.png";
import { Link } from "react-router-dom";

const Ankastre = () => {
  return (
    <div className="container-ankastre">
      <CardGroup>
        <Card className="custom-card">
          <Link to={"https://www.franke.com/tr/tr/home.html"} target="_blank">
            {" "}
            <Card.Img variant="top img-fluid" src={franke} />{" "}
          </Link>

          <Card.Img
            variant="top bg-white w-100 img-fluid"
            style={{ width: "200px", height: "70px" }}
            src={frankeimg}
          ></Card.Img>
        </Card>
        <Card className="custom-card">
          <Link to={"https://www.peramutfak.com.tr/blanco/"} target="_blank">
            <Card.Img variant="top img-fluid" src={blanco} />
          </Link>

          <Card.Img
            variant="top bg-white w-100 img-fluid"
            style={{ width: "200px", height: "70px" }}
            src={blancopage}
          ></Card.Img>
        </Card>
        <Card className="custom-card">
          <Link to={"https://realstone.com.tr/"} target="_blank">
            {" "}
            <Card.Img variant="top img-fluid" src={realstone} />
          </Link>
          <Card.Img
            variant="top bg-success w-100 img-fluid"
            style={{ width: "200px", height: "70px" }}
            src={realstonepage}
          ></Card.Img>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Ankastre;
