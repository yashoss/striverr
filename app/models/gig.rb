class Gig < ActiveRecord::Base
  validates :user_id, :title, :category, :description,
      :delivery_time, :revisions, :price, presence: true

  belongs_to :user

  has_many :carts

  has_many :reviews

  has_many :orders

end
