import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPhone } from "react-icons/fa";
import "./Navbar1.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="container">
      <Navbar expand="lg" className="fixed-top navbar-dark bg-dark  shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/" className=" navbar-brand text-light fw-semibold">
              VEKA DEKORASYON
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link
                href="/"
                className="active text-uppercase d-flex align-items-center "
              >
                {" "}
                Anasayfa <FaHome className="mx-1" />
              </Nav.Link>

              <NavDropdown
                title="ÜRÜNLER"
                id="basic-nav-dropdown"
                className="text-uppercase text-light"
              >
                <NavDropdown.Item href="seramik">Seramik</NavDropdown.Item>
                <NavDropdown.Item href="duvarkagidi">
                  duvar kagidi
                </NavDropdown.Item>
                <NavDropdown.Item href="/vitrifiye">vitrifiye</NavDropdown.Item>
                <NavDropdown.Item href="/duskabini">
                  dus kabini
                </NavDropdown.Item>
                <NavDropdown.Item href="/ankastre">
                  Ankastre&&Evye
                </NavDropdown.Item>
                <NavDropdown.Item href="/banyomobilyalari">
                  Banyo Mobilyalari
                </NavDropdown.Item>
                <NavDropdown.Item href="/yapikimyasallari">
                  Yapi Kimyasallari
                </NavDropdown.Item>
                <NavDropdown.Item href="/referanslar">
                  Referanslar
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="/about"
                className="text-uppercase d-flex align-items-center "
              >
                Hakkimizda{" "}
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="text-uppercase d-flex align-items-center "
              >
                Iletisim <FaPhone className="mx-1" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
