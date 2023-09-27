import React, { useEffect, useState } from 'react';
import images from '../images/frame6.png';
import { Link } from 'react-router-dom';
import '../animations.css'; 

function Page6() {
  const [text, setText] = useState('');
  const message = "Those with a Tiger Zodiac are ferocious and understand human intention more closely compared to the other zodiacs. They are super quick to pick up on emotional responses and in response either return empathy, intuition, wisdom, or even sometimes energy."; 
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < message.length) {
        setText((prevText) => prevText + message[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10); 
  }, []);

  return (
    <div className="bg-white-100 p-4">
      <h1 className="text-2xl font-semibold text-blue-900">Tiger Zodiac</h1>
      <p className="text-gray-700 mt-2">Multiple Perspectives</p>
      <img 
        src={images} 
        alt="Toad God 01" 
        className="w-full h-auto animate-slide-from-left 3s ease-out" 
      />
      <p className="text-lg mt-4">{text}</p>
      <Link to="/pag7">
        <button className="bg-blue-200 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
          Next
        </button>
      </Link>
    </div>
  );
}

export default Page6;
