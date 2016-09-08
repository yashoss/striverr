json.partial! "api/users/user", user: @user
json.gigs do
  @user.gigs.each do |gig|
    json.set! gig.id do
      json.id gig.id
      json.title gig.title
      json.photo_url gig.photo_url
      json.price gig.price
      json.category gig.category
      json.delivery_time gig.delivery_time
      json.revisions gig.revisions
      json.description gig.description
    end
  end
end

json.carts do
  @user.carts.each do |cart_item|
    json.set! cart_item.id do
      json.title cart_item.gig.title
      json.photo_url cart_item.gig.photo_url
      json.price cart_item.gig.price
      json.delivery_time cart_item.gig.delivery_time
      json.category cart_item.gig.category
      json.revisions cart_item.gig.revisions
      json.description cart_item.gig.description
      json.seller cart_item.gig.user.username
    end
  end
end
