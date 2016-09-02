import React from 'react';

const Nav = () => (
  <div className="nav-bar">
    <h4 className="category-header">Categories</h4>
    <ul className="nav-items">
      <a href="#"><li id="gaming">Gaming</li></a>
      <a href="#"><li id="design">Design</li></a>
      <a href="#"><li id="web-dev">Web Dev</li></a>
      <a href="#"><li id="art">Art</li></a>
      <a href="#"><li id="writing">Writing</li></a>
    </ul>
  </div>
);

export default Nav;
