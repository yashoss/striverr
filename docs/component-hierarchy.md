# Component Hierarchy

* App
  * Header
    * Search bar
    * User nav
      * User nav items
  * Nav Bar
    * Tags
  * Gigs container
    * Gigs list
      * Gigs item
    * View gig
      * Gig details
  * Sign up/Sign in
  * New user info form
  * New gig form
  * Shopping cart
    * Cart list
      * Cart list items
    * Checkout
  * Dashboard
    * User info
    * User gigs
    * Gig statistics

## Routes

|         Path                 |      Component          |
|:-----------------------------|:------------------------|
|"/"                           |"App"                    |
|"/api/new_user"               |"New user info form"     |
|"/api/new_gig"                |"New gig form"           |
|"/api/gig/:id"                |"View gig"               |
|"/api/cart"                   |"Shopping cart"          |
|"/api/users/:id"              |"Dashboard"              |
