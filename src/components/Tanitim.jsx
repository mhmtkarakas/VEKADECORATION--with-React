import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Tanitim.css'


const Tanitim = () => {
    

  return (
    <Container>
    <Row className=' '>
      <Col><img className='w-100' src="https://www.liamimarlik.com/wp-content/uploads/2019/07/wctasar%C4%B1m%C4%B1.jpg" alt="" /></Col>
      <Col ><img className='w-100' src="https://www.dkyinsaat.com//uploads/images/common/files/kapak(1).jpeg" alt="" /> </Col>
      <Col><img className='w-100' src="https://i20.haber7.net/resize/1300x731//haber/haber7/photos/2022/15/kucuk_banyo_dekorasyonu_nasil_yapilir_banyolari_genis_gostermenin_yollari_1649631192_798.jpg" alt="" /></Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col xs={5}>2 of 3 (wider)</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
  )
}

export default Tanitim
