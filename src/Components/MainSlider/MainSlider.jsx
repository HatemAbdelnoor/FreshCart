import React from "react";
import  "./MainSlider.module.css";
import Carousel from 'react-bootstrap/Carousel';
import skiderimg1 from "./slider-image-1.jpeg"
import skiderimg2 from "./slider-image-2.jpeg"
import skiderimg3 from "./slider-image-3.jpeg"

function UncontrolledExample() {
  
  return <> 
  <div className="  container-fluid w-auto " >
    <div className="row col-12 d-flex mt-3 ">
    <Carousel>
      <Carousel.Item>
        <img
          className=""
          height={500}
          src={skiderimg1}
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          height={500}

          src={skiderimg2}
          alt="Second slide"
        />

    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          height={500}

          src={skiderimg3}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </>

}   
  

export default UncontrolledExample;