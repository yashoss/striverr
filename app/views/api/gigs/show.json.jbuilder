json.extract! @gig, :id, :title, :price, :photo_url, :description, :category, :delivery_time, :revisions
json.user do
  json.username @gig.user.username
  json.id @gig.user.id
  json.description @gig.user.description
  json.photo_url @gig.user.photo_url
end

json.reviews do
  @gig.reviews.each do |review|
    json.set! review.id do
      json.body review.body
      json.rating review.rating
      json.author review.author.username
      json.pic review.author.photo_url
      json.author_id review.author.id
    end
  end
end
