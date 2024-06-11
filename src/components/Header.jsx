import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search type of keywords" />
      <div className="user-info">
        <button>?</button>
        <button>🔔</button>
        <span>Frostmourne</span>
      </div>
    </header>
  );
};

export default Header;
