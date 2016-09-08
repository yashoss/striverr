class ChangeGigs < ActiveRecord::Migration
  def change
    change_column :gigs, :gig_views, :integer, default: 0
  end
end
