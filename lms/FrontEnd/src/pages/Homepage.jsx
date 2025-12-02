import React from 'react';
import logo from '../assets/navlogo.png';
import intro from '../assets/intro.png';
import satis from '../assets/student.png';
import student from '../assets/images.png';
import {Link} from 'react-router-dom';
import './Homepage.css';



export default function Homepage() {
  return (
    <div className="bg-linear-to-r/srgb from-[#e1eceb] to-[#EAF3F1]">
  
    
      <section className="relative h-[600px] bg-linear-to-r/srgb from-[#A8DADC] to-[#EBECE8] justify-between overflow-hidden">
        <div className="z-[-1]">
        <h2 className="font-sans font-semibold text-[#333333] text-[40px] pb-8 pt-10  pl-150 ">Build Your Skill With Us</h2></div>
        <div className="flex justify-between h-full w-full">
        <div className=" w-1/2 flex flex-col relative items-start h-full">
        <p className="text-[20px] font-sans text-[#333333] font-light pb-10 text-left pl-20 pr-10 mt-4 font">Our Learning Management System (LMS) is a modern online platform designed to make learning easier and more engaging. It allows students to access courses, connect with tutors, and stay updated with the latest educational news — all in one convenient place. It goes beyond traditional education by offering personalized learning paths, interactive multimedia lessons, and collaborative tools like forums and group projects. With built-in tracking and certification, the LMS empowers every student to learn intelligently, monitor their progress, and transform their continuous growth into recognized success.</p>
        <div className="flex justify-center w-full">
          <button className=" text-white border-2 rounded-[25px] border-none bg-linear-to-r/srgb from-teal-700 to-cyan-800 hover:shadow-2xl hover:p-5 p-4 font-bold">Explore the Courses</button>
        </div>
        
        </div> 
        <div className="w-1/2 flex justify-center items-center h-full z-10">
          <img src={intro} alt="intro" className="h-[90%] w-auto object-contain -mt-25"></img>
        </div>
        </div>
      </section>
      
       <div>
        <h2 className="font2 text-3xl flex justify-center mt-[30px]">Empowering Tools, Seamless Learning</h2>
        </div >
      <section className="grid grid-cols-3 gap-4 mt-[35px] pr-12 pl-12">
         <div className="bg-white backdrop-blur-lg p-6 rounded-2xl shadow-md text-center h-[120px]  flex items-center text-[17px] font-semibold">
            <p>Personalized Learning Paths – Tailor your study plan according to your goals and pace.</p>
        </div>
         <div className="bg-white backdrop-blur-lg p-6 rounded-2xl shadow-md text-center h-[120px]  flex items-center text-[17px] font-semibold">
            <p>Collaborative Learning – Join forums, group projects, and discussions to learn together.</p>
        </div>
         <div className="bg-white backdrop-blur-lg p-6 rounded-2xl shadow-md text-center h-[120px]  flex items-center text-[17px] font-semibold">
            <p>Certifications & Badges – Earn recognition for your achievements and skills.</p>
        </div>
         <div className="bg-white backdrop-blur-lg p-6 rounded-2xl shadow-md text-center col-start-2 h-[120px]  flex items-center text-[17px] font-semibold">
            <p>Quizzes & Assessments – Test your knowledge regularly to reinforce learning.</p>
      </div>
      </section>
      <section className="flex mt-[71px] mb-10 px-12 justify-center">
        <div className="grid grid-cols-3 gap-6 items-center ">
            <div className="flex items-center "><img src={student} className="h-[100px] w-auto pr-[25px]"></img><p className="text-[21px] font-semibold"><span className="text-green-800 font-extrabold text-[25px] block">500+</span> Students Learning Every Day</p></div>
            <p className="text-[21px] font-semibold pl-[51px]">
              <span className="text-green-800 font-extrabold text-[25px] block">1200+</span>
              Hours of Content Available
            </p>
            <div className="flex items-center"> <img src={satis} className="h-[100px] w-auto"></img><p className="text-[21px] font-semibold"><span className="text-green-800 font-extrabold text-[25px] block pl-1.5">95%</span> Student Satisfaction Rate</p></div>
        </div>

      </section>
      <section className="px-12 py-16 bg-linear-to-b from-transparent to-white/50">
        <h2 className="font2 text-4xl text-center mb-12 text-gray-800 font-bold ">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-8">
          <div className="bg-white relative rounded-2xl border-l-4 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-teal-600 hover:-translate-y-2">
            <div className="absolute -top-4 -left-4 size-12 bg-linear-to-br from-teal-500 to-teal-700 rounded-full text-white flex items-center justify-center shadow-lg text-xl font-bold ">1</div>
            <h3 className="font-bold text-2xl text-gray-900 mb-2">Web Development Basics</h3>
            <p className="text-lg text-gray-600">Learn HTML, CSS, and JavaScript from scratch with hands-on projects.</p>
          </div>

          <div className="bg-white  relative rounded-2xl shadow-lg transition-all duration-300 border-l-4 border-teal-600 p-8 hover:shadow-2xl hover:-translate-y-2">
            <span className=" absolute -top-4 -left-4 size-12 rounded-full bg-linear-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center  text-xl font-bold">2</span>
            <h3 className="font-bold text-2xl text-gray-900 mb-2">Introduction to Python</h3>
            <p className="text-lg text-gray-600">Build a strong foundation in Python programming for real-world applications.</p>
          </div>

          <div className="bg-white relative rounded-2xl border-l-4 p-8 border-teal-600 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <span className="absolute flex items-center justify-center -top-4 -left-4 size-12 bg-linear-to-br from-teal-500 to-teal-700 text-xl text-white font-bold rounded-full shadow-lg">3</span>
            <h3 className="font-bold text-2xl text-gray-900 mb-2">Digital Marketing Essentials</h3>
            <p className="text-lg text-gray-600">Master social media, SEO, and online marketing strategies.</p>
          </div>

          <div className="bg-white  relative rounded-2xl shadow-lg transition-all duration-300 border-l-4 border-teal-600 p-8 hover:shadow-2xl hover:-translate-y-2">
            <span className="absolute flex items-center justify-center -top-4 -left-4 size-12 bg-linear-to-br from-teal-500 to-teal-700 text-xl text-white font-bold rounded-full shadow-lg">4</span>
            <h3 className="font-bold text-2xl text-gray-900 mb-2">UI/UX Design Fundamentals</h3>
            <p className="text-lg text-gray-600">Understand design principles and create user-friendly interfaces.</p>
          </div>
        </div>
      </section>

  
        <div className="Contact"></div>

    </div>
  )
}