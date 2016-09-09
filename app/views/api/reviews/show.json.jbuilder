
  json.body @review.body
  json.rating @review.rating
  json.author @review.author.username
  json.pic @review.author.photo_url
  json.author_id @review.author.id
  json.gig_id @review.gig_id
  json.id @review.id
