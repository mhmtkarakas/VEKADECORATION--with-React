import React from "react";
import Hakkimizda1 from "../utils/img/hakkimizdaresim1.jpg";
import Hakkimizda2 from "../utils/img/hakkimizdaresim2.jpg";
import "./Hakkimizda.css";

const Hakkimizda = () => {
  return (
    
    <div className="container-main">
      <div className="img-container">
        <div className="img-magaza">
          <img  src={Hakkimizda1} alt="" />
        </div>
        <div className="img-store">
        <img  src={Hakkimizda2} alt="" />
        </div>
      </div>
      <div className="about-container">
        <h2>HAKKIMIZDA</h2>
        <p>
          Firmamız, 2010 yılında Diyarbakır şehrinde seramik sektöründe faaliyet
          göstermek üzere kurulmuştur. Başlangıcımızdan itibaren kalite,
          güvenilirlik ve müşteri memnuniyetini temel ilke edinerek, geniş bir
          ürün yelpazesi sunmaktayız.
        </p>
        <h3>Ürün ve Hizmetlerimiz</h3>
        <p>
          Firmamız, seramik alanında uzmanlaşmış olup, başta seramik ve granit
          olmak üzere vitrifiye ürünleri, duvar kağıtları, banyo dolapları,
          duşakabinler ve benzeri ürünlerle müşterilerimize geniş bir ürün
          yelpazesi sunmaktadır. Toptan ve perakende satışlarımızla hem bireysel
          müşterilere hem de konut projelerine hizmet veriyoruz.
        </p>
        <h3>Projeler ve İş Ortaklıkları</h3>
        <p>
          Firmamız, konut projelerine seramik ve granit ürünleri tedariki
          konusunda uzmanlaşmıştır. İnşaat sektöründeki profesyonel iş
          ortaklarımıza kaliteli ürünlerle destek vererek, estetik ve dayanıklı
          çözümler sunmaktayız.
        </p>
        <h3>Müşteri Memnuniyeti</h3>
        <p>
          Müşteri memnuniyeti, işimizin temel taşıdır. Her bir müşterimizin
          beklentilerini anlamak, ihtiyaçlarına uygun çözümler sunmak ve
          güvenilir hizmetimizle kalıcı bir müşteri memnuniyeti oluşturmak en
          önemli hedeflerimizdendir.
        </p>
        <h3>Şehrimize Hizmet Veriyoruz</h3>
        <p>
          Diyarbakır şehrine kök salmış ve bu güzel şehre değer katmaktan gurur
          duyuyoruz. Sektördeki tecrübemiz ve uzman kadromuzla, Diyarbakır ve
          çevresindeki müşterilerimize en iyi hizmeti sunmayı amaçlıyoruz.
          Firmamızın serüvenine katkı sağlayan tüm müşterilerimize, iş
          ortaklarımıza ve çalışanlarımıza teşekkür ederiz. Sizlere daha uzun
          yıllar boyunca kaliteli ürün ve hizmet sunmaktan mutluluk duyacağımızı
          belirtir, bizi tercih ettiğiniz için teşekkür ederiz.
        </p>
      </div>
      <div className="about-container-more">
        
      </div>
    </div>
  );
};

export default Hakkimizda;
