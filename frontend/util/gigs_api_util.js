import {GigsConstants} from '../actions/gigs_actions';

export const fetchGigs = function(success){
  $.ajax({
    method: "GET",
    url: "/api/gigs",
    success,
    error: () => console.log('error')
  })
}

export const fetchSingleGig = function(id, success){
  $.ajax({
    method: "GET",
    url: `/api/gigs/${id}`,
    success,
    error: () => console.log('error')
  })
}

export const createGig = (gig, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/gigs',
    data: gig,
    success
  });
};

export const addCartItem = (cartItem, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/carts',
    data: {cart: cartItem},
    success
  });
};

export const fetchCartItems = (user_id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/carts`,
    data: {user_id},
    success
  });
};

export const removeCartItem = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/carts/${id}`,
    success
  });
};
