@gigs.each do |gig|
  json.set! gig.id do
    json.id gig.id
    json.title gig.title
    json.photo_url gig.photo_url
    json.price gig.price
    json.category gig.category
    json.delivery_time gig.delivery_time
    json.revisions gig.revisions
    json.description gig.description
    json.user do
      json.username gig.user.username
    end
    json.reviews do
      gig.reviews.each do |review|
        json.set! review.id do
          json.rating review.rating
        end
      end
    end
    
  end
end
