class Review < ActiveRecord::Base
  validates :author_id, :gig_id, :body, :rating, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :gig,
    primary_key: :id,
    foreign_key: :gig_id,
    class_name: :Gig
end
