export const GigsConstants = {
  RECEIVE_GIGS: "RECEIVE_GIGS",
  REQUEST_GIGS: "REQUEST_GIGS",
  REQUEST_SINGLE_GIG: "REQUEST_SINGLE_GIG",
  RECEIVE_SINGLE_GIG: "RECEIVE_SINGLE_GIG"
};

export const receiveGigs = gigs => ({
  type: GigsConstants.RECEIVE_GIGS,
  gigs
});

export const requestGigs = () => ({
  type: GigsConstants.REQUEST_GIGS
});

export const requestSingleGig = id => ({
  type: GigsContants.REQUEST_SINGLE_GIG,
  id
});

export const receiveSingleGig = gig => ({
  type: GigsConstants.RECEIVE_SINGLE_GIG,
  gig
});
