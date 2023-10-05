import axios from "axios";
import { createContext } from "react";


export let OrderContext= createContext(0)
export default function OrderContextProvider(props){

    let userToken =localStorage.getItem('userToken');
    let headers={ token:userToken };  
    
    function addToCart(productId){

    return axios.post(`https://route-ecommerce.onrender.com/api/v1/Cart`,
   { productId : productId}
   ,{headers})
   .then((response) =>response).catch((err) =>err)

}

function RemoveSpecificCartItem(productId){

    return axios.delete(`https://route-ecommerce.onrender.com/api/v1/Cart/${productId}`,{headers})
   .then((response) =>response).catch((err) =>err)

}
function getordersCart(){

    return axios.get(`https://route-ecommerce.onrender.com/api/v1/orders`,
   {headers})
   .then((response) =>response).catch((err) =>err)
}

 
 return <CartContext.Provider value={{addToCart,getordersCart , updateProudct}}>  
 {props.children}


 </CartContext.Provider>   
 
}