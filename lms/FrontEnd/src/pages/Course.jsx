import React from 'react';
import logo from '../assets/navlogo.png';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

export default function Course() {
  const [isCheck, setIsCheck]=useState(false);

  useEffect(()=>{
    const check=localStorage.getItem('isLoggedIn')=== 'true';
    setIsCheck(check);

  },[]);


  return (
    <div className="bg-linear-to-r/srgb from-[#D5ECE9] to-[#EAF3F1] min-h-screen">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 gap-y-20 px-40">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ">
          <div className="h-34 bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center">
            <h1 className="text-white font-bold text-2xl">Web Development Basics</h1>
          </div>
          <div className="h-auto w-auto " >
            <h1 className="px-5 pt-5"> Learn HTML, CSS, and JavaScript from scratch with hands-on projects.</h1>
            <div className="flex  gap-4 p-4">
              <div className="w-1/2" ><ul>
                  <li className="flex items-center gap-1 py-2 relative pl-15 
                     before:content-[''] before:w-2 before:h-2 
                     before:bg-green-600 before:rounded-full before:absolute before:left-11"> <p className="font-black pr-1">8 </p> weeks</li>
                  <li className="flex items-center font-black pt-2 gap-1 pl-14 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-10"> Biginners</li>
                </ul>
              </div>
              <div className="w-1/2">
                <ul>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">30 </p> lessons</li>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">150 </p> students</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center px-8 py-5"> 
              <button  onClick={()=>{
                if(isCheck){
                  window.location.href="/courseform";
                }else{
                  alert("Please login first")
                }
              }} className="bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center w-full  rounded-xl h-9 text-xl text-white font-bold ">Enroll Now</button>
            </div>
             
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ">
          <div className="h-34 bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center">
            <h1 className="text-white font-bold text-2xl">Web Development Basics</h1>
          </div>
          <div className="h-auto w-auto " >
            <h1 className="px-5 pt-5"> Learn HTML, CSS, and JavaScript from scratch with hands-on projects.</h1>
            <div className="flex  gap-4 p-4">
              <div className="w-1/2" ><ul>
                  <li className="flex items-center gap-1 py-2 relative pl-15 
                     before:content-[''] before:w-2 before:h-2 
                     before:bg-green-600 before:rounded-full before:absolute before:left-11"> <p className="font-black pr-1">8 </p> weeks</li>
                  <li className="flex items-center font-black pt-2 gap-1 pl-14 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-10"> Biginners</li>
                </ul>
              </div>
              <div className="w-1/2">
                <ul>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">30 </p> lessons</li>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">150 </p> students</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center px-8 py-5"> 
              <button className="bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center w-full  rounded-xl h-9 text-xl text-white font-bold ">Enroll Now</button>
            </div>
             
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ">
          <div className="h-34 bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center">
            <h1 className="text-white font-bold text-2xl">Web Development Basics</h1>
          </div>
          <div className="h-auto w-auto " >
            <h1 className="px-5 pt-5"> Learn HTML, CSS, and JavaScript from scratch with hands-on projects.</h1>
            <div className="flex  gap-4 p-4">
              <div className="w-1/2" ><ul>
                  <li className="flex items-center gap-1 py-2 relative pl-15 
                     before:content-[''] before:w-2 before:h-2 
                     before:bg-green-600 before:rounded-full before:absolute before:left-11"> <p className="font-black pr-1">8 </p> weeks</li>
                  <li className="flex items-center font-black pt-2 gap-1 pl-14 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-10"> Biginners</li>
                </ul>
              </div>
              <div className="w-1/2">
                <ul>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">30 </p> lessons</li>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">150 </p> students</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center px-8 py-5"> 
              <button className="bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center w-full  rounded-xl h-9 text-xl text-white font-bold ">Enroll Now</button>
            </div>
             
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ">
          <div className="h-34 bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center">
            <h1 className="text-white font-bold text-2xl">Web Development Basics</h1>
          </div>
          <div className="h-auto w-auto " >
            <h1 className="px-5 pt-5"> Learn HTML, CSS, and JavaScript from scratch with hands-on projects.</h1>
            <div className="flex  gap-4 p-4">
              <div className="w-1/2" ><ul>
                  <li className="flex items-center gap-1 py-2 relative pl-15 
                     before:content-[''] before:w-2 before:h-2 
                     before:bg-green-600 before:rounded-full before:absolute before:left-11"> <p className="font-black pr-1">8 </p> weeks</li>
                  <li className="flex items-center font-black pt-2 gap-1 pl-14 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-10"> Biginners</li>
                </ul>
              </div>
              <div className="w-1/2">
                <ul>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">30 </p> lessons</li>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">150 </p> students</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center px-8 py-5"> 
              <button className="bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center w-full  rounded-xl h-9 text-xl text-white font-bold ">Enroll Now</button>
            </div>
             
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ">
          <div className="h-34 bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center">
            <h1 className="text-white font-bold text-2xl">Web Development Basics</h1>
          </div>
          <div className="h-auto w-auto " >
            <h1 className="px-5 pt-5"> Learn HTML, CSS, and JavaScript from scratch with hands-on projects.</h1>
            <div className="flex  gap-4 p-4">
              <div className="w-1/2" ><ul>
                  <li className="flex items-center gap-1 py-2 relative pl-15 
                     before:content-[''] before:w-2 before:h-2 
                     before:bg-green-600 before:rounded-full before:absolute before:left-11"> <p className="font-black pr-1">8 </p> weeks</li>
                  <li className="flex items-center font-black pt-2 gap-1 pl-14 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-10"> Biginners</li>
                </ul>
              </div>
              <div className="w-1/2">
                <ul>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">30 </p> lessons</li>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">150 </p> students</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center px-8 py-5"> 
              <button className="bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center w-full  rounded-xl h-9 text-xl text-white font-bold ">Enroll Now</button>
            </div>
             
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ">
          <div className="h-34 bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center">
            <h1 className="text-white font-bold text-2xl">Web Development Basics</h1>
          </div>
          <div className="h-auto w-auto " >
            <h1 className="px-5 pt-5"> Learn HTML, CSS, and JavaScript from scratch with hands-on projects.</h1>
            <div className="flex  gap-4 p-4">
              <div className="w-1/2" ><ul>
                  <li className="flex items-center gap-1 py-2 relative pl-15 
                     before:content-[''] before:w-2 before:h-2 
                     before:bg-green-600 before:rounded-full before:absolute before:left-11"> <p className="font-black pr-1">8 </p> weeks</li>
                  <li className="flex items-center font-black pt-2 gap-1 pl-14 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-10"> Biginners</li>
                </ul>
              </div>
              <div className="w-1/2">
                <ul>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">30 </p> lessons</li>
                  <li className="flex py-2  items-center pt-2 gap-1 pl-5 relative before:content-[''] before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:absolute before:left-1"><p className="font-black pr-1">150 </p> students</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center px-8 py-5"> 
              <button className="bg-linear-to-br from-teal-600 to-teal-700 flex justify-center items-center w-full  rounded-xl h-9 text-xl text-white font-bold ">Enroll Now</button>
            </div>
             
          </div>
        </div>
        
      </div>
    </div>
  )
}
