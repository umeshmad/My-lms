import React from 'react';
import logo from '../assets/navlogo.png';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#D5ECE9] via-[#A8DADC] to-[#EAF3F1]">
      <form className="bg-white rounded-2xl shadow-2xl w-[440px] px-10 py-8">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="w-36 h-36 object-contain drop-shadow-lg" />
        </div>
        <h1 className="text-4xl font-extrabold text-center mb-3 text-gray-800">Create Account</h1>
        <p className="text-center text-gray-500 text-base mb-6" style={{ wordSpacing: '3px' }}>
          Join us and start your learning today
        </p>
        <div className="mb-4">
          <label htmlFor="fullname" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
            <span className="size-2 rounded-full bg-teal-600"></span>
            Full Name
          </label>
          <input id="fullname" type="text" placeholder="Enter your full name" className="border-2 border-gray-300 rounded-lg w-full h-11 px-4 focus:outline-none focus:border-blue-600  transition-all" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
            <span className="size-2 rounded-full bg-teal-600"></span>
            Email Address
          </label>
          <input id="email" type="email" placeholder="Enter your email" className="border-2 border-gray-300 rounded-lg w-full h-11 px-4 focus:outline-none focus:border-blue-600 transition-all" />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
            <span className="size-2 rounded-full bg-teal-600"></span>
            User Name
          </label>
          <input id="username" type="text" placeholder="Choose a user name" className="border-2 border-gray-300 rounded-lg w-full h-11 px-4 focus:outline-none focus:border-blue-600  transition-all" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
            <span className="size-2 rounded-full bg-teal-600"></span>
            Password
          </label>
          <input id="password" type="password" placeholder="Create a password" className="border-2 border-gray-300 rounded-lg w-full h-11 px-4 focus:outline-none focus:border-blue-600  transition-all" />
        </div>
        <div className="mb-5">
          <label htmlFor="confirmPassword" className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
            <span className="size-2 rounded-full bg-teal-600"></span>
            Confirm Password
          </label>
          <input id="confirmPassword" type="password" placeholder="Confirm your password" className="border-2 border-gray-300 rounded-lg w-full h-11 px-4 focus:outline-none focus:border-blue-600  transition-all" />
        </div>
        <div className="flex items-center mb-5 flex-wrap">
          <input id="terms" type="checkbox" className="size-4 accent-teal-600 cursor-pointer" />
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
          Sign Up
        </button>
        <div className="flex items-center my-6">
          <div className="grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm font-medium">or sign up with</span>
          <div className="grow h-px bg-gray-300"></div>
        </div>
        <div className="flex gap-4 mb-5">
          <button
            type="button"
            className="w-1/2 flex items-center justify-center border-2 border-gray-300 rounded-lg h-11 hover:border-teal-600 hover:bg-teal-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-semibold text-gray-700"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button
            type="button"
            className="w-1/2 flex items-center justify-center border-2 border-gray-300 rounded-lg h-11 hover:border-teal-600 hover:bg-teal-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-semibold text-gray-700"
          >
            <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>
        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-teal-600 font-bold hover:text-teal-700 hover:underline cursor-pointer transition-colors">
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
}