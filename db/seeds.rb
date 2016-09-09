# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(username: "AnnRobinson", password: "password", email: "ann.robinson@yopmail.com",
  description: "I am an avid reader and writer. I attended University of Chicago and received my masters in comparative literature. I specialize in creative writing. I get along with words very well.",
  profile_views: Faker::Number.digit, photo_url: "https://assets.entrepreneur.com/content/16x9/822/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg")

User.create!(username: "illusionMaster", password: "password", email: "nowyouseeme@yopmail.com",
  description: "I am a great magician! Your clothes are red!",
  profile_views: Faker::Number.digit, photo_url: "https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg")

User.create!(username: "philster", password: "password", email: "phil.wang@yopmail.com",
  description: "Hey guys, I am recent graduate with a major in biological sciences. I am a jack of all trades, and you won't be disappointed with any of my work!",
  profile_views: Faker::Number.digit, photo_url: "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg")

User.create!(username: "atlas", password: "password", email: "greekatlas@yopmail.com",
  description: "World class body builder and personal trainer",
  profile_views: Faker::Number.digit, photo_url: "http://static.boredpanda.com/blog/wp-content/uploads/2015/01/funny-facebook-profile-photos-1.jpg")

User.create!(username: "makeup-magician", password: "password", email: "mysticbeauty@yopmail.com",
  description: "Hello wonderful people! I am a makeup artist. The body is my canvas!",
  profile_views: Faker::Number.digit, photo_url: "http://whatsappdp.net/wp-content/uploads/2016/03/cool-profile-pics-for-whatsapp.jpg")

