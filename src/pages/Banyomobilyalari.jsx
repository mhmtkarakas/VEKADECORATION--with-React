import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Banyomobilyalari.css";
import orka from "../utils/img/orkapage.jpg";
import belinza from "../utils/img/belinzapage.jpg";
import { Link } from "react-router-dom";

const Ankastre = () => {
  return (
    <div className="container-banyomobilyalari">
      <CardGroup >
        <Card className="custom-card">
          <Link to={"https://www.orkabanyo.com/tr"} target="_blank">
            {" "}
            <Card.Img variant="top img-fluid" src={orka} />{" "}
          </Link>

          <Card.Img className="card-banyoimg-orka"
            variant="top bg-white img-fluid"
            style={{ width: "200px", height: "70px" }}
            src="https://www.orkabanyo.com/uploads/2021/06/logo-4.svg"
          ></Card.Img>
        </Card>
        <Card className="custom-card">
          <Link to={"https://belinza.com/tr"} target="_blank">
            <Card.Img variant="top img-fluid" src={belinza} />
          </Link>

          <Card.Img className="card-banyoimg-belinza"
            variant="top bg-dark  img-fluid"
            style={{ width: "300px", height: "70px" }}
            src="https://belinza.com/assets/images/logo.png"
          ></Card.Img>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Ankastre;
