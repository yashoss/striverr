@gigs.each do |gig|
  json.set! gig.id do
    json.id gig.id
    json.title gig.title
    json.photo_url gig.photo_url
    json.price gig.price
    json.user do
      json.username gig.user.username
    end
  end
end
