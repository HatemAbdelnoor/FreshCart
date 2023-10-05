import React, { useContext, useState } from "react";
import styles from "./Categories.module.css";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom"
import Loding from './../Loding/Loding';
export default function Categories(){
function getCategories(){

    return axios.get(`https://route-ecommerce.onrender.com/api/v1/Categories`)
   .then((response) =>response).catch((err) =>err)
}
    async function setCategories(){
            let response=await getCategories();
            setCategoriesDitails(response.data)
            console.log(response.data);
            console.log();
    };
    
    useEffect (()=>{
    setCategories();},[]);
    const [CategoriesDitails, setCategoriesDitails] = useState(null);
    return<> 

{  CategoriesDitails !== null  ? <div className="containar col-md-12 d-flex justify-content-center flex-wrap  p-2">
    {CategoriesDitails?.data.map((CategoriesDitails, index) => (
        <div key={index} className="row col-md-3 p-3">
         <Link to={`/CategoryDetails/${CategoriesDitails._id}`} >

       <Card>
        <Card.Img  height={400} width={100} variant="top" src={CategoriesDitails?.image}/>
        <Card.Header className="text-center">{CategoriesDitails?.name}</Card.Header>
       </Card>
       </Link>

       </div>
    ))}
    </div>: <Loding/>
}
</>
}