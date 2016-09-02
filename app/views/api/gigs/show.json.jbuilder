json.extract! @gig, :title, :price, :photo_url, :description, :category, :delivery_time, :revisions
json.user do
  json.username @gig.user.username
end
