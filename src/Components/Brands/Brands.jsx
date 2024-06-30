import React, { useContext, useState } from "react";
import styles from "./Brands.module.css";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Loding from "../Loding/Loding.jsx";
import BrandsDetails from './../BrandsDetails/BrandsDetails';
import { Link } from "react-router-dom";

export default function Brands(){
function getBrands(){

    return axios.get(`https://ecommerce.routemisr.com/api/v1/Brands`)
   .then((response) =>response).catch((err) =>err)
}
    async function setBrands(){
            let response=await getBrands();
            setBrandsDitails(response.data)
            console.log(response.data);
            console.log();
    };
    
    useEffect (()=>{
    setBrands();},[]);
    const [BrandsDitails, setBrandsDitails] = useState(null);
    return<> 
{  BrandsDitails !==null?      <div className="containar d-flex justify-content-center flex-wrap ">
    {BrandsDitails?.data.map((BrandsDitails, index) => (
        <div key={index} className="row col-md-3  -1  ">
            <Link  to={`/BrandsDetails/${BrandsDitails._id}`}>
       <Card>
        <Card.Img variant="top" src={BrandsDitails?.image}/>
        <Card.Header className="text-center">{BrandsDitails?.name}</Card.Header>
       </Card>
       </Link>
       </div>
    ))}
    </div> :  <Loding/>}

</>
}