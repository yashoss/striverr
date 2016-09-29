import React from 'react';
import {GigsConstants, requestGigsCategory} from '../../actions/gigs_actions';

const Nav = () => (
      <div className="nav-bar">
        <h4 className="category-header">Categories</h4>
        <ul className="nav-items">
          <li onClick={getByCategory.bind(this, "gaming")} id="gaming">Gaming</li>
          <li onClick={getByCategory.bind(this, "design")} id="design">Design</li>
          <li onClick={getByCategory.bind(this, "web-dev")} id="web-dev">Web Dev</li>
          <li onClick={getByCategory.bind(this, "art")} id="art">Art</li>
          <li onClick={getByCategory.bind(this, "writing")} id="writing">Writing</li>
          <li onClick={getByCategory.bind(this, "all")} id="all">All</li>
        </ul>
      </div>
);

const getByCategory = category => {
  store.dispatch(requestGigsCategory(category));
};

export default Nav;
