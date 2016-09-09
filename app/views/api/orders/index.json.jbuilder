@orders[0].each do |order|
  json.set! order.id do
    json.title order.gig.title
    json.photo_url order.gig.photo_url
    json.price order.gig.price
    json.delivery_time order.gig.delivery_time
    json.category order.gig.category
    json.revisions order.gig.revisions
    json.description order.gig.description
    json.seller order.gig.user.username
    json.email order.gig.user.email
  end
end
