import React from 'react';
import {withRouter} from 'react-router';

class ReviewForm extends React.Component{

  constructor(props){
    super(props);
    if(this.props.currentUser){
      this.state = {
          body: "",
          rating: 1,
          author_id: this.props.currentUser.id,
          gig_id: this.props.id
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview({review});
  }

  render(){
    const toRender = [];
    if(this.props.currentUser){
       toRender.push(
        <div>
          <h5 className="review-title">Leave a review:</h5>

          <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.body} placeholder="Leave feedback..."
              onChange={this.update("body")} className="review-body"/>

            <label className="review-rating">Rating: </label>
            <select onChange={this.update("rating")} value={this.state.rating}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5} >5</option>
            </select>

            <div className="button-holder">
              <input type="submit" value="submit" className="review-button"/>
            </div>
          </form>
          </div>
      )
    }else{
      toRender.push(
          <h3 className="review-label">Reviews:</h3>
      )
    }
    return(
      <div className="new-review-form">
        {toRender}
      </div>
    )
  }

}

export default withRouter(ReviewForm);
