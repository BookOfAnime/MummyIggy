import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondPage.css';

function SecondPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="full-screen">
      <img src="/path/to/your/image2.jpg" alt="Second Page" className="full-screen-image" />
      <button className="navigate-button" onClick={handleClick}>Go to Home Page</button>
    </div>
  );
}

export default SecondPage;