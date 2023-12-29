import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';


const Markalar = () => {
    const handleClick = () => {
        window.open("https://ngkutahyaseramik.com.tr/",'_blank') ;
      };
      
  return (

    <div className='container my-5'>
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center d-lg-flex">
     <Pagination>

     <Pagination.Item> <p onClick={handleClick} target="_blank">Kutahya Seramik</p>
   </Pagination.Item>
   
      <Pagination.Item>{11}</Pagination.Item>
     
      <Pagination.Item >{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item >{14}</Pagination.Item>

      <Pagination.Item>{20}</Pagination.Item>
    
    </Pagination>
    </div>
    </div>
    </div>
   
  )
}

export default Markalar
