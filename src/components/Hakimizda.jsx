import React from "react";
import { Link } from "react-router-dom";
import Headerimage from "../utils/img/discephe.jpg";
import "./Hakimizda.css";

const Hakimizda = () => {
  return (
    <div className="hakimizda-container">
      <div className="hakimizda-content">
        {/* Görsel Alanı */}
        <div className="hakimizda-image">
          <img
            src={Headerimage}
            className="img-fluid shadow rounded"
            alt="Veka Mimarlık Dekorasyon işyeri resmi"
          />
        </div>

        {/* Metin Alanı */}
        <div className="hakimizda-text">
          <h2 className="gradient-text">Hakkımızda</h2>
          <p>
            Firmamız, 2010 yılında Diyarbakır'da seramik sektöründe faaliyete
            geçerek, ışıltılı bir serüvene başladı. Yıllar içinde, seramik,
            granit, vitrifiye, duvar kağıtları ve banyo dolapları gibi geniş bir
            ürün yelpazesiyle müşterilerine çeşitli estetik çözümler sundu.
          </p>
          <p>
            Gelişen inşaat sektörüne paralel olarak, iş ortaklıkları ve
            projelerdeki başarılarıyla ön plana çıkan firmamız, Diyarbakır'ın
            yanı sıra çevre illerde de değerli müşterilerine hizmet sunmaktadır.
          </p>
          <Link
         to="/about" className="custom-link"
          >
            Hakkımızda Daha Fazlası
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hakimizda;
