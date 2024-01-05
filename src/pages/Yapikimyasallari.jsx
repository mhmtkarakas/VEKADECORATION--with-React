import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Yapikimyasallari.css";
import kykpage from "../utils/img/kykpage.jpg";
import kyk from "../utils/img/kykpng.png";
import weberpage from "../utils/img/weberpage.jpg";
import webersvg from "../utils/img/webersvg.svg";

import { Link } from "react-router-dom";

const Yapikimyasallari = () => {
  return (
    <div className="container-kyk">
      <CardGroup >
        <Card className="custom-card">
          <Link to={"https://www.kyk.com.tr/"} target="_blank">
            {" "}
            <Card.Img variant="top img-fluid" src={kykpage} />{" "}
          </Link>

          <Card.Img className="card-yasham"
            variant="top bg-white img-fluid"
            style={{ width: "300px", height: "80px" }}
            src={kyk}
          ></Card.Img>
        </Card> 
        <Card className="custom-card">
          <Link to={"https://www.tr.weber/"} target="_blank">
            {" "}
            <Card.Img variant="top img-fluid" src={weberpage} />{" "}
          </Link>

          <Card.Img className="card-yasham"
            variant="top bg-white img-fluid"
            style={{ width: "300px", height: "80px" }}
            src={webersvg}
          ></Card.Img>
        </Card>
      
      
      </CardGroup>
    </div>
  );
};

export default Yapikimyasallari;

