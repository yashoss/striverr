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

          <form onSubmit={this.handleSubmit} onChange={this.update("rating")} value={this.state.rating}>
            <textarea value={this.state.body} placeholder="Leave feedback..."
              onChange={this.update("body")} className="review-body"/>

            <br />
            <label className="review-rating">Rating: </label>
            <fieldset className="rating">
                <input type="radio" id="star5" name="rating" value={5} /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
                <input type="radio" id="star4" name="rating" value={4} /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                <input type="radio" id="star3" name="rating" value={3} /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
                <input type="radio" id="star2" name="rating" value={2} /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star1" name="rating" value={1} /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
            </fieldset>

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
