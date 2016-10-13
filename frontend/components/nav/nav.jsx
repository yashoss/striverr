import React from 'react';
import {GigsConstants, requestGigsCategory} from '../../actions/gigs_actions';

const Nav = () => (
      <div key="nav" className="nav-bar">
        <h4 key="categotries" className="category-header">Categories</h4>
        <ul className="nav-items">
          <li key="gaming" onClick={getByCategory.bind(this, "gaming")} id="gaming">Gaming</li>
          <li key="design" onClick={getByCategory.bind(this, "design")} id="design">Design</li>
          <li key="web-dev" onClick={getByCategory.bind(this, "web-dev")} id="web-dev">Web Dev</li>
          <li key="art" onClick={getByCategory.bind(this, "art")} id="art">Art</li>
          <li key="writing" onClick={getByCategory.bind(this, "writing")} id="writing">Writing</li>
          <li key="all" onClick={getByCategory.bind(this, "all")} id="all">All</li>
        </ul>
      </div>
);

const getByCategory = category => {
  store.dispatch(requestGigsCategory(category));
};

export default Nav;
