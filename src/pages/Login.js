import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {Link} from 'react-router-dom'
export default function Login() {
  //register is uses to tell reacthook which input should be part 
  //this validation
  const onSubmit = (data) => { 
    console.log(data)
  }
  const schema=yup.object().shape({
    email:yup.string().required("Email or password is invalid"),
    password:yup.string().min(4).max(20).required("Email or password is invalid"),
    ConfirmPassword: yup.string().oneOf([yup.ref("password"),null]).required("Email or password is invalid"),
    
    
  }) 

  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });
  return (
  <div className='entire-login min-h-screen bg-indigo-700'>
    <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center bg-gray-800 '>
      <label htmlFor="" className='text-white text-center relative  text-xl'>LOGIN</label>
      <input type="email" placeholder='Enter your email'  {...register("email")}/ >
      <input type="password" placeholder='Enter your password' {...register("password")} />
      <input type="password" placeholder='Confirm password' {...register("ConfirmPassword")} />
      <input type="submit" className='loginSubmit p-2 bg-indigo-600 rounded-xl text-white hover:bg-indigo-700 w-15 transition' />
      <div className='flex justify-center'>
      <Link className=' text-white text-center ' to="/signup"> 
      <span className='registerLink text-white text-center relative  text-l mx-5'>Signup</span> 
      </Link>
      <Link className='text-white text-center' to="/ForgetPassword"> 
      <span className='registerLink text-white text-center relative  text-l mx-5'>Forget password</span> 
      </Link>
      </div>
      <p className='text-red-600 text-center'>{(errors.name||errors.password||errors.ConfirmPassword)?.message}</p>
    </form>
    </div>
      )
}
