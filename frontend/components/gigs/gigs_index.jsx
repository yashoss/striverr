import React from 'react';
import {hashHistory} from 'react-router';

export default class GigsIndex extends React.Component{
  constructor(props){
    super(props);
    this.gigs = {};
    this.handleClick = this.handleClick.bind(this);
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
          <li key={key} onClick={this.handleClick.bind(this, key)}>
          <img src={this.gigs[key].photo_url} />
          {this.gigs[key].title}
          <p>
            ${this.gigs[key].price}
          </p>
          </li>
        )
    }
    return(
      <div id="gigs-index">
        <ul>
          {gigs_list}
        </ul>
      </div>
    )
  }
}
