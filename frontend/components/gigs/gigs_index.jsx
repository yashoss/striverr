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
          width           : '1000px',
          height          : '85%',
          border          : '1px solid #ccc',
          padding         : '20px',
          backgroundColor : 'rgba(156, 174, 190, 0.79)'

        }
      }
    };


  }

  openModal(key){
    this.setState({modal: true, key: key});
  }

  closeModal(){
    this.setState({modal: false});
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
      gigs_list.push(
          <li key={key} onClick={this.openModal.bind(this, key)}>
          <div className="holder">
          <div className="image">
          <img src={this.gigs[key].photo_url} />
          {this.gigs[key].title}
          <p>
            Price: ${this.gigs[key].price}
          </p>
            <div className="details">
              <h1>{this.gigs[key].user.username}</h1>
              <p>{this.gigs[key].description}</p>
            </div>
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
          <GigShowContainer id={this.state.key}/>
        </Modal>
      </div>
    )
  }
}
