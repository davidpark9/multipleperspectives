import React, { useEffect, useState } from 'react';
import images from '../images/frame2.png';
import { Link } from 'react-router-dom';
import '../animations.css'; 

function Page2() {
  const [text, setText] = useState('');
  const message = "The Mouse Zodiac represents those who are quick-witted, adaptable, and resourceful. They possess a natural curiosity and the ability to find creative solutions to life's challenges. People with this zodiac sign are often sociable and make great friends, always ready to lend a helping hand."; 
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
      <Link to="/page3">
        <button className="bg-blue-200 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
          Next
        </button>
      </Link>
    </div>
  );
}

export default Page2;
