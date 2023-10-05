import React, { useContext, useEffect, useState } from "react";
import  "./Cart.css";
import CartContextProvider, { CartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';
import { Helmet } from "react-helmet";
import Loding from './../Loding/Loding';


export default function Cart(){

let {getLoggedUserCart,updateProudct,RemoveSpecificCartItem}=useContext(CartContext);

async function RemoveItem(productId){
    let Response = await RemoveSpecificCartItem(productId);
    setcartDetails(Response.data);

    console.log(productId);
    console.log(Response);
    if(Response.data.status=="success")
{
  toast.success("the product has been removed");
}

 }
 

 async function updateProudctCount(productId,proudctCount){
    let Response = await updateProudct(productId,proudctCount);
    setcartDetails(Response.data);

    console.log(productId);
    console.log(Response);
    if(Response.data.status=="success")
    {
      toast.success("the product has been updated successfully");
    }
    

 }
 
async function getCart(){

    let response=await getLoggedUserCart();
     setcartDetails(response.data);
    console.log(response);
}
useEffect (()=>{
    getCart();},[]);

const [cartDetails, setcartDetails] = useState(null);




    return<>
    <Helmet>
        <title> Shop Cart </title>

    </Helmet>
   {cartDetails !==null  ?  <div className="    bg-light m-5 p-4 my-4 ">
       
       
       
        <h5>shop Cart</h5>
        {cartDetails?.data.products.map((product , index) => 
                 <div key={index} className= "row border-bottom py-2 my-2 align-items-center">
<div className=" col-md-1">
    
    <img className="w-100" src={product.product.imageCover} alt="" />
</div>

<div className=" col-md-11 d-flex justify-content-between">
    <div className="">
    <h6 className="fw-border">{product.product.title}</h6>
    <h4 className="text-success ">{product.price} EGP</h4>
    <button   onClick={()=>RemoveItem(product.product._id)}  type="button" className="button m-5 ">
        <span className="button__text ">Delete</span>
        <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width={512} viewBox="0 0 512 512" height={512} className="svg"><title /><path style={{fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" /><line y2={112} y1={112} x2={432} x1={80} style={{stroke: '#323232', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} /><path style={{fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" /><line y2={400} y1={176} x2={256} x1={256} style={{fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} /><line y2={400} y1={176} x2={192} x1={184} style={{fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} /><line y2={400} y1={176} x2={320} x1={328} style={{fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} /></svg></span>
      </button>

    </div>

    <div className="d-flex  align-self-end">
<button onClick={()=>updateProudctCount(product.product._id, product.count+1)} className="btn border-success  btn-sm ">+</button>
<span className="m-3">  {product.count}</span>
<button  onClick={()=>updateProudctCount(product.product._id, product.count-1)}    className="btn border-success  btn-sm ">-</button>

</div>
    </div>


            </div>) }
            <h6 className="text-success text-center "> Total Price : {cartDetails?.data.totalCartPrice} EGP</h6>

            <button   className=" btn  w-100 btn-outline-success p-2 text-center">  pay </button>

    </div>:<Loding/>}
    
    </>
}
