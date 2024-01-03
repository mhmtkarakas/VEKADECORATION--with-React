import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Ankastre.css";
import franke from "../utils/img/franke.jpg";
import blanco from "../utils/img/blanco-ankastre.jpg";
import realstone from "../utils/img/realstone-img.jpg";

import { Link } from "react-router-dom";

const Ankastre = () => {
  return (
    <div className="container-vitrifiye">
      <CardGroup>
        <Card className="custom-card">
       <Link to={"https://www.franke.com/tr/tr/home.html"} target="_blank">  <Card.Img variant="top " src={franke} /> </Link> 

          <Card.Body className="card-body-franke">
            <Card.Text className="card-text ">FRANKE</Card.Text>
          </Card.Body>
        </Card>
        <Card className="custom-card">
         <Link to={"https://www.peramutfak.com.tr/blanco/"} target="_blank"><Card.Img variant="top " src={blanco} /></Link> 

          <Card.Body className="card-body-blanco">
            <Card.Text className="card-text">BLANCO</Card.Text>
          </Card.Body>
        </Card >
        <Card className="custom-card">
        <Link to={"https://realstone.com.tr/"} target="_blank"> <Card.Img variant="top" src={realstone } /></Link> 
          <Card.Body className="card-body-realstone">
            <Card.Text className="card-text">REALSTONE EVYE</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
     
    </div>
  );
};

export default Ankastre ;
