import styles from './Navbar.module.css';
import { ReactComponent as YourSvg } from "../../freshcart-logo.svg"
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext.js'
import { IconBase, icons } from 'react-icons';
export default function Navbar({userDate, LogOut}) {
  let {getLoggedUserCart}=useContext(CartContext);
  
async function getCart(){

  let response=await getLoggedUserCart();
   setcartDetails(response.data);
  console.log(response);
}
useEffect (()=>{
  getCart();},[]);

const [cartDetails, setcartDetails] = useState(null);

console.log(cartDetails);

  return <>
  <nav className=" navbar container-fluid p-3 m-auto      navbar-expand-lg navbar-light bg-light">

  <div className="collapse navbar-collapse  " id="navbarNavDropdown">

      {userDate!==null ?
    <ul className="navbar-nav   ">
      <li className='nav-item active w-100  '>
      </li >
      <li className='  m-1'> 
        <YourSvg/>
      </li>
      <li className="nav-item active">  
        <Link className="nav-link" to="">Home</Link>
      </li>
      
      <li className="nav-item">
      <Link className="nav-link" to="proudcts">Proudcts </Link>
      </li>
      <li  className="nav-item  cartt">
      <Link className="nav-link" to="cart"> Cart </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="brands">Brands</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="categories">Categories</Link>
      </li>
    
      </ul>:null}

      <ul className="navbar-nav ms-auto mb-2   ">
        <li className='d-flex  align-items-center me-3' >
        <a target="_blank" href="https:Fb.com/7atem.a7med"><i className="fa-brands fa-facebook-f fa-2xl m-3"></i> </a>   
     <a target="_blank"  href="https://www.instagram.com/hatemabdelnoor/">  <i className="fa-brands fa-instagram fa-2xl m-3"></i></a>   
       <a target="_blank"  href="https://github.com/HatemAbdelnoor">  <i className="fa-brands fa-github fa-2xl m-3"></i></a>   
         <a target="_blank"  href="https://www.linkedin.com/in/hatem-abdelnoor-28ab04156/"> <i className="fa-brands fa-linkedin fa-2xl m-3"></i></a>   
          </li>
          {userDate===null ? 
          <>
            <li className="nav-item">
    <a href=""> <Link className="nav-link" to="login">Login</Link></a> 
      </li> 
      <li className="nav-item">
   <a>    <Link className="nav-link" to="register">Register</Link></a>  
      </li>
          </>:
    
   <li className='nav-item'>
    <a href="">  <li onClick={LogOut}   className='<li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
      </li> ' >Logout  </li>
   </a></li> }
  
   </ul>
 
  </div>
  
</nav>
  
  </>

 };