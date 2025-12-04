import React from 'react';
import {useState} from 'react';
import navlogo from '../assets/navlogo.png';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const [user, setUser]=useState(null);
    
    useEffect(()=>{
        const LoggedIn=localStorage.getItem('isLoggedIn')=== 'true';
        const userdata=JSON.parse(localStorage.getItem('user'));
        setIsLoggedIn(LoggedIn);
        setUser(userdata);

        const handleStorageChange =()=>{
            const LoggedIn =localStorage.getItem('isLoggedIn') === 'true';
            const userdata= JSON.parse(localStorage.getItem('user'));
            setIsLoggedIn(LoggedIn);
            setUser(userdata)
        };
        window.addEventListener('storage',handleStorageChange);

        return()=>{
            window.removeEventListener('storage',handleStorageChange);
        }
    },[]);
    
    const logout = ()=>{
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUser(null);
        window.location.href='/login';
    }
  return (
    <div>
        <nav className="bg-linear-to-r from-cyan-50 via-blue-50 to-teal-50 shadow-2xl flex w-full justify-between items-center sticky top-0 z-50 backdrop-blur-sm h-25">
            <div>
                <img src={navlogo} className="h-32 ml-10 transition-transform duration-300 hover:scale-105 mt-8" alt="Logo"></img>
            </div>
            <div className="flex items-center pr-8">
                {isLoggedIn?(
                    <ul className="flex gap-6 items-center" >
                    <li><Link to='/' className="text-blue-700 font-bold text-lg px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-linear-to-r hover:from-green-400 hover:to-teal-500 hover:text-white hover:shadow-lg hover:-translate-y-1 hover:border-2 hover:border-blue-600">Home</Link></li>
                    <li><Link to='/course' className="text-blue-700 font-bold text-lg px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-linear-to-r hover:from-green-400 hover:to-teal-500 hover:text-white hover:shadow-lg hover:-translate-y-1 hover:border-2 hover:border-blue-600">Courses</Link></li>
                    <li><Link to='/tutor' className="text-blue-700 font-bold text-lg px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-linear-to-r hover:from-green-400 hover:to-teal-500 hover:text-white hover:shadow-lg hover:-translate-y-1 hover:border-2 hover:border-blue-600">Tutors</Link></li>
                    <li><Link to='/news' className="text-blue-700 font-bold text-lg px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-linear-to-r hover:from-green-400 hover:to-teal-500 hover:text-white hover:shadow-lg hover:-translate-y-1 hover:border-2 hover:border-blue-600">News</Link></li>
                    <li className="flex items-center gap-2 ml-4 px-4 py-2 bg-white rounded-full shadow-md">
                        <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {(user?.fullname || user?.username)?.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-gray-700 font-semibold">Welcome, {user?.fullname||user?.username}</span>
                    </li>
                    <li><button onClick={logout} className="px-6 py-2.5 bg-linear-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:from-red-600 hover:to-pink-600 hover:shadow-2xl hover:-translate-y-1 active:scale-95">Logout</button></li>
                </ul>
                ):
                (
                    <ul className="flex gap-6 items-center" >
                        <li><Link to='/' className="text-blue-700 font-bold text-lg px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-linear-to-r hover:from-green-400 hover:to-teal-500 hover:text-white hover:shadow-lg hover:-translate-y-1 hover:border-2 hover:border-blue-600">Home</Link></li>
                        <li><Link to='/course' className="text-blue-700 font-bold text-lg px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-linear-to-r hover:from-green-400 hover:to-teal-500 hover:text-white hover:shadow-lg hover:-translate-y-1 hover:border-2 hover:border-blue-600">Courses</Link></li>
                        <li><Link to='/tutor' className="text-blue-700 font-bold text-lg px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-linear-to-r hover:from-green-400 hover:to-teal-500 hover:text-white hover:shadow-lg hover:-translate-y-1 hover:border-2 hover:border-blue-600">Tutors</Link></li>
                        <li><Link to='/news' className="text-blue-700 font-bold text-lg px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-linear-to-r hover:from-green-400 hover:to-teal-500 hover:text-white hover:shadow-lg hover:-translate-y-1 hover:border-2 hover:border-blue-600">News</Link></li>
                        <li><Link to='/login' className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-teal-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-teal-700 hover:shadow-2xl hover:-translate-y-1 active:scale-95">Login</Link></li>
                    </ul>

                )}
                
                
            </div>
            
       
        </nav>
    </div>
  )
}