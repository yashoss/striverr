# Redux Structures

## Auth Cycles

### Session API Request Actions

* signUp
  1. invoked from SignupForm onSubmit
  2. POST /api/users is called.
  3. receiveCurrentUser is set as the success callback.
* login
  1. invoked from SignInForm onSubmit
  2. POST /api/session is called.
  3. receiveCurrentUser is set as the success callback.
* logOut
  1. invoked from Header onSubmit
  2. DELETE /api/session is called.
  3. removeCurrentUser is set as the success callback.
* fetchCurrentUser
  1. invoked from App in didMount
  2. GET /api/session is called.
  3. receiveCurrentUser is set as the success callback.

### Session API Response Actions

* receiveCurrentUser
  1. invoked from an API callback
  2. the SessionReducer stores currentUser in the application's state.
* removeCurrentUser
  1. invoked from API callback
  2. the SessionReducer removes currentUser from the application's state.

## Error Cycles

### Error API Response Actions

* setErrors
  1. invoked from API callbacks on error for actions that generate POST requests
  2. the ErrorReducer stores the form in the application's state; errors are mapped to their respective forms
* removeErrors
  1. invoked from API callbacks on success for actions that generate POST requests
  2. the ErrorReducer removes errors for a given form in the application's state.

## Gig Cycles

### Gig API request actions

* fetchAllGigs
  1. invoked from App in didMount
  2. GET /api/gigs is called.
  3. receiveAllGigs is set as the success callback.
* createGig
  1. invoked from the new gig button onClick
  2. POST /api/notes is called.
  3. receiveSingleGig is set as the success callback.
* fetchSingleGig
  1. invoked from gig items onClick
  2. GET /api/gigs/:id is called.
  3. receiveSingleGig is set as the success callback.
* updateGig
  1. invoked from gig form onSubmit
  2. PATCH /api/gigs is called.
  3. receiveSingleGig is set as the success callback.
* destroyGig
  1. invoked from delete gig button onClick
  2. DELETE /api/gigs/:id is called.
  3. removeGig is set as the success callback.

### Gig API Response Actions

* receiveAllGigs
  1. invoked from an API callback
  2. the GigReducer updates gigs in the application's state.
* receiveSingleGig
  1. invoked from an API callback
  2. the GigReducer updates gig[id] from the application's state.
* removeGig
  1. invoked from an API callback
  2. the GigReducer removes gigs[id] from the application's state.

## Cart Cycles

### Cart API Request Actions

* fetchCurrentCart
  1. invoked from Cart didMount
  2. GET /api/cart is called
  3. receiveCart is set as the success callback.

* deleteCartItem
  1. invoked from delete button on cart item onClick
  2. PATCH /api/cart is called
  3. removeCartItem is set as the success callback

### Cart API Response Actions

* receiveCart
  1. invoked from an API callback
  2. the CartReducer updates the cart from the application's state.
* removeCartItem
  1. invoked from an API callback
  2. the CartReducer updates the cart from the application's state.

### Review API Request Actions

* requestReview
  1. invoked onEnter of gig view page
  2. GET /api/reviews
  3. receiveReviews is set as the success callback.

* createReview
  1. invoked on submission from review form
  2. POST /api/reviews
  3. receiveReviews is set as the success callback

* updateReview
  1. invoked from review edit form
  2. PATCH /api/reviews/:id
  3. receiveReviews is set as the success callback.

### Review API Response Actions

* receiveReview
  1. invoked by requestReview callback
  2. the ReviewsReducer updates the reviews from the application's state.
