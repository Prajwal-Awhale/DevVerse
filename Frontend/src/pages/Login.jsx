import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
  const {register,handleSubmit}=useForm();
 const navigate = useNavigate();

 const onSubmit=(data)=>{

  console.log(data);
navigate('/jobs') ;
}

  return (
     <>
     <Navbar/>
     <div className='min-h-[60vh] flex items-center justify-center'>
<div className=' text-black  flex max-h-[70vh] items-center'>
     <form action="" onSubmit={(handleSubmit(onSubmit))}>
      <div className='border-2 border-black p-4 rounded-2xl  bg-neutral '>
      <h1 className='text-amber-50 text-2xl font-bold  text-center p-4'> Login  </h1>
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  
  
  <label className="fieldset-label">Email</label>
  <input type="email" className="input text-amber-50" placeholder="Email" {...register("Email")} />
  
  <label className="fieldset-label">Password</label>
  <input type="password" className="input  text-amber-50" placeholder="Password" {...register("Password")}/>
  
  <button className="btn btn-primary mt-4" type='Submit'>Login</button>
  <Link to='/signup'><p className='text-amber-50 font-light mt-4' >Create new Account..!</p></Link>
</fieldset>
</div>


     </form>
     <div className='max-h-[60vh]'>
     <img src="https://imgs.search.brave.com/dwDi2v-aU2KsDrneI9iZHzKqhc4n9UYIlWvqWBur0AQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/aWVzLmZyZWVwaWts/YWJzLmNvbS9zdG9y/YWdlLzQxNTMvTW9i/aWxlLWxvZ2luLWJy/by5zdmc" alt="" />
     </div>
     </div>
     </div>
     <Footer/>
     </>
  )
}

export default Login