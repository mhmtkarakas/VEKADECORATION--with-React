import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Vitrifiye.css";
import creavitvitrifiye from "../utils/img/creavit-vitrifiye.jpg";
import rocavitrifiye from "../utils/img/roca-vitrifiye.jpg";
import rocapage from "../utils/img/rocaimg.png";
import grohevitrifiye from "../utils/img/grohe-vitrifiye.jpg";
import grohepage from "../utils/img/grohepage.png";
import pentavitrifiye from "../utils/img/penta-vitrifiye.jpg";
import pentapage from "../utils/img/pentaimg.png";
import evabanyovitrifiye from "../utils/img/evebanyo-vitrifiye.jpg";
import evabanyopage from "../utils/img/evaimg.jpg";
import nskvitrifiye from "../utils/img/nsk-vitrifiye.jpg";
import nskpage from "../utils/img/nskimg.png";
import { Link } from "react-router-dom";

const Vitrifiye = () => {
  return (
    <div className="container-vitrifiye">
      <CardGroup>
        <Card className="custom-card">
          <Link to={"https://www.roca.com.tr/"} target="_blank">
            {" "}
            <Card.Img variant="top img-fluid " src={rocavitrifiye} />{" "}
          </Link>

          <Card.Img
            variant="top bg-white w-100 img-fluid"
            style={{ width: "200px", height: "70px" }}
            src={rocapage}
          ></Card.Img>
        </Card>
        <Card className="custom-card">
          <Link to={"https://www.creavit.com.tr/"} target="_blank">
            <Card.Img variant="top img-fluid " src={creavitvitrifiye} />
          </Link>
          <Card.Img
            variant="top bg-white w-100 p-1 img-fluid"
            style={{ width: "200px", height: "70px" }}
            src='	https://creavit.com.tr/media/dycpwt4n/creavit-blacklogo.svg'
          ></Card.Img>
        </Card>
        <Card className="custom-card">
          <Link to={"https://www.grohe.com.tr/tr_tr/"} target="_blank">
            {" "}
            <Card.Img variant="top img-fluid" src={grohevitrifiye} />
          </Link>
          <Card.Img
            variant="top bg-white w-100 p-1 img-fluid"
            style={{ width: "200px", height: "70px" }}
            src={grohepage}
          ></Card.Img>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="custom-card">
          <Link to={"https://pentabanyokeyfi.com/tr"} target="_blank">
            {" "}
            <Card.Img variant="top img-fluid" src={pentavitrifiye} />
          </Link>
          <Card.Img
            variant="top bg-white w-100 p-2 img-fluid"
            style={{ width: "200px", height: "70px" }}
            src={pentapage}
          ></Card.Img>
        </Card>
        <Card className="custom-card">
          <Link to={"https://www.evabanyo.com.tr/"} target="_blank">
            {" "}
            <Card.Img variant="top img-fluid" src={evabanyovitrifiye} />
          </Link>
          <Card.Img
            variant="top bg-white w-100 p-2 img-fluid"
            style={{ width: "200px", height: "70px" }}
            src={evabanyopage}
          ></Card.Img>
        </Card>
        <Card className="custom-card">
          <Link to={"https://www.nskbathandkitchen.com/tr/"} target="_blank">
            <Card.Img variant="top img-fluid" src={nskvitrifiye} />
          </Link>
          <Card.Img
            variant="top bg-white w-100 p-2 img-fluid"
            style={{ width: "200px", height: "70px" }}
            src={nskpage}
          ></Card.Img>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Vitrifiye;
