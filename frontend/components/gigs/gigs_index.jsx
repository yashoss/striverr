import React from 'react';

export default class GigsIndex extends React.Component{
  constructor(props){
    super(props);
    this.gigs = {};
  }

  componentDidMount(){
    this.props.requestGigs();
  }

  render(){
    const gigs_list = [];
    this.gigs = this.props.gigs;
    for (let key in this.gigs){
      gigs_list.push(
          <li key={key}>
          <a href={`/api/gigs/${this.gigs[key].id}`}>
          <img src={this.gigs[key].photo_url} />
          {this.gigs[key].title}
          <p>
            ${this.gigs[key].price}
          </p>
          </a>
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
