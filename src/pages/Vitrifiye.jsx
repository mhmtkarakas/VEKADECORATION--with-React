import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Vitrifiye.css";
import creavitvitrifiye from "../utils/img/creavit-vitrifiye.jpg";
import rocavitrifiye from "../utils/img/roca-vitrifiye.jpg";
import grohevitrifiye from "../utils/img/grohe-vitrifiye.jpg";
import pentavitrifiye from "../utils/img/penta-vitrifiye.jpg";
import evabanyovitrifiye from "../utils/img/evebanyo-vitrifiye.jpg";
import nskvitrifiye from "../utils/img/nsk-vitrifiye.jpg";
import { Link } from "react-router-dom";

const Vitrifiye = () => {
  return (
    <div className="container-vitrifiye">
      <CardGroup>
        <Card className="custom-card">
       <Link to={"https://www.roca.com.tr/"} target="_blank">  <Card.Img variant="top " src={rocavitrifiye} /> </Link> 

          <Card.Body className="card-body">
            <Card.Text className="card-text">ROCA</Card.Text>
          </Card.Body>
        </Card>
        <Card className="custom-card">
         <Link to={"https://www.creavit.com.tr/"} target="_blank"><Card.Img variant="top " src={creavitvitrifiye} /></Link> 

          <Card.Body className="card-body">
            <Card.Text className="card-text">CREAVIT</Card.Text>
          </Card.Body>
        </Card>
        <Card className="custom-card">
        <Link to={"https://www.grohe.com.tr/tr_tr/"} target="_blank"> <Card.Img variant="top" src={grohevitrifiye} /></Link> 
          <Card.Body className="card-body">
            <Card.Text className="card-text">GROHE</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="custom-card">
        <Link to={"https://pentabanyokeyfi.com/tr"} target="_blank"> <Card.Img variant="top" src={pentavitrifiye} /></Link> 
          <Card.Body className="card-body">
            <Card.Text className="card-text">PENTA</Card.Text>
          </Card.Body>
        </Card>
        <Card className="custom-card">
        <Link to={"https://www.evabanyo.com.tr/"} target="_blank">  <Card.Img variant="top" src={evabanyovitrifiye} /></Link> 
          <Card.Body className="card-body">
          <Card.Text className="card-text">EVA BANYO && KITCHEN</Card.Text>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Link to={"https://www.nskbathandkitchen.com/tr/"} target="_blank">
            <Card.Img variant="top" src={nskvitrifiye} />
          </Link>
          <Card.Body className="card-body">
            <Card.Text className="card-text">NSK BANYO && KITCHEN</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Vitrifiye;
