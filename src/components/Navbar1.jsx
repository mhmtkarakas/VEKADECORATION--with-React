import React from "react";
import "./Navbar1.css";
import { Container, Nav, Navbar } from "react-bootstrap/";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="main-container">
      <Navbar expand="lg" className="fixed-top">
        <Container fluid className="navClass">
          {/* Logo - Solda */}
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              VEKA DEKORASYON
            </Link>
          </Navbar.Brand>

          {/* Özelleştirilmiş Hamburger Menu */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler custom-toggler"
          >
            <div className="custom-toggler-icon">
              <span className="toggler-line"></span>
              <span className="toggler-line"></span>
              <span className="toggler-line"></span>
            </div>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            {/* Menü - Sağda */}
            <Nav className="justify-content-end w-100 nav-links">
              <Nav.Link href="/" className="nav-link text-uppercase mx-2">
                <span>Anasayfa</span>
              </Nav.Link>

              <Nav.Link href="/kurumsal" className="nav-link text-uppercase mx-2">
                <span>KURUMSAL</span>
              </Nav.Link>

              <Nav.Link href="/isortaklarimiz" className="nav-link text-uppercase mx-2">
                <span>İŞ ORTAKLARIMIZ</span>
              </Nav.Link>

              <Nav.Link href="/referanslar" className="nav-link text-uppercase mx-2">
                <span>REFERANSLARIMIZ</span>
              </Nav.Link>

              <Nav.Link href="/iletisim" className="nav-link text-uppercase mx-2">
                <span>İLETİŞİM</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;