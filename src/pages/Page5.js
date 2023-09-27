import React, { useEffect, useState } from 'react';
import images from '../images/frame5.png';
import { Link } from 'react-router-dom';
import '../animations.css'; 

function Page5() {
  const [text, setText] = useState('');
  const message = "Those with the Dragon Zodiac are truly exceptional beings. They possess an innate power that sets them apart from others, making them natural leaders and charismatic individuals. Their presence commands attention, and they have the ability to inspire those around them with their visionary ideas and boundless ambition. Dragons are known for their courage, and they fearlessly confront challenges head-on, emerging victorious even in the face of adversity. They are protectors of their loved ones and possess a strong sense of justice. The Dragon Zodiac is a symbol of strength, wisdom, and transformation. People born under this sign are believed to be destined for greatness, with the potential to achieve remarkable feats and leave a lasting legacy. As they soar through life's challenges, they light up the world with their fiery spirit and illuminate the path for others to follow."; 
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
      <Link to="/page6">
        <button className="bg-blue-200 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
          Next
        </button>
      </Link>
    </div>
  );
}

export default Page5;
