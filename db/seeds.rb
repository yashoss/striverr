# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

5.times do
  User.create!(username: Faker::Internet.user_name, password: "password", email: Faker::Internet.email)
end

User.create!(username: "Guest", password: "password", email: "guestemail@yopmail.com")

Gig.create!(user_id: 1, title: "Will style your webpage", category: "Web design",
      description: "Test description", photo_url: "http://schneeblog.com/wp-content/uploads/2013/08/blank.jpg",
      delivery_time: 3, revisions: 3, price: 5, gig_views: 0)

Gig.create!(user_id: 1, title: "Will write you a poem", category: "Art",
      description: "Test description", photo_url: "http://schneeblog.com/wp-content/uploads/2013/08/blank.jpg",
      delivery_time: 3, revisions: 3, price: 5, gig_views: 0)

Gig.create!(user_id: 2, title: "Will design you a logo", category: "Art",
      description: "Test description", photo_url: "http://schneeblog.com/wp-content/uploads/2013/08/blank.jpg",
      delivery_time: 3, revisions: 3, price: 5, gig_views: 0)

Gig.create!(user_id: 3, title: "Will test your website", category: "Web development",
      description: "Test description", photo_url: "http://schneeblog.com/wp-content/uploads/2013/08/blank.jpg",
      delivery_time: 3, revisions: 3, price: 5, gig_views: 0)
