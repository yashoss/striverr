import React from "react";
import {GigsConstants, requestGigsCategory} from '../../actions/gigs_actions';

export default class Search extends React.Component{

  constructor(props){
    super(props)
  }

  search(e){
      store.dispatch(requestGigsCategory(e.target.value));
  }

  render(){
    return(
      <div method="get" id="search">
        <input className='search-bar' name="q" type="text" size="40" placeholder="Discover" onChange={this.search.bind(this)}/>
        <a href="#" className="js-search-submit magnify"></a>
      </div>
    )
  }
}
