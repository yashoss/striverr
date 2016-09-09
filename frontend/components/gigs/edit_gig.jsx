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
            <select onChange={this.update("category")} value={this.state.category}>
              <option value="gaming">Gaming</option>
              <option value="design">Design</option>
              <option value="web-dev">Web-Dev</option>
              <option value="art">Art</option>
              <option value="writing">Writing</option>
            </select>

            <label className="gig-field">Description: </label>
            <textarea value={this.state.description}
              onChange={this.update("description")} className="gig-field"/>

            <label className="gig-field">Photo_url: </label>
            <input type="text" value={this.state.photo_url}
              onChange={this.update("photo_url")} className="gig-field"/>

            <label className="gig-field">Delivery Time: </label>
            <select onChange={this.update("delivery_time")} value={this.state.delivery_time}>
              <option value={1}>1 day</option>
              <option value={2}>2 day</option>
              <option value={3}>3 day</option>
              <option value={4}>4 day</option>
              <option value={5}>5 day</option>
            </select>

            <label className="gig-field">Revisions: </label>
            <select onChange={this.update("revisions")} value={this.state.revisions}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>

            <label className="gig-field">price: </label>
            <select onChange={this.update("price")} value={this.state.price}>
              <option value={5}>$5</option>
              <option value={10}>$10</option>
              <option value={25}>$25</option>
              <option value={50}>$50</option>
              <option value={100}>$100</option>
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
