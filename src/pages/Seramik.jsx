import React from "react";
import Card from "react-bootstrap/Card";

import kutahyaimg4 from "../utils/img/kutahyaimg4.jpg";
import "./Seramik.css";
import { Link } from 'react-router-dom';

const Seramik = () => {

  return (
    <div className="container-seramik">
      <Card className="container-seramik-card">
     <Link to={"https://ngkutahyaseramik.com.tr/"} target="_blank">  <Card.Img variant="top img-fluid" src={kutahyaimg4} /></Link> 
        <Card.Body>
          <Card.Text>NG KUTAHYA SERAMIK</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Seramik;
