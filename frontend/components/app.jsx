import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import Search from './nav/search';
const App = ({children}) => (
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
        <Link to="/about" className="footer-link">About Me</Link>
        <Link to="/" className="footer-link">Contact</Link>
        <p className="cpyright">Made By: Yasin Hosseinpur</p>
      </div>
    </footer>
  </div>
);

export default App;
