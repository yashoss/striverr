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
      json.gig_views gig.gig_views
      json.reviews do
        gig.reviews.each do |review|
          json.set! review.id do
            json.body review.body
            json.rating review.rating
            json.author review.author.username
            json.pic review.author.photo_url
            json.author_id review.author.id
            json.gig_id review.gig_id
          end
        end
      end
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

json.sells do
  @user.sells.each do |sale|
    json.set! sale.id do
      json.title sale.gig.title
      json.photo_url sale.gig.photo_url
      json.price sale.gig.price
      json.delivery_time sale.gig.delivery_time
      json.category sale.gig.category
      json.revisions sale.gig.revisions
      json.description sale.gig.description
      json.email sale.user.email
    end
  end
end
