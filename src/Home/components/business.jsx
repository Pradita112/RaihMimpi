import React from 'react';
import imageLeft from '../../assets/a.png'; // Path to your image on the left
import imageRight from '../../assets/L.png'; // Path to your image on the right

const Business = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl bg-gray-800 rounded-lg shadow-lg p-6">
        
        {/* Left Image */}
        <div className="flex-1 flex items-center justify-center p-4">
          <img src={imageLeft} alt="Business Image Left" className="w-full h-auto object-cover rounded-lg" />
        </div>

        {/* Text Content */}
        <div className="flex-1 p-6 space-y-6">
          <h2 className="text-4xl font-bold mb-4 text-white">Visi & Misi Kami</h2>
          
          {/* Vision Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Visi</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Kami berkomitmen untuk menjadi pelopor dalam inovasi bisnis dan memberikan solusi yang berkualitas tinggi kepada pelanggan kami.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Misi</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Misi kami adalah untuk memberikan layanan terbaik dengan integritas, profesionalisme, dan komitmen untuk keunggulan. Kami berusaha untuk mencapai kepuasan pelanggan yang optimal melalui solusi yang inovatif dan efektif.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business;
