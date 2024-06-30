import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function Register() {
  let navigate = useNavigate();
 const [isloading,setisloading]= useState(false);




async   function handleRegister(values){
    let {data}=  await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup
    `,values).catch(()=>{  
      toast.error(`Email is already registered`)  
      
  })

    setisloading(true);

    if (data.message==="success"){


      setisloading(false);
      toast.success(`Now you can login`)

      navigate('/login')
    }
    console.log("Register");
    console.log(values);
  }
  
  let validationSchema=Yup.object({
    name:Yup.string().required("Name is required").min(3,"name minlength is 3").max(10,"name maxlength is 10"),
    email:Yup.string().required("Email is required").email("email is invalid"),
    password:Yup.string().required("Password is required").matches(/[a-zA-Z0-9]{5,10}/,"password must start with a letter"),
    rePassword:Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match"),
    phone:Yup.string().required("Phone is required" ).matches(/^01[0125][0-9]{8}$/,"phone not valid")
  })
  
  let formik = useFormik({
    initialValues: {
      name: '',
      phone:'',
      email: '',
      password: '',
      rePassword: '',
    },
    validationSchema,
    onSubmit: handleRegister
    
  });
   
  return <>

  <form  onSubmit={formik.handleSubmit}>

    <div className='w-75 mx-auto py-4' >
      <h3> Register Now :</h3>
      <label htmlFor='name' >name</label>
      <input type='text' onBlur={formik.handleBlur} className='form-control' id='name' name='name' placeholder='' onChange={formik.handleChange} value={formik.values.name} />
      {formik.errors.name && formik.touched.name ? <div className='alert alert-danger'>{formik.errors.name} </div>:null }
      <label htmlFor='phone' >phone</label>
      <input type='text'  onBlur={formik.handleBlur}  className='form-control' id='phone' placeholder='' name='phone' onChange={formik.handleChange} value={formik.values.phone} />
      {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>{formik.errors.phone} </div>:null }
      <label htmlFor='email' >email</label>
      <input type='text'  onBlur={formik.handleBlur} className='form-control' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
      {formik.errors.email && formik.touched.email? <div className='alert alert-danger'>{formik.errors.email} </div>:null }
      <label htmlFor='password' >password</label>
      <input type='password'  onBlur={formik.handleBlur} className='form-control' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
      {formik.errors.password && formik.touched.password? <div className='alert alert-danger'>{formik.errors.password} </div>:null }
      <label htmlFor='rePassword'  onBlur={formik.handleSubmit} >rePassword</label>
      <input type='password'  onBlur={formik.handleBlur} className='form-control' id='rePassword' name='rePassword' onChange={formik.handleChange} value={formik.values.rePassword} />
      {formik.errors.rePassword && formik.touched.rePassword? <div className='alert alert-danger'>{formik.errors.rePassword} </div>:null } 
      
      
      {isloading? <button type='button' className='btn btn-primary'><i className='fas fa-spinner fa-spin'></i></button>:
            <button disabled={! (formik.isValid && formik.dirty)}  type='submit' className='btn btn-primary'>Register</button>
          }

      </div>

      </form>

  </>
}
