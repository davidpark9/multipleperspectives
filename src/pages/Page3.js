import React, { useEffect, useState } from 'react';
import images from '../images/frame3.png';
import { Link } from 'react-router-dom';
import '../animations.css'; 

function Page3() {
  const [text, setText] = useState('');
  const message = "You are a person that radiates with boundless energy and enthusiasm, always ready to embark on exciting journeys and embrace new experiences. Your free-spirited nature makes you a natural explorer, and your adventurous soul thrives on the thrill of discovery. People with the Horse Zodiac are known for their charisma and charm, often drawing others into their exciting world of possibilities. Your enthusiasm is contagious, inspiring those around you to follow their dreams and live life to the fullest."; 
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
      <h1 className="text-2xl font-semibold text-blue-900">Mouse Zodiac</h1>
      <p className="text-gray-700 mt-2">Multiple Perspectives</p>
      <img 
        src={images} 
        alt="Toad God 01" 
        className="w-full h-auto animate-slide-from-left 3s ease-out" 
      />
      <p className="text-lg mt-4">{text}</p>
      <Link to="/page4">
        <button className="bg-blue-200 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
          Next
        </button>
      </Link>
    </div>
  );
}

export default Page3;
