import React from 'react';
import Nav from '../nav/nav';
import GigsIndexContainer from '../gigs/gigs_index_container';

const Home = () => {
  var img1={
    backgroundImage: 'url(' + 'https://static.pexels.com/photos/7077/man-people-office-writing.jpg' + ')'
  }

  var img2={
    backgroundImage: 'url(' + 'https://static.pexels.com/photos/7354/startup-photos.jpg' + ')'
  }

  var img3={
    backgroundImage: 'url(' + 'https://static.pexels.com/photos/26742/pexels-photo.jpg' + ')'
  }

  var img4={
    backgroundImage: 'url(' + 'https://static.pexels.com/photos/28462/pexels-photo-28462.jpg' + ')'
  }

  return(
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
      <div className="wrapper-background" style={img1}></div>
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
      <div className="wrapper-background" style={img2}></div>
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
      <div className="wrapper-background" style={img3}></div>
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
      <div className="wrapper-background" style={img4}></div>
      </div>
      </div>

      </div>
      </div>
          <Nav />
      <GigsIndexContainer />
    </div>
  );
};

export default Home;
