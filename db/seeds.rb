# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(username: "AnnRobinson", password: "password", email: "ann.robinson@yopmail.com",
  description: "I am an avid reader and writer. I attended University of Chicago and received my masters in comparative literature. I specialize in creative writing. I get along with words very well.",
  profile_views: Faker::Number.digit, photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482718715/user1-min_gvjllg.jpg")

User.create!(username: "ttechDev", password: "password", email: "nowyouseeme@yopmail.com",
  description: "I believe that every company, business, website & Artist needs a Mobile APP these days. I can do it for you. Mobile App is a great tool for Improving your Company, Business, Website, Blog, Facebook page, and more.",
  profile_views: Faker::Number.digit, photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482718715/user2-min_hbcfai.jpg")

User.create!(username: "philster", password: "password", email: "phil.wang@yopmail.com",
  description: "Hey guys, I am recent graduate with a major in biological sciences. I am a jack of all trades, and you won't be disappointed with any of my work!",
  profile_views: Faker::Number.digit, photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482718715/user3-min_jzghhc.jpg")

User.create!(username: "atlas", password: "password", email: "greekatlas@yopmail.com",
  description: "I have delivered over 300 orders in Striverr. 99% of my customers are very happy with my services. Hire me and you will be among the customers who think I'm great at what I do!",
  profile_views: Faker::Number.digit, photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482718716/user4-min_vgivui.jpg")

User.create!(username: "makeup-magician", password: "password", email: "mysticbeauty@yopmail.com",
  description: "I am a vector artist and I mostly draw a cartoon vector. High quality drawings, with a professional service! Feel free to contact me anytime.",
  profile_views: Faker::Number.digit, photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482718715/user5-min_gyxzw1.jpg")

User.create!(username: "PenPaper", password: "password", email: "PenPaper@yopmail.com",
  description: "I am a commercial, lit and film writer. I have written scripts for ads on many network channels, television series and narrative films.",
  profile_views: Faker::Number.digit, photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482718715/user6-min_tfx7ed.jpg")

User.create!(username: "MooneyCat", password: "password", email: "mooneycat@yopmail.com",
  description: "I can uncurse your by using some ancient secret techniques that I've discovered after 30 years of practice, study and meditation. For those who are really cursed, this is a very effective way to get rid of troubles. If your problems are caused by a curse, then they will simply vanish.",
  profile_views: Faker::Number.digit, photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482718716/user7-min_mzmy9f.jpg")


User.create!(username: "Guest", password: "password", email: "guestemail@yopmail.com",
  description: "I am a guest user, enjoy the site!", profile_views: 4, photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482718716/user8_pqmrk3.webp")

Gig.create!(user_id: 1, title: "Will style your webpage!", category: "design",
      description: "WIll style 4 of your webpages to look sleek and professional.", photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744028/gig1-min_mgbuzl.jpg",
      delivery_time: 2, revisions: 1, price: 25, gig_views: 2)

Gig.create!(user_id: 6, title: "Will write you a poem!", category: "writing",
      description: "William shakespeare quality, will write up to 60 lines of any style poetry you like", photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744028/gig2-min_pt5aza.jpg",
      delivery_time: 3, revisions: 2, price: 5, gig_views: 4)

Gig.create!(user_id: 1, title: "Will design you a logo", category: "design",
      description: "I will create you a logo for your business, or just for fun! Provide 3 revisions and 3 copies each time. Delivered as an image file.",
      photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744028/gig3-min_tqyicg.jpg",
      delivery_time: 1, revisions: 5, price: 10, gig_views: 1)

Gig.create!(user_id: 3, title: "Will test your website!", category: "web-dev",
      description: "I will go through your website and find any bugs you might have. I will include in a text file how to recreate the bugs.", photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744028/gig4-min_uw0r1a.jpg",
      delivery_time: 5, revisions: 1, price: 5, gig_views: 22)

Gig.create!(user_id: 2, title: "Will design Eye Catching Logo for you within 24hrs", category: "design",
      description: "2 premium Logo Concepts with Vector Editable files.", photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744028/gig5-min_bgazho.jpg",
      delivery_time: 3, revisions: 1, price: 50, gig_views: 3)

Gig.create!(user_id: 7, title: "Will promote your world of warcraft clan to the strongest players!", category: "gaming",
      description: "I will gather at least 5 really strong players for your world of warcraft clan!", photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744028/gig6-min_evwnph.jpg",
      delivery_time: 3, revisions: 2, price: 5, gig_views: 7)

Gig.create!(user_id: 2, title: "Will teach you a magic trick!", category: "gaming",
      description: "I will send you a video teaching you a random magic trick from my collection!",
      photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744029/gig7-min_el36tj.jpg",
      delivery_time: 2, revisions: 2, price: 5, gig_views: 15)

Gig.create!(user_id: 4, title: "Will send you a training video!", category: "art",
      description: "I will send you a workout training video to help sculpt your body like a Greed god/goddess!", photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744028/gig8-min_vro1ek.jpg",
      delivery_time: 5, revisions: 1, price: 10, gig_views: 4)

Gig.create!(user_id: 8, title: "Will help you determine the layout of your space!", category: "design",
      description: "I will tell you how to organize your furniture for your office or home.", photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744029/gig9-min_kcsrng.jpg",
      delivery_time: 1, revisions: 2, price: 5, gig_views: 47)

Gig.create!(user_id: 1, title: "Will write you a biography!", category: "writing",
      description: "I will write a nice biography for your blog, website, book, etc.", photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744029/gig10-min_con7tw.jpg",
      delivery_time: 5, revisions: 3, price: 5, gig_views: 8)

Gig.create!(user_id: 3, title: "Will make you a mobile app!", category: "web-dev",
      description: "One multiplatform mobile application!", photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744030/gig11-min_w8jmax.jpg",
      delivery_time: 5, revisions: 1, price: 100, gig_views: 3)

Gig.create!(user_id: 3, title: "Will help you think of 5 website names!", category: "web-dev",
      description: "I will help you think of 5 names for either your company / website / product / app / .com URL.!", photo_url: "http://res.cloudinary.com/dzjhhor8g/image/upload/v1482744029/gig12-min_c1mmkl.jpg",
      delivery_time: 5, revisions: 1, price: 5, gig_views: 3)



Order.create!( gig_id:1, user_id:8)
Order.create!( gig_id:2, user_id:8)
Order.create!( gig_id:3, user_id:4)
Order.create!( gig_id:4, user_id:1)
Order.create!( gig_id:5, user_id:6)
Order.create!( gig_id:6, user_id:2)
Order.create!( gig_id:7, user_id:3)
Order.create!( gig_id:8, user_id:5)
Order.create!( gig_id:9, user_id:7)
Order.create!( gig_id:10, user_id:6)
Order.create!( gig_id:11, user_id:7)
Order.create!( gig_id:9, user_id:1)
Order.create!( gig_id:3, user_id:3)
Order.create!( gig_id:4, user_id:8)
Order.create!( gig_id:11, user_id:4)
Order.create!( gig_id:7, user_id:5)

Review.create!( gig_id:1, author_id:8, body: "The product is phenomenal.", rating: 5)
Review.create!( gig_id:2, author_id:8, body: "Hats off to you!", rating: 4 )
Review.create!( gig_id:3, author_id:4, body: "The logo was beautiful!", rating: 5)
Review.create!( gig_id:4, author_id:1, body: "Did a pretty good job.", rating: 3)
Review.create!( gig_id:5, author_id:6, body: "Many regrets", rating: 1)
Review.create!( gig_id:6, author_id:2, body: "My team is stacked!", rating: 5)
Review.create!( gig_id:7, author_id:3, body: "Wow that was so simple!", rating: 4)
Review.create!( gig_id:8, author_id:5, body: "*wolf whistle*", rating: 5)
Review.create!( gig_id:9, author_id:7, body: "Love the flow", rating: 4)
Review.create!( gig_id:10, author_id:6, body: "Did not deliver on time", rating: 2)
Review.create!( gig_id:11, author_id:7, body: "It's pretty simplistic", rating: 3)
Review.create!( gig_id:9, author_id:1, body: "Perfect feng shui", rating: 5)
Review.create!( gig_id:3, author_id:3, body: "Pleasure working with you", rating: 5)
Review.create!( gig_id:4, author_id:8, body: "Notes were helpful", rating: 4)
Review.create!( gig_id:11, author_id:4, body: "Not what I expected", rating: 2)
Review.create!( gig_id:7, author_id:5, body: "Now you see me, now you...", rating: 5)

Review.create!( gig_id:12, author_id:3, body: "Wow that was so simple!", rating: 4)
Review.create!( gig_id:12, author_id:5, body: "*wolf whistle*", rating: 5)
Review.create!( gig_id:5, author_id:7, body: "Love the flow", rating: 4)
Review.create!( gig_id:3, author_id:7, body: "It's pretty simplistic", rating: 3)
