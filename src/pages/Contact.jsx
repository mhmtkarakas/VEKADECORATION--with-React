import React from "react";
import "./Contact.css";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container-contact">
      <div className="contact-in">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1573.3274867104394!2d40.136060538760766!3d37.93849010836879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDU2JzE4LjYiTiA0MMKwMDgnMTQuNSJF!5e0!3m2!1str!2str!4v1704219476267!5m2!1str!2str"
            width="100%"
            height="auto"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-form">
          <h1>Bizimle Iletisime Gecin</h1>

          <div className="contact-form-links">
            <ul>
              <li>
                <MdLocationOn /> Firat Mah. Yeni Stad Yolu Uzeri Firat Bulvari
                No119/EB Kayapinar/Diyarbakir
              </li>
              <li>
                {" "}
                <FaPhone /> +905326504865 && +905436171021
              </li>
              <li>
                <IoIosMail /> vekamimarlikdekorasyon@gmail.com
              </li>
              <Link
                to={"https://www.instagram.com/vekadekorasyon/"}
                target="_blank"
                className="text-dark text-decoration-none"
              >
                {" "}
                <li>
                  <FaInstagramSquare /> @vekadekorasyon{" "}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
