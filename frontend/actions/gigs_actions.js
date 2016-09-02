export const GigsConstants = {
  RECEIVE_GIGS: "RECEIVE_GIGS",
  REQUEST_GIGS: "REQUEST_GIGS"
};

export const receiveGigs = gigs => ({
  type: GigsConstants.RECEIVE_GIGS,
  gigs
});

export const requestGigs = () => ({
  type: GigsConstants.REQUEST_GIGS
});
