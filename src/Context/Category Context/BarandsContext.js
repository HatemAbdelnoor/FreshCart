import axios from "axios";
import { createContext } from "react";


export let BrandsContext= createContext(0)
export default function BrandsContextProvider(props){


 
function getBrands(){

    return axios.get(`https://ecommerce.routemisr.com/api/v1/Brands`)
   .then((response) =>response).catch((err) =>err)
}

 
 return <BrandsContext.Provider value={{ }}>  
 {props.children}


 </BrandsContext.Provider>   
 
}