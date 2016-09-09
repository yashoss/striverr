export const ReviewConstants = {
  CREATE_REVIEW: "CREATE_REVIEW",
  RECEIVE_SINGLE_REVIEW: "RECEIVE_SINGLE_REVIEW"
};

export const createReview = review => ({
  type: ReviewConstants.CREATE_REVIEW,
  review
});

export const receiveSingleReview = review => ({
  type: ReviewConstants.RECEIVE_SINGLE_REVIEW,
  review
})
