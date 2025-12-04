import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function CourseForm() {
  const navigate = useNavigate(); 
  const[fullname, setFullname]=useState("");
  const[studentId, setstudentId]=useState("");
  const[email, setEmail]=useState("");
  const[phone, setPhone]=useState("");
  const[selectedCourse, setSelectedCourse]=useState("");
  const[educationLevel,setEducationLevel]=useState("");
  const[address, setAddress]=useState("");
  const[enrollState, setEnrollState]=useState("");

  const course=(e)=>{
    e.preventDefault();

    if(fullname.length ===0 || studentId.length ===0 || email.length===0 || selectedCourse.length===0 || educationLevel.length===0 ){
      setEnrollState("Please enter the details for Enroll");
      return;
    }



    axios.post("http://localhost:3001/course",{
      fullname:fullname,
      studentId:studentId,
      email:email,
      phone:phone,
      selectedCourse:selectedCourse,
      educationLevel:educationLevel,
      address:address
      
    }).then((response)=>{
      if(response.data.message){
        setEnrollState(response.data.message);
      }
      if(response.data.message === "Enrollment successful"){
         const studentid=localStorage.setItem("studentId", String(studentId));
         const enrollStudentId=studentId;
         setTimeout(()=>{

          navigate(`/student/${enrollStudentId}`);

         },3000);
         
      }

    })


  }

 


  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#D5ECE9] via-[#A8DADC] to-[#EAF3F1] py-8 px-4">
      <form onSubmit={course} className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl px-10 py-8">
        <div className="text-center mb-6">
          <div className="inline-block bg-linear-to-r from-teal-500 to-teal-700 text-white rounded-full p-4 mb-4">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Course Enrollment</h1>
          <p className="text-gray-500 text-base" style={{ wordSpacing: '3px' }}>
            Fill in your details to enroll in your desired course
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullname" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
                <span className="size-2 rounded-full bg-teal-600"></span>
                Full Name *
              </label>
              <input
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                onChange={(e)=>setFullname(e.target.value)}
                className="border-2 border-gray-300 rounded-lg w-full h-11 px-4 focus:outline-none focus:border-teal-600 transition-all"
              />
            </div>

            <div>
              <label htmlFor="studentId" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
                <span className="size-2 rounded-full bg-teal-600"></span>
                Student ID (Optional)
              </label>
              <input
                id="studentId"
                type="text"
                onChange={(e)=>{setstudentId(e.target.value)}}
                placeholder="Your student ID"
                className="border-2 border-gray-300 rounded-lg w-full h-11 px-4 focus:outline-none focus:border-teal-600 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
                <span className="size-2 rounded-full bg-teal-600"></span>
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder="Enter your email"
                className="border-2 border-gray-300 rounded-lg w-full h-11 px-4 focus:outline-none focus:border-teal-600 transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
                <span className="size-2 rounded-full bg-teal-600"></span>
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                onChange={(e)=>{setPhone(e.target.value)}}
                placeholder="Enter your phone number"
                className="border-2 border-gray-300 rounded-lg w-full h-11 px-4 focus:outline-none focus:border-teal-600 transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="selectedCourse" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
              <span className="size-2 rounded-full bg-teal-600"></span>
              Select Course *
            </label>
            <select
              id="selectedCourse"
              onChange={(e)=>{setSelectedCourse(e.target.value)}}
              className="border-2 border-gray-300 rounded-lg w-full h-11 px-4 focus:outline-none focus:border-teal-600 transition-all bg-white"
            >
              <option value="">Choose a course</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="data-science">Data Science</option>
              <option value="machine-learning">Machine Learning</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="cyber-security">Cyber Security</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="educationLevel" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
                <span className="size-2 rounded-full bg-teal-600"></span>
                Education Level *
              </label>
              <select
                id="educationLevel"
                onChange={(e)=>{setEducationLevel(e.target.value)}}
                className="border-2 border-gray-300 rounded-lg w-full h-11 px-4 focus:outline-none focus:border-teal-600 transition-all bg-white"
              >
                <option value="">Select your level</option>
                <option value="high-school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="address" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
              <span className="size-2 rounded-full bg-teal-600"></span>
              Address (Optional)
            </label>
            <textarea
              id="address"
              placeholder="Enter your full address"
              onChange={(e)=>{setAddress(e.target.value)}}
              rows="3"
              className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-teal-600 transition-all resize-none"
            ></textarea>
          </div>

          <div className="flex items-center flex-wrap">
            <input
              id="terms"
              type="checkbox"
              className="size-4 accent-teal-600 cursor-pointer"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600 cursor-pointer select-none">
              I agree to the
            </label>
            <a
              href="#"
              className="ml-1 text-teal-600 font-semibold hover:underline hover:text-teal-700 cursor-pointer text-sm transition-colors"
            >
              Terms & Conditions
            </a>
            <span className="mx-1 text-sm text-gray-600">and</span>
            <a
              href="#"
              className="text-teal-600 font-semibold hover:underline hover:text-teal-700 cursor-pointer text-sm transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-teal-500 to-teal-700 text-white rounded-xl h-12 font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Enroll Now
          </button>
           {enrollState && (<p className="text-center text-green-600 font-semibold mt-4">{enrollState}</p>
          )}

          <div className="text-center text-sm text-gray-600 mt-4">
            Need help with enrollment?{' '}
            <a href="#" className="text-teal-600 font-bold hover:text-teal-700 hover:underline cursor-pointer transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}
