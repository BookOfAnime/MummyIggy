import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="https://pump.fun/board">PUMP</a></li>
        <li><a href="https://t.me/MummyIggyPortal">Telegram</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
