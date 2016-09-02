import React from 'react';
import Nav from '../nav/nav';
import GigsIndexContainer from '../gigs/gigs_index_container';

const Home = () => (
  <div className="main-home">
    <img src="http://onthehub.com/wp-content/uploads/blog-hero-banner-quote.jpg" />
    <Nav />
    <GigsIndexContainer />
  </div>
);

export default Home;
