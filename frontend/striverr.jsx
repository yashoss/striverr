import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if(window.currentUser){
    store = configureStore({session:{currentUser: window.currentUser}});
  }else{
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
