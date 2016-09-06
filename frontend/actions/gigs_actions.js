export const GigsConstants = {
  RECEIVE_GIGS: "RECEIVE_GIGS",
  REQUEST_GIGS: "REQUEST_GIGS",
  REQUEST_SINGLE_GIG: "REQUEST_SINGLE_GIG",
  RECEIVE_SINGLE_GIG: "RECEIVE_SINGLE_GIG",
  CREATE_GIG: "CREATE_GIG",
  ADD_CART_ITEM: "ADD_CART_ITEM"
};

export const receiveGigs = gigs => ({
  type: GigsConstants.RECEIVE_GIGS,
  gigs
});

export const requestGigs = () => ({
  type: GigsConstants.REQUEST_GIGS
});

export const requestSingleGig = id => ({
  type: GigsConstants.REQUEST_SINGLE_GIG,
  id
});

export const receiveSingleGig = gig => ({
  type: GigsConstants.RECEIVE_SINGLE_GIG,
  gig
});

export const createGig = gig => ({
  type: GigsConstants.CREATE_GIG,
  gig
});

export const addCartItem = (cartItem, success) => ({
  type: GigsConstants.ADD_CART_ITEM,
  cartItem,
  success
})
