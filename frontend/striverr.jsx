import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
import {fetchCartItems} from './util/gigs_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if(window.currentUser){
    store = configureStore({session:{currentUser: window.currentUser}});
  }else{
    store = configureStore();
  }
  window.fetchCartItems = fetchCartItems;
  window.store = store;
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, root);
});
