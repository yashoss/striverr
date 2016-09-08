import React from 'react';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './home/home_container';
import GigShowContainer from './gigs/gigs_show_container';
import NewGigFormContainer from './gigs/new_gig_form_container';
import CartsIndexContainer from './carts/carts_index_container';
import DashboardContainer from './dashboard/dashboard_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />
          <Route path="/users/:id" component={ DashboardContainer } />
          <Route path="/gigs/new" component={ NewGigFormContainer } />
          <Route path="/carts/:id" component={ CartsIndexContainer} />
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/guest" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
