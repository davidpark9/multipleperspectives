import React, { useEffect, useState } from 'react';
import images from '../images/frame1.png';
import { Link } from 'react-router-dom';

function Page1() {
  const [text, setText] = useState('');
  const message = "People with the Toad Zodiac are known for their kind and warm-hearted nature. They have a natural ability to empathize with others, making them excellent listeners and friends. Those born under this sign often radiate a sense of calm and serenity, offering comfort to those in their presence. The Toad Zodiac represents transformation, intuition, and boundless creativity, and individuals with this sign are believed to be destined for unique and magical adventures. They are intuitive navigators of both their inner worlds and the world around them, helping others find their paths and lending an empathetic ear to anyone in need. Amphibora, the Toad Zodiac, offers its celestial blessings to those who embrace its enchanting energy."; 
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
      <h1 className="text-2xl font-semibold text-blue-900">Toad Zodiac</h1>
      <p className="text-gray-700 mt-2">Multiple Perspectives</p>
      <img src={images} alt="Toad God 01" className="w-full h-auto animate-slide-from-left 3s ease-out" />
      <p className="text-lg mt-4">{text}</p>
      <Link to="/page2">
        <button className="bg-blue-200 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
          Next
        </button>
      </Link>
    </div>
  );
}

export default Page1;
