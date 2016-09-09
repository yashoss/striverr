import React from 'react';
import Nav from '../nav/nav';
import GigsIndexContainer from '../gigs/gigs_index_container';

const Home = () => (
  <div className="main-home">
  <div id="slider">
    <div className="slides">


    <div className="slider">
    <div className="legend"></div>
    <div className="content">
    <div className="content-txt">
    <h1> Discover</h1>
    <h2> Browse posts by low cost sellers for high quality products</h2>
    </div>
    </div>
    <div className="images">
    <img src="https://hd.unsplash.com/photo-1472148083604-64f1084980b9"/>
    </div>
    </div>


    <div className="slider">
    <div className="legend"></div>
    <div className="content">
    <div className="content-txt">
    <h1> Grow </h1>
    <h2> Post gigs for others to purchase and discover your talents </h2>
    </div>
    </div>
    <div className="images">
    <img src="https://hd.unsplash.com/photo-1468497123556-d09d1953db0d"/>
    </div>
    </div>


    <div className="slider">
    <div className="legend"></div>
    <div className="content">
    <div className="content-txt">
    <h1> Delegate </h1>
    <h2> Become a leader and achieve more by delegating your tasks to other professionals </h2>
    </div>
    </div>
    <div className="images">
    <img src="https://hd.unsplash.com/photo-1466951561471-9a9a7b99cd77"/>
    </div>
    </div>


    <div className="slider">
    <div className="legend"></div>
    <div className="content">
    <div className="content-txt">
    <h1> Striverr </h1>
    <h2> Strive to achieve amazing new heights </h2>
    </div>
    </div>
    <div className="images">
    <img src="https://hd.unsplash.com/photo-1458226883246-b55e1a082653"/>
    </div>
    </div>

    </div>
    </div>
        <Nav />
    <GigsIndexContainer />
  </div>
);

export default Home;
