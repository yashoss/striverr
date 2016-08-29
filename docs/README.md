# Striver
**add heroku link**

## Minimum Viable Product
Striverr is a domain that allows users to post gigs (voice overs, web design, etc.) along with their qualifications. Other users can then browse these gigs in order to discover the service they need. The idea was inspired by www.fiverr.com. By the end of week 9, this app will, at minimum, satisfy the following critera with smooth, bug- free navigation, adequate seed data, and sufficient CSS styling:

* Hosting on Heroku  
* New account creation, login, and guest/demo login  
* Production README  
* Post gigs  
* Search bar  
* Gig dashboard  
  * orders, gig views, profile views, and listed gigs  
* Categories  
  * Nav bar with search by category 
* Rate and review  

## Design Docs
- [View Wireframes](https://github.com/yashoss/striverr/tree/master/docs/wireframes)  
- [React Components](https://github.com/yashoss/striverr/blob/master/docs/component-hierarchy.md)  
- [API endpoints](https://github.com/yashoss/striverr/blob/master/docs/api-endpoints.md)  
- [DB schema](https://github.com/yashoss/striverr/blob/master/docs/schema.md)  
- [Redux Structure](https://github.com/yashoss/striverr/blob/master/docs/redux-structure.md)  
- [Sample State](https://github.com/yashoss/striverr/blob/master/docs/sample-state.md)  

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2days)

**Objective:** Functioning rails project with front-end Authentication

* New Rails project
* user model/migration
* Back end authentication (session/password)
* StaticPages controller and root view
* Webpack & react/redux modules
* APIUtil to interact with the API
* Redux cycle for frontend Authentication
* User signup/signin Components
* Blank landing components after signup/signin
* Style signup/signin components
* Seed Users
* Review phase 1

### Phase 2: Gig Model, API, and components (3 days)

**Objective:** Gigs can be created, viewed, edited, and deleted

* Gig Model
* Seed database with test data
* Gigs controller
* New gig form
* JBuilder views for gigs
* Style gig components

### Phase 3: Cart (1 day)

**Objective:** Cart items can be added and removed.

* Cart Model
* Seed database with test data
* Cart controller
* Adding and deleting cart items
* Checkout
* Style carts pages

### Phase 4: Dashboard (2 days)

**Objective:** Create a user dashboard to observe statistics

* Create a JBuilder views for the dashboard
* Implement proper calculations for dashboard statistics
* Allow gig editing and deleting from dashboard
* Style dashboard

### Phase 5: Reviews (1 day)

**Objective:** Allow users to review their purchases

* Reviews Model
* Seed test data
* Reviews controller
* JBuilder views for reviews
* Style reveiws

### Bonus Features

* favorites
* trending
* on site mailing/communication
* Link social media
