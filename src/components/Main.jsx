import React from "react";
import Card from "./Card";
import { FaCheckCircle, FaUsers , FaBox, FaBolt, FaPaintBrush, FaRulerCombined } from "react-icons/fa";
import "./Main.css";

const Main = () => {
  const cardData = [
    {
        icon: <FaCheckCircle />, 
        title: "Şık ve Kaliteli Ürünler",
        description: "Her zevke uygun, dayanıklı ve estetik seramik çözümlerimizle tanışın.",
      },
      {
        icon: <FaUsers />,
        title: "Alanında Uzman Kadro",
        description: "Tecrübeli ekibimizle projelerinize profesyonel dokunuşlar katıyoruz.",
      },
    {
      icon: <FaBox />,
      title: "Güvenli Teslimat",
      description: "Ürünlerinizi güvenli ve zamanında adresinize teslim ediyoruz.",
    },
    {
      icon: <FaBolt />,
      title: "Hızlı Destek",
      description: "Satış sonrası her türlü sorun ve destek talebinizde yanınızdayız.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Kişiye Özel Çözümler",
      description: "İhtiyaçlarınıza özel seramik tasarımlar ve üretimler sunuyoruz.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Ölçü ve Planlama Hizmetleri",
      description: "Ürünlerin doğru ölçülerde temin edilmesi için profesyonel ölçüm. ",
    },
  ];

  return (
    <div className="m-container">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card icon={card.icon} title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
