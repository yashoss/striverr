import {GigsConstants} from '../actions/gigs_actions';

export const fetchGigs = function(success){
  $.ajax({
    method: "GET",
    url: "/api/gigs",
    data: {category: "all"},
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

export const removeGig = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/gigs/${id}`,
    success
  });
};

export const updateGig = (gig, success, id) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/gigs/${id}`,
    data: gig,
    success
  });
};

export const filterGigs = function(category, success){
  $.ajax({
    method: "GET",
    url: "/api/gigs",
    data: {category: category},
    success,
    error: () => console.log('error')
  });
};

export const checkout = (id, success) => {
  $.ajax({
    method: 'DELETE',
    data: {user_id: id, type: "co"},
    url: `/api/carts/${id}`,
    success
  });
};
