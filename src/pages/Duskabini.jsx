import React from "react";
import Card from "react-bootstrap/Card";
import artemisimg from "../utils/img/artemis-img.jpg";
import "./Duskabini.css";
import { Link } from "react-router-dom";

const Duskabini = () => {
  return (
    <div className="container-duskabini">
      <Card className="container-duskabini-card">
        <Link to={"https://www.artemis.com.tr/"} target="_blank">
          {" "}
          <Card.Img variant="top img-fluid" src={artemisimg} />
        </Link>

        <Card.Img
          variant="top bg-white w-100"
          src="https://www.artemis.com.tr/images/logo.png"
        ></Card.Img>
      </Card>
    </div>
  );
};

export default Duskabini;
