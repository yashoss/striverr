import React from 'react';
import {withRouter} from 'react-router';

class EditGigForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      title: "",
      category: "Gaming",
      description: "",
      photo_url: "http://schneeblog.com/wp-content/uploads/2013/08/blank.jpg",
      delivery_time: 1,
      revisions: 1,
      price: 5
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  componentDidMount(){
    this.setState({
      user_id: this.props.currentUser.id,
      title: this.props.gig.title,
      category: this.props.gig.category,
      description: this.props.gig.description,
      photo_url: this.props.gig.photo_url,
      delivery_time: this.props.gig.delivery_time,
      revisions: this.props.gig.revisions,
      price: this.props.gig.price
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const gig = Object.assign({}, this.state);
    this.props.editGig({gig}, this.props.id);
    this.props.router.push("/");
  }

  render(){
    return(
      <div className="new-gig-container">
        <div className="new-gig-form">
          <h3 className="new-gig-title">Edit Gig</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="gig-field">Title: </label>
            <input type="text" value={this.state.title}
              onChange={this.update("title")} className="gig-field"/>

            <label className="gig-field">Category: </label>
            <select>
              <option value="gaming" onSelect={this.update("category")}>Gaming</option>
              <option value="design" onSelect={this.update("category")}>Design</option>
              <option value="web-dev" onSelect={this.update("category")}>Web-Dev</option>
              <option value="art" onSelect={this.update("category")}>Art</option>
              <option value="writing" onSelect={this.update("category")}>Writing</option>
            </select>

            <label className="gig-field">Description: </label>
            <textarea value={this.state.description}
              onChange={this.update("description")} className="gig-field"/>

            <label className="gig-field">Photo_url: </label>
            <input type="text" value={this.state.photo_url}
              onChange={this.update("photo_url")} className="gig-field"/>

            <label className="gig-field">Delivery Time: </label>
            <select>
              <option value={1} onSelect={this.update("delivery_time")}>1 day</option>
              <option value={2} onSelect={this.update("delivery_time")}>2 day</option>
              <option value={3} onSelect={this.update("delivery_time")}>3 day</option>
              <option value={4} onSelect={this.update("delivery_time")}>4 day</option>
              <option value={5} onSelect={this.update("delivery_time")}>5 day</option>
            </select>

            <label className="gig-field">Revisions: </label>
            <select>
              <option value={1} onSelect={this.update("revisions")}>1</option>
              <option value={2} onSelect={this.update("revisions")}>2</option>
              <option value={3} onSelect={this.update("revisions")}>3</option>
              <option value={4} onSelect={this.update("revisions")}>4</option>
              <option value={5} onSelect={this.update("revisions")}>5</option>
            </select>

            <label className="gig-field">price: </label>
            <select>
              <option value={5} onSelect={this.update("price")}>$5</option>
              <option value={10} onSelect={this.update("price")}>$10</option>
              <option value={25} onSelect={this.update("price")}>$25</option>
              <option value={50} onSelect={this.update("price")}>$50</option>
              <option value={100} onSelect={this.update("price")}>$100</option>
            </select>

            <div className="button-holder">
              <input type="submit" value="Update" className="new-gig-button"/>
            </div>
          </form>
          </div>
        </div>
    )
  }

}

export default withRouter(EditGigForm);
