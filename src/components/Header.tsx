import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="header-title">
        <div className="header-title-line">BLUE HOUR</div>
        <div className="header-title-line">APPARITIONS</div>
      </div>
      <div className="header-horizon" aria-hidden="true" />
    </header>
  );
};

export default Header;
