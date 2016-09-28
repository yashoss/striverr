import React from 'react';
import Nav from '../nav/nav';
import GigsIndexContainer from '../gigs/gigs_index_container';

const Home = () => (
  <div className="main-home">
  <div id="slider">
    <div id="slogan">
      <h1 className="slogan1"> LET OTHERS WORK</h1>
      <br />
      <h1 className="slogan2">FOR</h1><h1 className="slogan3"> YOU</h1>
    </div>
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
    <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg"/>
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
    <img src="https://static.pexels.com/photos/7375/startup-photos.jpg"/>
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
    <img src="https://static.pexels.com/photos/26742/pexels-photo.jpg"/>
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
    <img src="https://static.pexels.com/photos/28462/pexels-photo-28462.jpg"/>
    </div>
    </div>

    </div>
    </div>
        <Nav />
    <GigsIndexContainer />
  </div>
);

export default Home;
