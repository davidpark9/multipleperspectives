import React, { useEffect, useState } from 'react';
import images from '../images/frame4.png';
import { Link } from 'react-router-dom';
import '../animations.css'; 

function Page4() {
  const [text, setText] = useState('');
  const message = "Those with the Anteater Zodiac possess a unique blend of qualities that set them apart. They are incredibly inquisitive, always eager to explore the depths of knowledge and seek out hidden truths. Patience is a virtue they hold dear, allowing them to persevere through challenges and find solutions where others might falter. Their resourcefulness knows no bounds, and they have a knack for uncovering the hidden treasures of life's mysteries. The Anteater Zodiac is a symbol of curiosity, endurance, and discovery. People born under this sign are believed to be destined for extraordinary adventures, where their insatiable thirst for knowledge leads them to uncover the secrets of the universe. As they journey through life, they leave a trail of wisdom and enlightenment for others to follow."; 
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
      <Link to="/page5">
        <button className="bg-blue-200 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
          Next
        </button>
      </Link>
    </div>
  );
}

export default Page4;

