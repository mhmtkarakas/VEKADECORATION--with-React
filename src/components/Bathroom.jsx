import React from 'react'
import "./Bathroom.css"
import { useNavigate } from 'react-router-dom';

import bathroom from ".././utils/img/bathroom.jpg";

const Bathroom = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/iletisim'); // İletişim sayfasına yönlendirir
  };
  return (
    <div className='bathroom '  data-aos="fade-up">
        <img src={bathroom} alt="bathroom" />
        <button onClick={handleNavigation}>İletişime Geç</button>
    </div>
  )
}

export default Bathroom