json.extract! @gig, :id, :title, :price, :photo_url, :description, :category, :delivery_time, :revisions
json.user do
  json.username @gig.user.username
  json.id @gig.user.id
  json.description @gig.user.description
  json.photo_url @gig.user.photo_url
end
