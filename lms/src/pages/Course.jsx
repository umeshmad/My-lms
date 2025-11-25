import React from 'react';
import logo from '../assets/navlogo.png';

export default function Course() {
  return (
    <div className="bg-linear-to-r/srgb from-[#D5ECE9] to-[#EAF3F1] min-h-screen">
      <nav className="flex justify-between items-center bg-linear-to-r/srgb from-cyan-50 to-blue-50  h-20">
        <img src={logo} className="h-32 w-auto mt-8 ml-10"></img>
        <ul className="flex gap-18 pr-35 text-blue-700 font-bold  text-[18px] font-sans">
          <li className="hover:rounded-[18px] hover:border-3 hover:border-blue-600 hover:p-[7px] hover:-translate-y-2 hover:duration-300 hover:transition-all hover:bg-green-200"><a href="#">Home</a></li>
          <li className="hover:rounded-[18px] hover:border-3 hover:border-blue-600 hover:p-[7px] hover:-translate-y-2 hover:duration-300 hover:transition-all hover:bg-green-200"><a href="#">Course</a></li>
          <li className="hover:rounded-[18px] hover:border-3 hover:border-blue-600 hover:p-[7px] hover:-translate-y-2 hover:duration-300 hover:transition-all hover:bg-green-200"><a href="#">Tutor</a></li>
          <li className="hover:rounded-[18px] hover:border-3 hover:border-blue-600 hover:p-[7px] hover:-translate-y-2 hover:duration-300 hover:transition-all hover:bg-green-200"><a href="#">news</a></li>
        </ul>
      </nav>
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
