import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './App.css';
import Navbar from './Navbar';

function App() {
  const [page, setPage] = useState('home');
  const chasingImageRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const chasingImage = chasingImageRef.current;
    const audio = audioRef.current;

    if (chasingImage) {
      gsap.to(chasingImage, {
        duration: 3,
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * window.innerHeight,
        repeat: -1,
        ease: "power1.inOut",
        yoyo: true,
      });

      const starvingElements = document.querySelectorAll('.starving-image');
      gsap.to(starvingElements, {
        x: gsap.utils.wrap([0, 10]),
        y: gsap.utils.wrap([0, 10]),
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.1,
        modifiers: {
          x: gsap.utils.unitize(x => gsap.getProperty(chasingImage, "x") - gsap.getProperty(x, "x")),
          y: gsap.utils.unitize(y => gsap.getProperty(chasingImage, "y") - gsap.getProperty(y, "y")),
        },
      });
    }

    if (audio) {
      audio.volume = 0.2; // Set volume to 20%
    }
  }, [page]);

  const handleButtonClick = () => {
    setPage(page === 'home' ? 'second' : 'home');
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const renderStarvingImages = () => {
    const images = [];
    for (let i = 0; i < 20; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      images.push(
        <img
          key={i}
          src="./starving.png"
          alt="Starving"
          className="starving-image"
          style={{ top: `${top}%`, left: `${left}%` }}
        />
      );
    }
    return images;
  };

  return (
    <div className="App">
      <Navbar />
      <h1 className='m'>Mummy Iggy</h1>
      <audio ref={audioRef} src="./fancy.mp3" />
      {page === 'home' ? (
        <div className="full-screen">
          <div className="main-content">
            <img src="./i.png" alt="Background Left" className="background-image" style={{ width: "50%", height: "100%" }} />
            <img src="./igg.png" alt="First Page" className="main-image" />
            <img src="./i.png" alt="Background Right" className="background-image" style={{ width: "50%", height: "100%" }} />
          </div>
          {renderStarvingImages()}
          <img ref={chasingImageRef} src="./i.png" alt="Chasing" className="chasing-image" />
          <button 
            className="navigate-button" 
            style={{ top: '70%' }} 
            onClick={handleButtonClick}>
              Naughty
          </button>
        </div>
      ) : (
        <div className="full-screen">
          <div className="main-content">
            <img src="./i.png" alt="Background Left" className="background-image" style={{ width: "50%", height: "100%" }} />
            <img src="./back.png" alt="Second Page" className="main-image" />
            <img src="./i.png" alt="Background Right" className="background-image" style={{ width: "50%", height: "100%" }} />
          </div>
          {renderStarvingImages()}
          <img ref={chasingImageRef} src="./i.png" alt="Chasing" className="chasing-image" />
          <button 
            className="navigate-button" 
            style={{ top: '50%' }} 
            onClick={handleButtonClick}>
              Don't touch
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
