import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="bg-dark overflow-hidden text-white w-100 pt-5 pb-4">
      <div className="Container  text-md-left ">
        <div className="row  text-md-left ">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              veka mimarlık dekorasyon ltd şti
            </h5>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Ürünler
            </h5>
            <Link to={"/seramik"} style={{ textDecoration: "none" }}>
              <p className="text-white faydalilinkler">Seramik</p>
            </Link>
            <Link to={'/duvarkagidi'} style={{ textDecoration: "none" }}>
              <p className="text-white faydalilinkler">Duvar Kağıdı</p>
            </Link>
            <Link to={'/vitrifiye'} style={{ textDecoration: "none" }}>
              <p className="text-white faydalilinkler">Vitrifiye</p>
            </Link>
            <Link to={'/seramik'} style={{ textDecoration: "none" }}>
              <p className="text-white">Dekorasyon</p>
            </Link>
          </div>
          <div className=" col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              faydali linkler
            </h5>
            <Link
              to={"https://ngkutahyaseramik.com.tr/"}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p className=" text-white faydalilinkler">NG Kütahya Seramik</p>
            </Link>
            <Link
              to={"https://www.creavit.com.tr/"}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p className=" text-white faydalilinkler">Creavit</p>
            </Link>
            <Link
            to={"https://www.yasham.com.tr/"}
            target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p className=" text-white faydalilinkler">Yasham Duvar Kağıtları</p>
            </Link>
        
          </div>
          <div className=" col-md-4 col-lg-3 col-xl-3 mx-auto d-block text-left mt-3  ">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              İletişim
            </h5>
            <Link
              to={"/contact"}
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <p className="location">
                <i>
                 <MdLocationOn />
                </i>{" "}
                Fırat Mah. Yeni Stad Yolu Üzeri Fırat Bulvarı No119/EB
                Kayapınar/Diyarbakır
              </p>
            </Link>
            <p>
              <i className="mr-3">
              <FaPhone />
              </i>{" "}
              +905326504865 && +905436171021
            </p>
            <p>
              <i className="mr-3">
               <IoIosMail />
              </i>{" "}
              vekamimarlikdekorasyon@gmail.com
            </p>
           <Link to={'https://www.instagram.com/vekadekorasyonmimarlik/'} target="_blank"  className="faydalilinkler text-white"
              style={{ textDecoration: "none" }}> <p>
              <i className="mr-3">
               <FaInstagramSquare />
              </i>{" "}
              @vekadekorasyonmimarlik
            </p></Link>
          </div>
        </div>
      </div>
      <div className="text-center"><small>Designed By Mehmet Karakas</small></div>
    </footer>
  );
};

export default Footer;
