import React from "react";
import Card from "react-bootstrap/Card";
import artemisimg from "../utils/img/artemis-img.jpg";
import "./YardimciUrunler.css";
import { Link } from "react-router-dom";

const YardimciUrunler = () => {
  return (
    <div className="container-yardimciurunler">
        
      <Card className="container-duskabini-card">
      
        <Link to={"https://www.sukar.com.tr/index.html"} target="_blank">
          {" "}
          <Card.Img variant="top img-fluid "  src="https://www.sukar.com.tr/Uploads/GenelResim/b_line-1-dus-suzgeci-29721.jpg" />
        </Link>

        <Card.Img
          variant="top bg-white w-100"
          src="	https://www.sukar.com.tr/Uploads/GenelResim/logo-64657.png"
        ></Card.Img>
      </Card>
    </div>
  );
};

export default YardimciUrunler;