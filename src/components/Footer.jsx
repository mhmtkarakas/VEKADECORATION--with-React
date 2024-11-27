import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import logo from '.././utils/img/logo.jpeg'
import "./Footer.css"; // CSS dosyasını bağlayın

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Alanı */}
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <h2>Veka Dekorasyon Mimarlık</h2>
        </div>

        {/* Sosyal Medya Alanı */}
        <div className="footer-social-media">
          <h3>Bizi Takip Edin</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/vekadekorasyonmimarlik/" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.facebook.com/vekadekorasyonmimarlik/" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>

        {/* İletişim Bilgileri */}
        <div className="footer-contact">
          <h3>İletişim</h3>
          <p>Telefon: 0532 650 48 65</p>
          <p>Telefon: 0543 617 10 21</p>
          <p>Frat Mah. Yeni Stad Yolu Üzeri <br/> No:119/EB Kayapınar/Diyarbakır</p>
        </div>
      </div>

      {/* Alt Alan */}
      <div className="footer-bottom">
        <p>© 2024 Created by Mehmet Karakaş | 05423317650</p>
      </div>
    </footer>
  );
};

export default Footer;
