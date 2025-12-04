import React from 'react';
import logo from '../assets/navlogo.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Login() {
  const [username, setUserName]=useState("");
  const [password, setPassword]=useState("");
  const [loginstatus, setLoginStatus]=useState("");
  const navigate =useNavigate();

  const login=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/login',{
      username:username,
      password:password,
    }).then((response)=>{
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus("Login Successful");
        localStorage.setItem('isLoggedIn','true');
        localStorage.setItem('user',JSON.stringify(response.data[0]));

        window.dispatchEvent(new Event("storage"));
        navigate('/');

        
      }

    })
  }
  

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-[#D5ECE9] via-[#A8DADC] to-[#EAF3F1]">
        <form onSubmit={login} className="shadow-2xl bg-white rounded-2xl w-[420px] p-10 border border-gray-100">
          
          <div className="flex justify-center">
            <img src={logo} className="w-[150px] h-[150px] object-contain mr-4" />
          </div>
          <h1 className="font-extrabold text-4xl text-center pb-4 text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 text-center pb-4">Sign in to continue your learning journey</p>

          <div className="flex flex-col gap-10">
            
            <div className="flex flex-col">
              
              <label className="flex font-semibold text-[16px] mb-2 relative text-gray-700 before:absolute before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-teal-600 before:-left-3 before:top-[9px] ">User Name</label>
              <input
                type="text"
                placeholder="Enter your username"
                onChange={(e)=>{setUserName(e.target.value)}}
                className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-600 transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-[16px] mb-2 flex relative text-gray-700 before:content-[''] before:size-2 before:rounded-full before:bg-teal-600 before:absolute before:-left-3 before:top-[9px] ">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e)=>{setPassword(e.target.value)}}
                className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-600 transition-all"
              />
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <input type="checkbox" className="h-3.5 w-3.5 accent-teal-600"></input>
                    <label className="pl-3 -mt-2 text-gray-600">Remember me</label>
                </div>
                <div className="w-1/2 pl-10">
                    <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline">Forgot password?</a>
                </div>   
            </div>
            <button type="submit" className="text-white bg-linear-to-br from-teal-500 to-teal-700 rounded-lg h-10 font-bold hover:shadow-xl transition-all">Sign In</button>
            {loginstatus && (<p className="text-center text-green-600 font-semibold mt-4" >{loginstatus}</p>)}

            <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">or continue with</span>
                </div>
            </div>
            <div className="flex gap-4">
               <div className="w-1/2">
                        <button type="button" className="w-full border-2 border-gray-300 flex gap-4 rounded-lg p-2.5 justify-center items-center hover:outline-none hover:border-teal-600 hover:-translate-y-2 hover:shadow-2xl transition-all">
                            <img src={google} className="w-[23px] h-[23px]"/>
                            Google
                        </button>  
                    </div>
                    <div className="w-1/2">
                        <button type="button" className="w-full border-2 border-gray-300 flex gap-4 rounded-lg p-2.5 justify-center items-center hover:outline-none hover:border-teal-600 hover:-translate-y-2 hover:shadow-2xl transition-all">
                            <svg className="size-5" fill="#1877F2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Facebook
                        </button>
                    </div>
                    
                </div>
                <div className="flex justify-center gap-1 text-gray-600">
                    <p>Don't have an account?</p>
                    <Link to = '/register' className="text-teal-600 font-bold hover:text-teal-700 hover:underline">Sign Up</Link>
                </div>
            </div>

        </form>
      </div>
    </div>
  )
}