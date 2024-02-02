import React from "react";

import { Link } from "react-router-dom";
import Headerimage from "../utils/img/discephe.jpg";

import "./Hakimizda.css";

const Hakimizda = () => {
  return (
    <div className="container  my-5">
      <div className="row  hakkimizda">
        <div className="col-lg-6 col-sm-6 d-flex justify-content-center  d-lg-flex">
          <img
            src={Headerimage}
            className="img-fluid w-100 shadow rounded"
            alt="veka mimarlık dekorasyon işyeri resmi"
          />
        </div>
        <div className="col-lg-6 col-sm-6  d-flex flex-column align-items-center justify-content-center">
          <h2 className="fs-1 mb-5 text-uppercase fw-bold">Hakkimizda</h2>
          <p className="text-hakkimizda text-center">
            Firmamız, 2010 yılında Diyarbakır'da seramik sektöründe faaliyete
            geçerek, ışıltılı bir serüvene başladı. Yıllar içinde, seramik,
            granit, vitrifiye, duvar kağıtları ve banyo dolapları gibi geniş bir
            ürün yelpazesiyle müşterilerine çeşitli estetik çözümler sundu.
            Müşteri memnuniyetini temel ilke edinen firmamız, konut projelerine
            sağladığı kaliteli ürünlerle sektörde güvenilir bir iş ortağı haline
            geldi.
          </p>
          <p className="mb-5 text-hakkimizda text-center">
            Gelişen inşaat sektörüne paralel olarak, iş ortaklıkları ve
            projelerdeki başarılarıyla ön plana çıkan firmamız, Diyarbakır'ın
            yanı sıra çevre illerde de değerli müşterilerine hizmet sunmaktadır.
            Bu kısa özet, firmamızın köklü geçmişini, sunduğu geniş ürün
            yelpazesi ile müşterilere sağladığı çeşitli avantajları öne
            çıkarmaktadır.
          </p>
          <Link to="/about">
            <button type="button" className="btn btn-outline-dark btn-lg">
              Hakkımızda Daha Fazlasi
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hakimizda;
