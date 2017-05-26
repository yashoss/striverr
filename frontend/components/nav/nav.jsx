import React from 'react';
import {GigsConstants, requestGigsCategory} from '../../actions/gigs_actions';

class Nav extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selected: "all"
    }
  }

  hilight(category = "all"){
    $(`#${this.state.selected}`).css("color", "#555");
    $(`#${category}`).css("color", "#09E109");
    this.setState({selected: category});
  }

  componentDidMount(){
    this.hilight();
  }

  getByCategory(category) {
    store.dispatch(requestGigsCategory(category));
    this.hilight(category);
  };

  render(){
    return (
          <div key="nav" className="nav-bar">
            <h4 key="categotries" className="category-header">Categories</h4>
            <ul className="nav-items">
              <li key="gaming" onClick={this.getByCategory.bind(this, "gaming")} id="gaming" className="nav-item">Gaming</li>
              <li key="design" onClick={this.getByCategory.bind(this, "design")} id="design" className="nav-item">Design</li>
              <li key="web-dev" onClick={this.getByCategory.bind(this, "web-dev")} id="web-dev" className="nav-item">Web Dev</li>
              <li key="art" onClick={this.getByCategory.bind(this, "art")} id="art" className="nav-item">Art</li>
              <li key="writing" onClick={this.getByCategory.bind(this, "writing")} id="writing" className="nav-item">Writing</li>
              <li key="all" onClick={this.getByCategory.bind(this, "all")} id="all" className="nav-item">All</li>
            </ul>
          </div>
    );
  }
}

export default Nav;
