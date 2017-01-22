import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => (
  <div>
    <header>
      <div className="search-container">
        <Link to="/" className="header-link"><h1>Striverr</h1></Link>
        <Search />
      </div>
      <GreetingContainer />
    </header>
    {children}
    <footer>
      <div className="footer">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/" className="footer-link">About Us</Link>
        <Link to="/" className="footer-link">Contact</Link>
        <p className="cpyright">Made By: Yasin Hosseinpur</p>
      </div>
    </footer>
  </div>
);

export default AboutUs;
