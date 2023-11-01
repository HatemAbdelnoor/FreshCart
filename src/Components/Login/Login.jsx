import styles from './Login.module.css';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function Login({saveUserData}) {

  
  let navigate = useNavigate();
 const [isloading,setisloading]= useState(false);


async   function handleLogin(values){
    let {data}=  await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,values).catch(()=>{  
      toast.error(`Email or password incorrect`)  
})

            setisloading(true);


    if (data.message=="success"){


      localStorage.setItem("userToken", data.token);
      setisloading(false);
      navigate('/ ');
      console.log("hello");
      saveUserData();
      toast.success(`welcome  ${data.user.name}`)


    }
   

  }
  
  let validationSchema=Yup.object({
    email:Yup.string().required("Email is required").email("email is invalid"),
    password:Yup.string().required("Password is required").matches(/[a-zA-Z0-9]{5,10}$/,"password must be 5 characters long at least"),
  })
  
  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin

    
    
  });
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};
   
  return <>
   <Helmet>
    <title>Login </title>
   </Helmet>
  <form  onSubmit={formik.handleSubmit}>

    <div className='w-75 mx-auto py-4' >
      <label htmlFor='email' >email</label>
      <input type='text'  onBlur={formik.handleBlur} className='form-control' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
      <label htmlFor='password' >password</label>
      <input type='password'  onBlur={formik.handleBlur} className='form-control' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
      
      
             <button disabled={! (formik.isValid && formik.dirty && !isloading)}  type='submit' className='btn btn-primary'>
          
      {!isloading ? "Login":<i className=' fas fa-spinner fa-spin ' ></i>}
      </button>
        <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

      </div>

      <div>
        
        </div>
      </form>

  </>
}
