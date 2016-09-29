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
  </div>
);

export default App;
