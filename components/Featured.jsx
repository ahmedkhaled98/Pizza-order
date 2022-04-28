import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { Carousel } from 'react-bootstrap';
import { useState ,useRef } from "react";

const Featured = () => {
  let controls =false;
  const ref = useRef(controls);
    
  return (
    <div className={styles.container}>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className='container px-5'>
  <div className='row'>
    <div className='col-lg-6 my-auto'>
    <img className="w-75" src="/img/dvman.png" alt="First slide" style={{'marginLeft':'25%'}}/>
    </div>
    <div className='col-lg-6 my-auto'>
      <p>
      <h1>FAST DEILVERY</h1>
      <p>We reach you where you are in few minutes</p> 
      </p>
    </div>
  </div>
</div>
    </div>
    <div class="carousel-item">
    <div className="container px-5">
  <div className="row mt-3">
    <div className="col-lg-6 my-auto text-center">
   
      <h1>MAKE YOUR ORDER EASILY</h1>
      <p>Place your your order with few clicks</p> 
     
    </div>
    <div className="col-lg-6">
    <img className="w-50" src="/img/order.png" alt="First slide" style={{'marginLeft':'25%'}}/>
    </div>
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <img className="d-block w-75 ml-5" src="/img/arrowl.png" alt="First slide" />
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <img className="d-block w-75 ml-5" src="/img/arrowr.png" alt="First slide" />
    <span class="visually-hidden">Next</span>
  </button>
</div>


</div>
  );
};

export default Featured;


