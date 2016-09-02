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
