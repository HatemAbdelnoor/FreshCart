import React from 'react'
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { Offline, Online } from "react-detect-offline";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout( {userDate,setuUserDate}) {
  let navigate = useNavigate();
  function LogOut ( ) {
    localStorage.removeItem("userToken");
    toast('Good Job!', {
      icon: '👏',
    });
    setuUserDate (null);
    console.log("hello");
    
   navigate  ("/login");

    
 };
 const offline = () => toast("You're  offline");
  return <>
  
 <Navbar LogOut={LogOut}   userDate={userDate}   />
 <div>
    <Offline onChange={offline}></Offline>
    <ToastContainer />

  </div>
<Outlet></Outlet>

  </>
}
