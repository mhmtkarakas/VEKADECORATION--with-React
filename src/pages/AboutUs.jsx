
import Hakkimizda1 from "../utils/img/hakkimizdaresim1.jpg";
import Hakkimizda2 from "../utils/img/hakkimizdaresim2.jpg";


import React from "react";
import "./AboutUs.css";


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">Hakkımızda</h1>
      <p className="about-us-intro">
        Firmamız, 2010 yılında Diyarbakır şehrinde seramik sektöründe faaliyet
        göstermek üzere kurulmuştur. Başlangıcımızdan itibaren kalite,
        güvenilirlik ve müşteri memnuniyetini temel ilke edinerek, geniş bir
        ürün yelpazesi sunmaktayız.
      </p>

      <div className="about-us-content">
        <img src={Hakkimizda1} alt="İş yeri sağdan görünüm" className="about-image" />
        <div className="about-text">
          <h2>Ürün ve Hizmetlerimiz</h2>
          <p>
            Firmamız, seramik alanında uzmanlaşmış olup, başta seramik ve granit
            olmak üzere vitrifiye ürünleri, duvar kağıtları, banyo dolapları,
            duşakabinler ve benzeri ürünlerle müşterilerimize geniş bir ürün
            yelpazesi sunmaktadır. Toptan ve perakende satışlarımızla hem
            bireysel müşterilere hem de konut projelerine hizmet veriyoruz.
          </p>

          <h2>Projeler ve İş Ortaklıkları</h2>
          <p>
            Firmamız, konut projelerine seramik ve granit ürünleri tedariki
            konusunda uzmanlaşmıştır. İnşaat sektöründeki profesyonel iş
            ortaklarımıza kaliteli ürünlerle destek vererek, estetik ve dayanıklı
            çözümler sunmaktayız.
          </p>
        </div>
      </div>

      <div className="about-us-content">
        <div className="about-text">
          <h2>Müşteri Memnuniyeti</h2>
          <p>
            Müşteri memnuniyeti, işimizin temel taşıdır. Her bir müşterimizin
            beklentilerini anlamak, ihtiyaçlarına uygun çözümler sunmak ve
            güvenilir hizmetimizle kalıcı bir müşteri memnuniyeti oluşturmak en
            önemli hedeflerimizdendir.
          </p>

          <h2>Şehrimize Hizmet Veriyoruz</h2>
          <p>
            Diyarbakır şehrine kök salmış ve bu güzel şehre değer katmaktan gurur
            duyuyoruz. Sektördeki tecrübemiz ve uzman kadromuzla, Diyarbakır ve
            çevresindeki müşterilerimize en iyi hizmeti sunmayı amaçlıyoruz.
            Firmamızın serüvenine katkı sağlayan tüm müşterilerimize, iş
            ortaklarımıza ve çalışanlarımıza teşekkür ederiz.
          </p>
        </div>
        <img src={Hakkimizda2} alt="İş yeri soldan görünüm" className="about-image" />
      </div>

      <p className="about-us-closing">
        Sizlere daha uzun yıllar boyunca kaliteli ürün ve hizmet sunmaktan
        mutluluk duyacağımızı belirtir, bizi tercih ettiğiniz için teşekkür
        ederiz.
      </p>
    </div>
  );
};

export default AboutUs;
