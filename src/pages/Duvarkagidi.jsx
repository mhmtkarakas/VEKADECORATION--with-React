import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Duvarkagidi.css";
import yashampage from "../utils/img/yashampage.png";
import yasham from "../utils/img/yasamimg.png";
import dukapage from "../utils/img/dukapage.jpg";
import dukapng from "../utils/img/dukaimg.png";
import { Link } from "react-router-dom";

const Ankastre = () => {
  return (
    <div className="container-duvarkagidi">
      <CardGroup >
        <Card className="custom-card">
          <Link to={"https://www.yasham.com.tr/"} target="_blank">
            {" "}
            <Card.Img variant="top img-fluid" src={yashampage} />{" "}
          </Link>

          <Card.Img className="card-yasham"
            variant="top bg-white img-fluid"
            style={{ width: "300px", height: "70px" }}
            src={yasham}
          ></Card.Img>
        </Card>
        <Card className="custom-card">
          <Link to={"https://www.dukaduvarkagidi.com/"} target="_blank">
            <Card.Img variant="top img-fluid" src={dukapage} />
          </Link>

          <Card.Img className="card-duka"
            variant="top bg-white  img-fluid"
            style={{ width: "300px", height: "70px" }}
            src={dukapng}
          ></Card.Img>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Ankastre;

