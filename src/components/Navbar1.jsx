import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar1.css';

import { FcAbout } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <div>
        <Navbar expand="lg" className='fixed-top navbar-dark bg-dark   shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className=' navbar-brand text-light fw-semibold'>
              VEKA DEKORASYON
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase d-flex align-items-center '> Anasayfa <FaHome className='mx-1'/></Nav.Link>
            
              <NavDropdown  title="URUNLER" id="basic-nav-dropdown" className='text-uppercase text-light'>
              <NavDropdown.Item href="seramik"  >Seramik</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                duvar kagidi
              </NavDropdown.Item>
              <NavDropdown.Item href="/vitrifiye">vitrifiye</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/banyomobilyalari">
                Banyo Mobilyalari
              </NavDropdown.Item>
            </NavDropdown>
            
              <Nav.Link href='/about' className='text-uppercase d-flex align-items-center '>Hakkimizda <FcAbout className='mx-1'/></Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase d-flex align-items-center '>Iletisim <MdContactPhone className='mx-1'/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1
