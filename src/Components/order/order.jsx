import React, { useContext, useEffect, useState } from 'react';
import "./order.css"
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
const OrderRequestForm = () => {

  let {getLoggedUserCart}=useContext(CartContext);
  async function getCart(){

    let response=await getLoggedUserCart();
     setcartId(response.data.data._id);
     let catID=response.data.data._id
    console.log(catID);
    
}
useEffect (()=>{
    getCart();},[]);

const [cartId, setcartId] = useState(null);


  let userToken =localStorage.getItem('userToken');
  let headers={ token:userToken };  
  async   function handleOrder(values,catID){
    let {data}=  await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/orders/${catID}`,values,{headers}).then((response) =>response).catch((err) =>err)
      
    if (data.status=="success"){


      Navigate('/cart ');
      toast.success(`order successfully`)


    }
   

  }


 let orderFormic= useFormik({
    initialValues : {
    details:"",
    phone:"",
    city:""
  },
    onsubmit:handleOrder
 })

  return <> 
<div className="w-50 m-auto p-5">

  <form  onsubmit={orderFormic.handleSubmit} >
 <label htmlFor="details">details</label>
   <input type="text" name="details" id='details' className='form-control my-3'  onChange={orderFormic.handleChange} onBlur={orderFormic.handleBlur} /> 

   <label htmlFor="phone">phone</label>
   <input type="text" name="phone" id='phone' className='form-control my-3'  onChange={orderFormic.handleChange} onBlur={orderFormic.handleBlur} /> 

 <label htmlFor="city">city</label>
   <input type="text" name="city" id='city' className='form-control my-3'  onChange={orderFormic.handleChange} onBlur={orderFormic.handleBlur} /> 
   <button type='submit' className=' btn btn-success w-100  text-white  '>Place Order</button>
 
  </form>
</div>

  </>
};

export default OrderRequestForm;