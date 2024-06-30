import axios from "axios";
import { createContext } from "react";


export let CartContext= createContext(0)
export default function CartContextProvider(props){

    let userToken =localStorage.getItem('userToken');
    let headers={ token:userToken };  
    
    function addToCart(productId){

    return axios.post(`https://ecommerce.routemisr.com/api/v1/Cart`,
   { productId : productId}
   ,{headers})
   .then((response) =>response).catch((err) =>err)

}

function RemoveSpecificCartItem(productId){

    return axios.delete(`https://ecommerce.routemisr.com/api/v1/Cart/${productId}`,{headers})
   .then((response) =>response).catch((err) =>err)

}
function getLoggedUserCart(){

    return axios.get(`https://ecommerce.routemisr.com/api/v1/Cart`,
   {headers})
   .then((response) =>response).catch((err) =>err)
}
   function updateProudct(productId , proudctCount){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/Cart/${productId}`, {count:proudctCount} , {headers})
   .then((response) =>response).catch((err) =>err)

}

 
 return <CartContext.Provider value={{addToCart,getLoggedUserCart, RemoveSpecificCartItem , updateProudct}}>  
 {props.children}


 </CartContext.Provider>   
 
}