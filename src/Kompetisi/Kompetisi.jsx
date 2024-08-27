import React, { useState, useEffect } from 'react';
import app from "../server/firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";
import Navbar from '../Home/components/Navbar';
import heroImage from '../assets/a.png'; // Add a hero image path

function Kompetisi() {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const competitionsRef = ref(db, 'competitions'); // Fetch all competitions

    onValue(competitionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const competitionsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setCompetitions(competitionsArray);
      }
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20 flex-shrink-0">
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Jelajahi Kompetisi </h1>
          <p className="text-lg mb-8">
          Temukan dan berpartisipasi dalam kompetisi menarik. Gulir untuk melihat semua peluang luar biasa!
          </p>
        </div>
      </div>

      {/* Competitions List */}
      <div className="p-8 bg-gray-700 flex-grow">
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {competitions.length > 0 ? (
            competitions.map((competition) => (
              <div key={competition.id} className="bg-white rounded-lg shadow-lg p-6 w-80 flex-shrink-0 transform transition-transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-xl font-bold mb-4 text-gray-800">{competition.competitionTitle}</h2>
                {competition.imageUrl && (
                  <img
                    src={competition.imageUrl}
                    alt={competition.competitionTitle}
                    className="object-cover w-full h-48 rounded-lg shadow-lg mb-4"
                  />
                )}
                <p className="text-gray-700 text-base mb-4">{competition.competitionDescription}</p>
                {competition.webLink && (
                  <a
                    href={competition.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-white">Loading competitions...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Kompetisi;
