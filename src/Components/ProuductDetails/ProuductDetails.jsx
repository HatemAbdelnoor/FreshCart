import React, { useContext, useEffect, useState } from 'react'
import styles from './ProuductDetails.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import CartContextProvider, { CartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';
import Loding from '../Loding/Loding.jsx';
export default function ProuductDetails() {
  let {addToCart} = useContext(CartContext)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
 async function addProudctToCart(productId){
  let Response = await addToCart(productId);
  console.log(Response);
  console.log(productId,"success");
  if(Response.data.status=="success")
  {
    toast.success(Response.data.message,);
  }
  else
  {
    toast.error(Response.data.message);
  }}

const [proudctDetails, setproudctDetails] = useState(null);
  let params = useParams();
  console.log(params);
async function getproudctdetails(id) { 

let {data}= await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)


setproudctDetails (data.data);
}

useEffect  (()=>{
getproudctdetails(params.id);
},[])

 
  return <>
 
 {  proudctDetails !==null ? <div className="container  ">
    <div className="row">
      <div className="col-md-4 p-5">
        <Slider {...settings}>
        {proudctDetails?.images.map((img,index)=> <img key={index} src = {img} />) }
          </Slider>
        </div>
     
       <div className="row col-md-8 p-5 ">
        <h3>{proudctDetails?.title}</h3>
        <p className='  justify-content-center'> {proudctDetails?.description} </p>
        <div className="d-flex justify-content-between">  
        <span className='fa-3x'> {proudctDetails?.price} EGP</span> 
         <span className='fa-3x'>  <i className=' fas fa-star text-warning'></i> {proudctDetails?.ratingsAverage}    </span> 
          </div>
         <span className='text-success fa-5x ' >{proudctDetails?.subcategory.name}</span>

          </div>
         </div>
        <button  onClick={()=>addProudctToCart(proudctDetails._id)}className='btn  btn-success w-100'>add to cart</button>
      </div>
  

 : <Loding/>}
  </>
}

