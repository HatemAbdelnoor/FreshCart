import styles from './Login.module.css';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { toast } from 'react-hot-toast';

export default function Login({saveUserData}) {

  
  let navigate = useNavigate();
 const [isloading,setisloading]= useState(false);
 const [data, setdata] = useState("seond")


async   function handleLogin(values){
    let {data}=  await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,values);

            setisloading(true);


    if (data?.message=="success"){


      localStorage.setItem("userToken", data.token);
      setisloading(false);
      navigate('/ ');
      console.log("hello");
      saveUserData();
      toast.success(`welcome${data.user.name}`)


    }else{

      toast.error(data.message)
    }
    

  }
  
  let validationSchema=Yup.object({
    email:Yup.string().required("Email is required").email("email is invalid"),
    password:Yup.string().min(8).max(16).required("Password is required"),
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
const errorMessage = () => {
toast.error("Incorrect email or password")


};
   
  return <>

  <form   onSubmit={formik.handleSubmit}>

    <div className='w-75 mx-auto py-4' >
      <label htmlFor='email' >email</label>
      <input type='text'  onBlur={formik.handleBlur} className='form-control' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
      <label htmlFor='password' >password</label>
      <input type='password'  onBlur={formik.handleBlur} className='form-control' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
      
      
             <button disabled={! (formik.isValid && formik.dirty && !isloading)}   type='submit' className='btn btn-primary mt-2' >
          
      {!isloading ? "Login":<i className=' fas fa-spinner fa-spin ' ></i>}
      </button>
      <section className='text-center mt-3'> if you don have Email you can <a className='' href=""> <Link className='fw-bolder'  to="/register">Register now</Link></a> </section>

        <br />
            <br />

      </div>

      <div>
        
        </div>
      </form>

  </>
}
