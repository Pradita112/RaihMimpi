import React, { useState } from 'react';
import app from "../server/firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Home/components/Navbar';
import 'animate.css';
import m from '../assets/L.png';

function Write() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [webLink, setWebLink] = useState("");

  const saveData = async () => {
    if (!imageFile) {
      alert("Please select an image file to upload.");
      return;
    }
    const db = getDatabase(app);
    const storage = getStorage(app);
    const imageRef = storageRef(storage, `images/${imageFile.name}`);

    const uploadTask = uploadBytesResumable(imageRef, imageFile);

    uploadTask.on(
      'state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        alert("Error uploading image: " + error.message);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const newDocRef = push(ref(db, "competitions"));

          set(newDocRef, {
            competitionTitle: title,
            competitionDescription: description,
            imageUrl: downloadURL,
            webLink: webLink,
          })
          .then(() => {
            alert("Data saved successfully");
            navigate(`/displayImagePage/${newDocRef.key}`); // Navigate to the display page with the document key
          })
          .catch((error) => {
            alert("Error: " + error.message);
          });
        });
      }
    );
  };

  return (
    <div>
      <Navbar />
      <div className="relative flex items-center justify-center p-8 h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="flex flex-1 justify-center items-center h-full">
          <img
            src={m}
            alt="Motivational Background"
            className="object-cover w-15 h-full max-w-lg rounded-lg shadow-lg animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="flex flex-1 justify-center items-center h-full p-3">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full animate__animated animate__fadeInRight">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Write New Competition
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Competition Title
                </label>
                <input
                  type='text'
                  placeholder='Enter competition title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Competition Description
                </label>
                <input
                  type='text'
                  placeholder='Enter competition description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Competition Image
                </label>
                <input
                  type='file'
                  accept='image/*'
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Web Link
                </label>
                <input
                  type='text'
                  placeholder='Enter web link'
                  value={webLink}
                  onChange={(e) => setWebLink(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  onClick={saveData}
                >
                  Save Data
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs mt-6">
              Or go to another page:
            </p>
            <div className="flex justify-around mt-4">
              <button className='text-blue-500 hover:text-blue-700' onClick={() => navigate("/updateread")}>
                GO UPDATE READ
              </button>
              <button className='text-blue-500 hover:text-blue-700' onClick={() => navigate("/read")}>
                GO READ PAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
