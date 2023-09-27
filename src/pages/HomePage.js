import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './HomePage.css';



function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-semi-bold text-blue-900 mb-4">
          Multiple Perspectives
        </h1>
        <p className="text-gray-700 text-xl">by David Park</p>
      
        <Link to="/page1">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
            Begin
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

