import React from "react";

import { Link } from "react-router-dom";
import Headerimage from "../utils/img/header-img.jpeg";

import "./Hakimizda.css";

const Hakimizda = () => {
  return (
    <div className="container my-5">
      <div className="row hakkimizda">
        <div className="col-lg-6 d-flex justify-content-center d-lg-flex">
          <img
            src={Headerimage}
            className="img-fluid w-100 shadow rounded"
            alt="about img"
          />
        </div>
        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
          <h2 className="fs-1 mb-5 text-uppercase fw-bold">Hakkimizda</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            voluptate aut dolore ullam quasi numquam quod molestias cum officiis
            perspiciatis?
          </p>
          <p className="mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni
            animi tenetur eaque vel accusamus placeat quaerat ad. Similique
            quaerat qui doloribus assumenda deserunt tenetur quas suscipit
            officiis quod sequi?
          </p>
          <Link to="/about">
            <button type="button" className="btn btn-outline-dark btn-lg">
              Hakkimizda Daha Fazlasi
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hakimizda;
