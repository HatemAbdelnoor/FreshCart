import axios from "axios";
import { createContext } from "react";


export let CategoriesContext= createContext(0)
export default function CategoriesContextProvider(props){


 
function getCategories(){

    return axios.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
   .then((response) =>response).catch((err) =>err)
}

 
 return <CategoriesContext.Provider value={{ getCategories}}>  
 {props.children}


 </CategoriesContext.Provider>   
 
}