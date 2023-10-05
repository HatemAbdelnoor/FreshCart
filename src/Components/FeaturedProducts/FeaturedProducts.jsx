import React, { useContext, useEffect, useState } from 'react'
import Loding from '../Loding/Loding.jsx';
import './FeaturedProducts.css';
import axios  from 'axios';
import { Link } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import CartContextProvider, { CartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';

export default function FeaturedProducts() {
  let {addToCart} = useContext(CartContext)
  const [products, setProducts] = useState([]);
  async function getProducts(noPage,noProduct ) {   
    let {data}= await axios.get(`https://route-ecommerce.onrender.com/api/v1/products?page=${noPage}&limit=${noProduct}`)
setProducts(data.data)
    console.log(data.data);
  }

useEffect(()=>{
  getProducts();
},[])
 async function addProudctToCart(productId){
let Response = await addToCart(productId);
console.log(Response);
if(Response.data.status=="success")
{
  toast.success(Response.data.message,);
}
else
{
  toast.error(Response.data.message);
}

}
return <>
{
  products.length!=0?
   <div className="containar ">
  <div className="row mt-5">
  
    <div className="col-md-12 ">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-center"> Products</h3>
        </div>
        <div className="card-body row col-md-12 d-block d-flex flex-wrap align-content-center justify-content-center  ">
        
  
          <div className="row col-md-11 d-block d-flex flex-wrap justify-content-center">
            {products.map((product, index) => (
              <div  id='proudct-section' className="col-md-4 col-lg-2  col-sm-6   product" key={index}>
                <Link to={`/ProuductDetails/${product._id}/${product.slug}`} >
              
                <div className="card">
                  <div className="card-header">
                    
                  <h5 className="    text-center  ">{product.title.split(' ').slice(0,2).join(' ')}</h5>
                  <h6 className='text-success' >{product.name}</h6>
                  </div>
                  <div className="card-body">
                   
                   <img className='w-100' src={product.imageCover} alt="" />
                   <div className="d-flex justify-content-between">
                    <span className='text-muted'>{product.price} EGY</span>
                    <span> <i className='fas fa-star text-warning'></i>
                    {product.ratingsAverage}
                     </span>
  
                   </div>
                  </div>
                  
                </div>
                </Link>
                <button onClick={()=>addProudctToCart(product._id)}  className='btn  btn-success  w-100'>add proudct</button>
    
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </div>
   
  </div>
  </div> : <Loding />
}


  </>
}
