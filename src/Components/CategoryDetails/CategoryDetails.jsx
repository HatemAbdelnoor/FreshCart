import React, { useContext, useEffect, useState } from 'react'
import axios  from 'axios';
import { Link } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import CartContextProvider, { CartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';
import Loding from '../Loding/Loding.jsx';
import Slider from 'react-slick';

import { useParams } from 'react-router-dom';


export default function CategoryDetails(){
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
    console.log(params.id);
  async function getproudctdetails(id) { 
  
  let {data}= await axios.get(`https://route-ecommerce.onrender.com/api/v1/categories/${id}`)
  
  setproudctDetails (data.data);
  }
  
  useEffect  (()=>{
  getproudctdetails(params.id);
  },[])
  
   
    return <>
   
  { proudctDetails !== null ?  <div className="container-fluid d-flex justify-content-center align-items-center ">
        <div className="card border-0 ">
            <div className="card-img w-100 m-auto">
                <img  src={proudctDetails?.image} alt="" />
                <div className="card-body text-center  fa-2x">
                   <h2> {proudctDetails?.slug} </h2>

                </div>
            </div>
        </div>
        </div>
    
: <Loding/>  }
    </>
}