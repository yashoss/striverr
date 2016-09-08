# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

5.times do
  User.create!(username: Faker::Internet.user_name, password: "password", email: Faker::Internet.email, description: Faker::Hipster.paragraph,
    profile_views: Faker::Number.digit, photo_url: Faker::Avatar.image)
end

User.create!(username: "Guest", password: "password", email: "guestemail@yopmail.com",
  description: "I am a guest user", profile_views: 4, photo_url: Faker::Avatar.image)

Gig.create!(user_id: 1, title: "Will style your webpage", category: "Web design",
      description: "Best css in town, much better than striverr", photo_url: "http://designmodo.com/wp-content/uploads/2013/01/retinsjs.png",
      delivery_time: 3, revisions: 3, price: 5, gig_views: 2)

Gig.create!(user_id: 1, title: "Will write you a poem", category: "Art",
      description: "William shakespeare quality", photo_url: "http://www.thepublicdiscourse.com/wp-content/uploads/2016/04/shakespeare.jpg",
      delivery_time: 3, revisions: 3, price: 5, gig_views: 4)

Gig.create!(user_id: 2, title: "Will design you a logo", category: "Art",
      description: "Self explanatory", photo_url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
      delivery_time: 3, revisions: 3, price: 5, gig_views: 1)

Gig.create!(user_id: 3, title: "Will test your website", category: "Web development",
      description: "Best hacker in town", photo_url: "http://pre09.deviantart.net/5e00/th/pre/i/2007/248/9/a/matrix_screen_saver_by_icyalaska.jpg",
      delivery_time: 3, revisions: 3, price: 5, gig_views: 22)

Gig.create!(user_id: 4, title: "Will make a watermelon sculpture", category: "Art",
      description: "Will carve a sculpture out of a single watermelon", photo_url: "http://occ144datkn3vrjlq7r63p19.wpengine.netdna-cdn.com/wp-content/uploads/2014/06/Alligator-Watermelon-Carving.jpg",
      delivery_time: 5, revisions: 1, price: 25, gig_views: 3)

Gig.create!(user_id: 6, title: "Will fire my lazer", category: "Gaming",
      description: "Will fire mah lazer", photo_url: "https://i.ytimg.com/vi/-iuFkBvEPDs/hqdefault.jpg",
      delivery_time: 1, revisions: 5, price: 5, gig_views: 7)
