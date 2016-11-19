import React from 'react';
import {hashHistory} from 'react-router';
import Modal from 'react-modal';
import GigShowContainer from './gigs_show_container';
import ReviewFormContainer from '../reviews/review_form_container';

export default class GigsIndex extends React.Component{
  constructor(props){
    super(props);
    this.gigs = {};
    this.handleClick = this.handleClick.bind(this);
    this.state={
      key: -1,
      modal: false,
      style:{
        overlay : {
          position        : 'fixed',
          top             : 0,
          left            : 0,
          right           : 0,
          bottom          : 0,
          backgroundColor : 'rgba(255, 255, 255, 0.75)',
          zIndex          : 999,
          transition      : "all 1s ease"
        },
        content : {
          margin          : 'auto',
          width           : "865px",
          height          : "635px",
          border          : '1px solid #ccc',
          padding         : '10px',
          backgroundColor : 'rgba(156, 174, 190, 0.79)',
          overflowY       : 'hidden'

        }
      }
    };


  }

  openModal(key){
    this.setState({modal: true, key: key});
    $("html, body").css('overflowY', 'hidden');
  }

  closeModal(){
    this.setState({modal: false});
    $("html, body").css('overflowY', 'initial')
  }

  componentDidMount(){
    this.props.requestGigs();
  }

  handleClick(id){
    hashHistory.push(`/gigs/${id}`);
  }

  render(){
    const gigs_list = [];
    this.gigs = this.props.gigs;
    for (let key in this.gigs){
      let score = 0;
      let count = 0;
      for (let r in this.gigs[key].reviews){
        score += this.gigs[key].reviews[r].rating
        count += 1;
      }
      if (count > 0){
        score /= count * 5;
        score *= 100;
      }

      gigs_list.push(
          <li key={key} onClick={this.openModal.bind(this, key)}>
            <div className="holder">
              <div className="image" id="image-show">
                <p className="username-index">{this.gigs[key].user.username}</p>
                <div className="star-ratings-sprite"><span id={`star-ratings-sprite-rating-${key}`} id="stars" style={{width: `${score}%`}} className="star-ratings-sprite-rating"></span></div>
                <img src={this.gigs[key].photo_url} />
                <p className="title-index">
                  {this.gigs[key].title}
                </p>
                <p className="index-price">
                  Price: ${this.gigs[key].price}
                </p>
              </div>
            </div>
          </li>
        )
    }
    return(
      <div id="gigs-index">
        <ul>
          {gigs_list}
        </ul>
        <Modal isOpen={this.state.modal} onRequestClose={this.closeModal.bind(this)}  style={this.state.style}>
          <div className="close-button">
            <h1 className="close" onClick={this.closeModal.bind(this)}>X</h1>
          </div>
          <GigShowContainer id={this.state.key}/>
        </Modal>
      </div>
    )
  }
}
