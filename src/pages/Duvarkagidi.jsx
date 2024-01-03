import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Duvarkagidi.css";
import dukaimg from "../utils/img/dukaimg.png";
import { Link } from "react-router-dom";

const Duvarkagidi = () => {
  return (
    <div className="container-duvarkagidi">
      <Card style={{ width: "18rem", border: "0", marginTop: "15px" }}>
        <Card.Img
          variant="top mb-4"
          src="	https://www.yasham.com.tr/assets/image/logo.png"
        />
        <Card.Body>
          <Link to={"https://www.yasham.com.tr/"} target="_blank">
            {" "}
            <Button variant="dark w-100">Yasham Duvar Kagitlari</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", border: "0" }}>
        <Card.Img variant="top " src={dukaimg} />
        <Card.Body className="text-center ">
          <Link to={"https://www.dukaduvarkagidi.com/"} target="_blank">
            <Button variant="dark text-center w-100">
              Duka Duvar Kagitlari
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Duvarkagidi;
