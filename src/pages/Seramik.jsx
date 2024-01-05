import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import kutahyaimg4 from "../utils/img/kutahyaimg4.jpg";
import kutahyaimg from "../utils/img/kutahyaimg.jpg";
import "./Seramik.css";
import { Link } from 'react-router-dom';

const Seramik = () => {

  return (
    <div className="container-seramik">
    <CardGroup >
      <Card className="custom-card">
        <Link to={"https://www.kyk.com.tr/"} target="_blank">
          {" "}
          <Card.Img variant="top img-fluid" src={kutahyaimg4} />{" "}
        </Link>

        <Card.Img className="card-yasham"
          variant="top bg-white img-fluid"
          style={{ width: "300px", height: "80px" }}
          src={kutahyaimg}
        ></Card.Img>
      </Card> 
   
     
    
    
    
    </CardGroup>
  </div>
  );
};

export default Seramik;
