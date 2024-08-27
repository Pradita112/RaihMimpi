import React from 'react';
import 'animate.css';
import Typical from 'react-typical';
import m from '../../assets/p.png'; // Ensure the path to your image is correct

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center p-8 h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${m})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0,
          animation: 'fadeInBackground 2s forwards'
        }}
      ></div>

      {/* Overlay Section */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Section */}
      <div className="relative z-10 text-center p-10 bg-black bg-opacity-40 rounded-lg max-w-3xl animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg animate__animated animate__fadeInDown">
          Selamat Datang di Kesempatan Terbaik!
        </h1>
        
        {/* Animated Text Section using Typical */}
        <Typical
          steps={[
            'Temukan berbagai Hal Menarik.', 3000,
            'Jelajahi dunia baru.', 3000,
            'Ciptakan momen luar biasa.', 3000,
          ]}
          loop={Infinity}
          wrapper="p"
          className="text-lg mb-8 text-gray-300 drop-shadow-md"
        />

        <button className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
          Jelajahi Sekarang
        </button>
      </div>

      {/* Define the keyframes animation */}
      <style>{`
        @keyframes fadeInBackground {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