User.create!(username: "penANDpaper", password: "password", email: "penandpaper@yopmail.com",
  description: "It's all in my name, I bring the pen and paper together.",
  profile_views: Faker::Number.digit, photo_url: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg")

User.create!(username: "darthJacob", password: "password", email: "jacob.wesser@yopmail.com",
  description: "I love movies, video games, and the internet!",
  profile_views: Faker::Number.digit, photo_url: "http://cdn.images.express.co.uk/img/dynamic/59/590x/Facebook-Star-Wars-Force-Awakens-UK-Paris-French-Flag-Design-The-Force-Awakens-Star-Wars-Awakens-Profile-Picture-Star-Wars-Theme-626859.jpg")


User.create!(username: "Guest", password: "password", email: "guestemail@yopmail.com",
  description: "I am a guest user, enjoy the site!", profile_views: 4, photo_url: "http://a1.static.dailyvoice.com/image/upload/c_limit,f_auto,w_640/bugs_s2g98q.jpg")

Gig.create!(user_id: 1, title: "Will style your webpage!", category: "design",
      description: "WIll style 4 of your webpages to look sleek and professional.", photo_url: "http://designmodo.com/wp-content/uploads/2013/01/retinsjs.png",
      delivery_time: 2, revisions: 1, price: 25, gig_views: 2)

Gig.create!(user_id: 6, title: "Will write you a poem!", category: "writing",
      description: "William shakespeare quality, will write up to 60 lines of any style poetry you like", photo_url: "http://www.thepublicdiscourse.com/wp-content/uploads/2016/04/shakespeare.jpg",
      delivery_time: 3, revisions: 2, price: 5, gig_views: 4)

Gig.create!(user_id: 1, title: "Will design you a logo", category: "design",
      description: "I will create you a logo for your business, or just for fun! Provide 3 revisions and 3 copies each time. Delivered as an image file.",
      photo_url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
      delivery_time: 1, revisions: 5, price: 10, gig_views: 1)

Gig.create!(user_id: 3, title: "Will test your website!", category: "web-dev",
      description: "I will go through your website and find any bugs you might have. I will include in a text file how to recreate the bugs.", photo_url: "http://pre09.deviantart.net/5e00/th/pre/i/2007/248/9/a/matrix_screen_saver_by_icyalaska.jpg",
      delivery_time: 5, revisions: 1, price: 5, gig_views: 22)

Gig.create!(user_id: 2, title: "Will make a watermelon sculpture", category: "art",
      description: "Will carve a sculpture out of a single watermelon!", photo_url: "http://occ144datkn3vrjlq7r63p19.wpengine.netdna-cdn.com/wp-content/uploads/2014/06/Alligator-Watermelon-Carving.jpg",
      delivery_time: 3, revisions: 1, price: 50, gig_views: 3)

Gig.create!(user_id: 7, title: "Will promote your world of warcraft clan to the strongest players!", category: "gaming",
      description: "I will gather at least 5 really strong players for your world of warcraft clan!", photo_url: "http://blogs-images.forbes.com/insertcoin/files/2014/08/world-of-warcraft.jpg",
      delivery_time: 3, revisions: 2, price: 5, gig_views: 7)

Gig.create!(user_id: 2, title: "Will teach you a magic trick!", category: "gaming",
      description: "I will send you a video teaching you a random magic trick from my collection!",
      photo_url: "http://ropetacklecentre.co.uk/wp-content/uploads/2013/11/Family-Magic-ShowW.jpg",
      delivery_time: 2, revisions: 2, price: 5, gig_views: 15)

Gig.create!(user_id: 4, title: "Will send you a training video!", category: "art",
      description: "I will send you a workout training video to help sculpt your body like a Greed god/goddess!", photo_url: "http://spsgear.eu/wp-content/uploads/2014/06/hexs.jpg",
      delivery_time: 5, revisions: 1, price: 10, gig_views: 4)

Gig.create!(user_id: 8, title: "Will help you determine the layout of your space!", category: "design",
      description: "I will tell you how to organize your furniture for your office or home.", photo_url: "https://ae01.alicdn.com/kf/HTB1Y44aJXXXXXbuXVXXq6xXFXXXL/modern-living-room-font-b-couch-b-font-.jpg",
      delivery_time: 1, revisions: 2, price: 5, gig_views: 47)

Gig.create!(user_id: 1, title: "Will write you a biography!", category: "writing",
      description: "I will write a nice biography for your blog, website, book, etc.", photo_url: "http://0104.nccdn.net/1_5/00b/240/14c/biography_3sm---Copy.jpg",
      delivery_time: 5, revisions: 3, price: 5, gig_views: 8)

Gig.create!(user_id: 3, title: "Will make you a mobile app!", category: "web-dev",
      description: "One multiplatform mobile application!", photo_url: "https://www.mobiprobe.com/components/img/mobile_apps.jpg",
      delivery_time: 5, revisions: 1, price: 100, gig_views: 3)


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

Review.create!( gig_id:1, author_id:8, body: "The produce is phenomenal and they put so much heart into it.", rating: 5)
Review.create!( gig_id:2, author_id:8, body: "Hats off to you!", rating: 4 )
Review.create!( gig_id:3, author_id:4, body: "The logo was beautiful!", rating: 5)
Review.create!( gig_id:4, author_id:1, body: "Did a pretty good job.", rating: 3)
Review.create!( gig_id:5, author_id:6, body: "Many regrets", rating: 1)
Review.create!( gig_id:6, author_id:2, body: "My team is stacked!", rating: 5)
Review.create!( gig_id:7, author_id:3, body: "Wow that was so simple!", raiting: 4)
Review.create!( gig_id:8, author_id:5, body: "*wold whistle*", rating: 5)
Review.create!( gig_id:9, author_id:7, body: "Love the flow of the design", rating: 4)
Review.create!( gig_id:10, author_id:6, body: "Did not deliver on time", rating: 2)
Review.create!( gig_id:11, author_id:7, body: "It's pretty simplistic", rating: 3)
Review.create!( gig_id:9, author_id:1, body: "Perfect feng shui", rating: 5)
Review.create!( gig_id:3, author_id:3, body: "Pleasure working with you", rating: 5)
Review.create!( gig_id:4, author_id:8, body: "Notes were helpful", rating: 4)
Review.create!( gig_id:11, author_id:4, body: "Not what I expected", rating: 2)
Review.create!( gig_id:7, author_id:5, body: "Now you see me, now you...", rating: 5)
