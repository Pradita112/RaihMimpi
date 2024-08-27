import React from 'react';
import Navbar from './Navbar';
import 'animate.css';
import m from '../../assets/L.png'; // Pastikan path gambar sudah benar

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <div className="relative flex items-center justify-center p-8 h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        {/* Left Section with Image */}
        <div className="flex flex-1 justify-center items-center h-full">
          <img
            src={m}
            alt="Motivational Background"
            className="object-cover w-15 h-full max-w-lg rounded-lg shadow-lg animate__animated animate__fadeInLeft"
          />
        </div>

        {/* Right Section with SignUp Form */}
        <div className="flex flex-1 justify-center items-center h-full p-3">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full animate__animated animate__fadeInRight">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Sign Up
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs mt-6">
              Already have an account? <a href="/signin" className="text-blue-500 hover:text-blue-700">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
